import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //Url de la APIs
  urlBase: string = 'https://localhost:44360/';

  //headers para las APIs
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  //Servicio SignIn
  SignIn(request: any){
    //Endpoint de APIs
    let url: string = `${this.urlBase}api/account`;   
    //request a la API
    return this.http.post<any>(url, request, this.httpOptions);
  }
  
  SignUp(request: any){
    let url: string = `${this.urlBase}api/user`;   
    return this.http.post<any>(url, request, this.httpOptions);
  }
}
