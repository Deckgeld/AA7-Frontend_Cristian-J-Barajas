import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalAlertService {

  constructor() { }

  errorAlert(description:string, title:string){
    return Swal.fire({
      //title es para saber el tipo de error
      title: title,
      //Esto es lo que ve el usaurio
      text: description,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#31a3d'
    })
  }
}
