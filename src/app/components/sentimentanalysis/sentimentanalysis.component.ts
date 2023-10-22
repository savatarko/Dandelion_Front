import { Component } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";

@Component({
  selector: 'app-sentimentanalysis',
  templateUrl: './sentimentanalysis.component.html',
  styleUrls: ['./sentimentanalysis.component.css']
})
export class SentimentanalysisComponent {
  text:string
  langenabled:boolean
  lang:string
  score:string
  value:string
  constructor(private service:DandelionService) {
    this.text = ""
    this.langenabled = false
    this.lang = "auto"
    this.score = ""
    this.value = ""
  }
  sendRequest(){
    this.service.sentimentAnalysis(this).subscribe(val=>{this.score = val.sentiment.score.toString()
    this.value = val.sentiment.type
    })
  }

  getColor(){
    let param:number = (parseFloat(this.score) +1)/2
    let G: number = (255 * param)
    let R: number = (255 * (1 - param))
    let B: number = 0
    return 'rgba(' + R + ',' + G + ',' + B + ')'
  }
}
