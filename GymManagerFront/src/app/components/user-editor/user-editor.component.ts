import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//Importamos bootstrap
import * as bootstrap from 'bootstrap';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent {
  //Pedimos el user del row seleccionado
  @Input() row?: User;
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
}
