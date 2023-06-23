import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, singIn } from '../interfaces/user';
import { Observable, throwError } from 'rxjs';     
import { catchError } from 'rxjs/operators';
import { ResponseArrayModel, ResponseModel } from '../interfaces/response-model';
import { SwalAlertService } from './swal-alert.service';

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

  constructor(
    private http:HttpClient,
    private alertS: SwalAlertService
  ) { }

  errorHandler(error:HttpErrorResponse){
    let errorMessage = `Error Code: ${error.status}`;
    //valida errores
    if(error.status == 4040){
      this.alertS.errorAlert('Lo sentimos, error detectado, favor de validar mas tarde', 'Error inesperado')
      errorMessage = `${errorMessage} \n message: ${error.error.message}`
    }
    if(error.error.hasError && error.status == 200){
      errorMessage = `message: ${error.error.message}`
    }
    return throwError(errorMessage)
  }

  getUsers(){
    //Url para la peticion
    let url: string = `${this.urlBase}api/User`;   
    //Peticion y/o redireccion al errorHandler
    return this.http.get<ResponseArrayModel<User>>(url, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  SignIn(request: singIn): Observable<ResponseModel<any>>{
    let url: string = `${this.urlBase}api/Account`;   
    return this.http.post<ResponseModel<any>>(url, request, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  
  SignUp(request: User): Observable<ResponseModel<any>>{
    let url: string = `${this.urlBase}api/user`;   
    //pipe redirecciona al errorHandler
    //catchError se debe importar desde 'rxjs/operators'
    return <any>this.http.post<ResponseModel<any>>(url, request, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
}
