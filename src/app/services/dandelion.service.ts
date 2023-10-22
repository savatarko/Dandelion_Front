import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {EntityextractionComponent} from "../components/entityextraction/entityextraction.component";
import {TextsimilarityComponent} from "../components/textsimilarity/textsimilarity.component";
import {
  EntityExtractionResponse,
  LanguageDetectionResponse, Request,
  SentimentAnalysisResponse,
  TextSimilarityResponse
} from "../model";
import {Observable, timestamp} from "rxjs";
import {TokenService} from "./token.service";
import {LanguagedetectionComponent} from "../components/languagedetection/languagedetection.component";
import {SentimentanalysisComponent} from "../components/sentimentanalysis/sentimentanalysis.component";
import {LoggerService} from "./logger.service";
import {formatDate} from "@angular/common";
import { LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  token:string
  basepath:string
  constructor(@Inject(LOCALE_ID) public locale:string, private httpClient: HttpClient, private tokenService:TokenService, private loggerService:LoggerService) {
    this.token = tokenService.getToken()
    this.basepath = "https://api.dandelion.eu/datatxt"
  }

  entityExtraction(source: EntityextractionComponent){
    this.token = this.tokenService.getToken()
    let params:HttpParams = new HttpParams().set('token', this.token).set('text', source.text).set('min_confidence', source.sliderVal)
    let include:string = ""
    if(source.categoriesChecked){
      include = include + "categories,"
    }
    if(source.abstractChecked){
      include = include + "abstract,"
    }
    if(source.imageChecked){
      include = include + "image,"
    }
    if(include!==""){
      include = include.slice(0, -1)
      params = params.set('include', include)
    }
    this.log(this.basepath + "/nex/v1/" + params.toString())
    return this.httpClient.get<EntityExtractionResponse>(this.basepath + '/nex/v1', {params:params})
  }

  textSimilarity(source: TextsimilarityComponent):Observable<TextSimilarityResponse>{
    this.token = this.tokenService.getToken()
    let params:HttpParams = new HttpParams().set('token', this.token).set('text1', source.text1).set('text2', source.text2)
    this.log(this.basepath + "/sim/v1/" + params.toString())
    return this.httpClient.get<TextSimilarityResponse>(this.basepath + '/sim/v1', {params:params})
  }

  languageDetection(source: LanguagedetectionComponent):Observable<LanguageDetectionResponse>{
    this.token = this.tokenService.getToken()
    let params:HttpParams = new HttpParams().set('token', this.token).set('text', source.text)
    if(source.cleanChecked){
      params = params.set('clean', 'true')
    }
    this.log(this.basepath + "/li/v1/" + params.toString())
    return this.httpClient.get<LanguageDetectionResponse>(this.basepath + '/li/v1', {params:params})
  }

  sentimentAnalysis(source: SentimentanalysisComponent):Observable<SentimentAnalysisResponse>{
    this.token = this.tokenService.getToken()
    let params:HttpParams = new HttpParams().set('token', this.token).set('text', source.text)
    if(source.langenabled){
      params= params.set('lang', source.lang)
    }
    this.log(this.basepath + "/sent/v1/" + params.toString())
    return this.httpClient.get<SentimentAnalysisResponse>(this.basepath + '/sent/v1', {params:params})
  }
  log(path:string){
    let log: Request = {
      timestamp: formatDate(new Date(), "dd.MM.yyyy HH:mm:ss", this.locale),
      url: path
    }
    this.loggerService.log(log)
  }
}
