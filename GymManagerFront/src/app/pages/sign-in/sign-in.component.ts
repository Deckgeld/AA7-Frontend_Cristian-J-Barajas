import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { singIn } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';

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
  
  resposeForm(response:singIn){
    console.log('Respuesta desde Sign In', response)
    this.login.SignIn(response).subscribe(console.log);
  }
}
