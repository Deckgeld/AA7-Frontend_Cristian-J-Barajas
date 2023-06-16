import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Input() isSingUp:boolean = true; 

  onSubmitForm(f:NgForm){
    console.log('Valores del form', f.value);
    console.log('Mi form', f);
  }
}
 