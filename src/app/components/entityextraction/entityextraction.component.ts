import { Component } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {annotation} from "../../model";

@Component({
  selector: 'app-entityextraction',
  templateUrl: './entityextraction.component.html',
  styleUrls: ['./entityextraction.component.css']
})
export class EntityextractionComponent {
  text: string
  sliderVal: number
  imageChecked: boolean
  abstractChecked: boolean
  categoriesChecked: boolean
  service: DandelionService
  response: string
  responselist: annotation[]

  constructor(service:DandelionService) {
    this.text = ""
    this.sliderVal = 0.5
    this.imageChecked = false
    this.abstractChecked = false
    this.categoriesChecked = false
    this.service = service
    this.response = ""
    this.responselist = []
  }

  sendRequest(){
    this.response = ""
    this.service.entityExtraction(this).subscribe(val=>{
      val.annotations.forEach(x=>{
        this.response = this.response + x.label + ", "
      })
      if(this.response.length > 1){
        this.response = this.response.slice(0,-2)
      }
      this.responselist = val.annotations
    })
  }
}
