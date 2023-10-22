import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token:string

  constructor() {
    if(localStorage.getItem("token") == null){
      this.token = ""
    }
    this.token = localStorage.getItem("token")!
  }

  getToken(): string{
    return this.token
  }

  setToken(t:string): void{
    this.token = t
    localStorage.setItem("token", t)
  }
}
