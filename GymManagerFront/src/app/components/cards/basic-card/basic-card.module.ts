import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCardComponent } from './basic-card.component';
import { MaterialModel } from 'src/material.module';



@NgModule({
  declarations: [
    BasicCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModel
  ],
  exports: [BasicCardComponent]
})
export class BasicCardModule { }
