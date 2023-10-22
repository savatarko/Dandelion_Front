import { Component } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {LanguageDetectionResponse} from "../../model";

@Component({
  selector: 'app-languagedetection',
  templateUrl: './languagedetection.component.html',
  styleUrls: ['./languagedetection.component.css']
})
export class LanguagedetectionComponent {
  text:string
  cleanChecked:boolean
  response:string
  constructor(private service: DandelionService) {
    this.text = ""
    this.cleanChecked = true
    this.response = ""
  }
  sendRequest(){
    this.response = ""
    let temp: LanguageDetectionResponse = {
      detectedLangs: []
    };

    this.service.languageDetection(this).subscribe(val => {
      temp = val;
      temp.detectedLangs.forEach(x => {
        this.response = this.response + x.lang + " " + x.confidence + " ";
      });
    });
  }
}
