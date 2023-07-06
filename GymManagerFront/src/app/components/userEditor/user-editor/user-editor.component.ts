import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//Importamos bootstrap
import * as bootstrap from 'bootstrap';
import { User } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit{
  //Pedimos el user del row seleccionado
  @Input() row?: User;
  @Input() confirmButtonText = '';

  @Output() closeModalEvent: EventEmitter<Object> = new EventEmitter<Object>()
  myModal!: bootstrap.Modal;

  constructor(
    private userService: AccountService,
    private alert: SwalAlertService
  ) {}

  ngOnInit():void{
    //obtenemos el modal user-editor.component.html y cremos uno nuevo
    this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('staticBackdrop'));
    this.myModal.show()
    if(!!this.row){
      this.confirmButtonText = 'Update User';
    }    
  }

  closeModal(refresh: boolean = false){
    this.myModal.hide();
    let close = {
      closeModal: true,
      refreshData: refresh
    }
    this.closeModalEvent.emit(close);
  }

  resposeForm(response:User){
    let request = {...response, status:true } 

    if(!!this.row && this.row.id != undefined){
      this.userService.updateUser(request, this.row.id).subscribe((resp)=>{
        //Si no hay ningun error
        if (!resp.hasError){
          this.closeModal(true);
        }else{
          this.alert.errorAlert('resp.message', 'Error')
        }
      });
    }else{
      this.userService.SignUp(request).subscribe(resp => {
        //Si en la repuesta no hay ningunerror,llama al metodo que refresca la informacion
        if (!resp.hasError) {
          this.closeModal(true);
        //De lo contrario, Muestrar el error en una alerta
        }else{
          this.alert.errorAlert(resp.model[0].code, 'Error');
        }
      }, error =>{
        //Si hay un error muestra esta otra
        this.alert.errorAlert('Servicio no disponible por el momento, favor de consultar a su administrador', 'Error');
        console.log(error.error)
      });
    }
  }
  cancelForm(close: boolean) {
    if(close)
      this.closeModal();
  }
}
