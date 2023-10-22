import { Component } from '@angular/core';
import {LoggerService} from "../../services/logger.service";
import {Request} from "../../model";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  history:Request[]
  constructor(private loggerService:LoggerService) {
    this.history = loggerService.history
  }
}
