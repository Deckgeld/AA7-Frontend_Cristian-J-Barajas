import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { MaterialModel } from 'src/material.module';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModel
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormModule { }
