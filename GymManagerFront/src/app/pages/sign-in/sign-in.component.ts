import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { singIn } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(
      private login: AccountService,
      private router: Router,
      private alertS: SwalAlertService
    ) {}
  
  resposeForm(request:singIn){
    this.login.SignIn(request).subscribe(response => {
      //Valida consultas invalidas, como correo o contraseña incorrectos
      if (response.hasError){
          this.alertS.errorAlert('Usuario o contraseña incorrecto, favor de validar sus credenciales', 'Error!')
      }
      if(response.message === 'Authorized'){
        environment.hasSession = true;
        this.router.navigate(['/home']);
      }
    },);
  }
}

