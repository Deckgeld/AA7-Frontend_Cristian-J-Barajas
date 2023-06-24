import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditorComponent } from './user-editor.component';



@NgModule({
  declarations: [
    UserEditorComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [UserEditorComponent]
})
export class UserEditorModule { }
