import { Component } from '@angular/core';
import { CardInterface, footerType } from 'src/app/core/interfaces/card-interface';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent {
  //Esta es la estructura que nos debe llegar en los paramentros
  card : CardInterface = {
    typeCard:'basic1',
    closeHeader:false,
    header:{
      title: 'Test Title',
      titleClass: '',
      siglas: 'TT',
    },
    body:{
      title:'',
      titleClass:'',
      desc:'emailTest',
      descClass:'',
      subDesc:'phoneTest',
      subDescClass:'',
    },
    footer:{
      footerClass:'',
      label:'Estatus',
      //Se declara porque es un tipo enum(contante)
      footerType: footerType.typeLbl
    }
  }
}
