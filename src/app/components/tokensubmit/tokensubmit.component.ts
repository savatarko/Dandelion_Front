import { Component } from '@angular/core';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-tokensubmit',
  templateUrl: './tokensubmit.component.html',
  styleUrls: ['./tokensubmit.component.css']
})
export class TokensubmitComponent {
  token: string
  constructor(private tokenService: TokenService){
    this.token = this.tokenService.getToken()
  }

  setToken():void{
    this.tokenService.setToken(this.token)
  }
}
