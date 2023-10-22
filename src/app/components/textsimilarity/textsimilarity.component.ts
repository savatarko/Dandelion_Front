import { Component } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";

@Component({
  selector: 'app-textsimilarity',
  templateUrl: './textsimilarity.component.html',
  styleUrls: ['./textsimilarity.component.css']
})
export class TextsimilarityComponent {
  text1: string
  text2: string
  response: string
  constructor(private service:DandelionService) {
    this.text1 = ""
    this.text2 = ""
    this.response = ""
  }
  sendRequest(){
    this.service.textSimilarity(this).subscribe(val=>this.response = val.similarity)
  }
}
