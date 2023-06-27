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
export class UserEditorComponent {
  constructor(
    private userService: AccountService
  ) {}

  //Pedimos el user del row seleccionado
  @Input() row?: User;
  @Input() confirmButtonText = 'Create User';

  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  myModal!: bootstrap.Modal;

  ngOnInit():void{
    //obtenemos el modal user-editor.component.html y cremos uno nuevo
    this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('staticBackdrop'));
    this.myModal.show()
  }

  closeModal(){
    this.myModal.hide();
    this.closeModalEvent.emit(true);
  }

  resposeForm(response:User){
    console.log('Respuesta desde Sign Up', response)
    let request = {...response, status:true }
    console.log(request);
    this.userService.SignUp(request).subscribe(console.log);
  }
  cancelForm(close: boolean) {
    if(close)
      this.closeModal();
  }
}
