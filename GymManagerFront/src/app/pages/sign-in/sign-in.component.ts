import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { singIn, singInResponse } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(
      private login: AccountService,
      private router: Router
    ) {}
  
  resposeForm(request:singIn){
    this.login.SignIn(request).subscribe(response => {
      if (response.hasError){
        alert('Error de capa 8, valida tus credenciales')
      }
      if(response.message === 'Authorized'){
        environment.hasSession = true;
        this.router.navigate(['/home']);
      }
    });
  }
}

//https://localhost:44360/api/account
//https://localhost:44360/api/Account
