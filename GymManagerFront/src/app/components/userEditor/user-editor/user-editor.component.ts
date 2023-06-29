import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//Importamos bootstrap
import * as bootstrap from 'bootstrap';
import { User } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';

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
    private userService: AccountService
  ) {
    console.log(this.confirmButtonText, '1');
  }

  ngOnInit():void{
    console.log(this.confirmButtonText, '2');
    //obtenemos el modal user-editor.component.html y cremos uno nuevo
    this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('staticBackdrop'));
    this.myModal.show()
    if(!!this.row){
      this.confirmButtonText = 'Update User';
      console.log(this.confirmButtonText, '3');

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

    if(!!this.row && this.row.id){
      this.userService.updateUser(request, this.row.id).subscribe((resp)=>{
        if (!resp.hasError){
          this.closeModal(true);
        }
      });
    }else{
      this.userService.SignUp(request).subscribe(console.log);
    }
  }
  cancelForm(close: boolean) {
    if(close)
      this.closeModal();
  }
}
