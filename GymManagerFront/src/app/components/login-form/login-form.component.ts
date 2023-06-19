import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnChanges{
  @Input() isSingUp!:boolean; 
  @Output() resposeForm: EventEmitter<any> = new EventEmitter()

  formUser!: FormGroup;
  defaultFields = {
    email: new FormControl('', [Validators.required, Validators.email] ),
    password: new FormControl('', Validators.required),
  }
  extraFields = {
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),  
    phoneNumber: new FormControl('', Validators.required),  
  }

  //el contructor llama al metodo initForm()
  constructor(
    private fb:FormBuilder){
    }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.initForm();
  }

  //inicializa el formulario que creamos
  initForm(){
    let userFields = {...this.defaultFields }
    //Si estamos en la pagina de SingUp, agreamos los capos extras
    if (this.isSingUp){
      userFields =  {...this.defaultFields, ...this.extraFields}
    }
    this.formUser = this.fb.group(
      //inicializamos formUser con los campos
      userFields
    )
  }

  //Ya inisializado el form, lo imprimimos
  onSubmitForm(){
    this.resposeForm.emit(this.formUser);
  }
}
 