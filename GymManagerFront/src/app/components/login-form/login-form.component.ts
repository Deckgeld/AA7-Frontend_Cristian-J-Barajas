import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnChanges {
  @Input() isSingUp!: boolean;
  @Input() confirmButtonText = 'Sign In';
  @Input() dataUser?:User; 

  @Output() resposeForm: EventEmitter<any> = new EventEmitter();
  @Output() cancelForm: EventEmitter<boolean> = new EventEmitter();

  formUser!: FormGroup;
  defaultFields = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  }
  extraFields = {
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  }

  hasSession: boolean = false;
  constructor(
    private fb: FormBuilder,
    private cookie:CookieService
    ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { dataUser } = changes;

    this.initForm();
    this.validatorSession();

    if(!!dataUser?.currentValue){
      //Esta linea es la que coloca los datos en los inputs
      this.loadUserInForm(dataUser.currentValue);
    }
  }
  loadUserInForm(currentValue: User) {
    // this.formUser.get('firstName')?.setValue(currentValue.firstName)
    this.formUser.patchValue(currentValue);
  }

  validatorSession() {
    const session = this.cookie.get('session');

    let dataUser;
    if (!!session) {
      dataUser = JSON.parse(atob(session !== undefined ? session : ''));
    }
    if (dataUser?.hasSession) {
      this.hasSession=true;
    }else{
      this.hasSession=false;
      
    }
  }

  //inicializa el formulario que creamos
  initForm() {
    let userFields = { ...this.defaultFields }
    //Si estamos en la pagina de SingUp, agreamos los capos extras
    if (this.isSingUp) {
      userFields = { ...this.defaultFields, ...this.extraFields }
    }

    this.formUser = this.fb.group(
      //inicializamos formUser con los campos
      userFields
    )
    this.formUser.removeControl('password');
  }

  //Ya inisializado el form, lo imprimimos
  onSubmitForm() {
    this.resposeForm.emit(this.formUser.value);
  }

  cancelBtn() {
      this.cancelForm.emit(true);
    }
}
