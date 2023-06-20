import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, singIn } from '../interfaces/user';
import { Observable } from 'rxjs';

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
  SignIn(request: singIn): Observable<any>{
    //Endpoint de APIs
    let url: string = `${this.urlBase}api/Account`;   
    //request a la API
    return this.http.post<any>(url, request, this.httpOptions);
  }
  
  //Que es Observable
  SignUp(request: User): Observable<any>{
    let url: string = `${this.urlBase}api/user`;   
    return <any>this.http.post(url, request, this.httpOptions);
  }
}
