import { Injectable } from '@angular/core';
import {Request} from "../model";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  history:Request[]

  constructor() {
    this.history = []
  }

  log(request:Request){
    this.history.push(request)
  }
}
