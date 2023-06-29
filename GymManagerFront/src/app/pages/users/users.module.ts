import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MaterialModel } from 'src/material.module';
import { LoginFormModule } from 'src/app/components/login-form/login-form.module';
import { UserEditorModule } from 'src/app/components/userEditor/user-editor/user-editor.module';
import { UserEditorDModule } from 'src/app/components/userEditorDialog/user-editor/user-editor.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule, 
    MaterialModel,
    LoginFormModule,
    UserEditorModule,
    UserEditorDModule
  ]
})
export class UsersModule { }
