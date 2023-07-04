import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
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
      private alertS: SwalAlertService,
      private cookie: CookieService
    ) {}
  
  resposeForm(request:singIn){
    this.login.SignIn(request).subscribe(response => {
      //Valida consultas invalidas, como correo o contraseña incorrectos
      if (response.hasError){
          this.alertS.errorAlert('Usuario o contraseña incorrecto, favor de validar sus credenciales', 'Error!')
      }
      if(response.message === 'Authorized'){
        //Constante que guarda el usaurio loggeado, y un hasSession= true
        const session = { ...response.model, hasSession: true }    
        //lo pasamos a json y lo codificamos en base 64
        let objTemp = btoa(JSON.stringify(session));

        //Genera una nueva cookie
        this.cookie.put('session', objTemp)
        this.router.navigate(['/home']);
      }
    },(error:any) => {
      //Esto esuna mala practica, asi que ten cuidado con relizarlo 
      this.alertS.errorAlert('Servicio no disponible por el momento, favor de contatar a su administrado', 'Lo sentimos')
      console.log(error)
    });
  }
}

