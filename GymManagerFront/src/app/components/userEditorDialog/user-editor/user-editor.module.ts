import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditorDComponent } from './user-editor.component';
import { MaterialModel } from 'src/material.module';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginFormModule } from '../../login-form/login-form.module';



@NgModule({
  declarations: [UserEditorDComponent],
  imports: [
    CommonModule,
    MaterialModel,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    LoginFormModule
  ],
  exports: [UserEditorDComponent]
})
export class UserEditorDModule { }
