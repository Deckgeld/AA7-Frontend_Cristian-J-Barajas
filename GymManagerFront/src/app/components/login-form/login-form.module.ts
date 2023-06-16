import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { MaterialModel } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModel,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormModule { }
