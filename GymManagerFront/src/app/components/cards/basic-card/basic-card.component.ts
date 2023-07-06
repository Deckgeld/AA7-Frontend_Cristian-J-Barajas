import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardInterface, footerType } from 'src/app/core/interfaces/card-interface';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnChanges{

  //Se usa any, para evitar problemas futuros
  @Input() UserData: any;

  //Esta es la estructura que nos debe llegar en los paramentros
  card : CardInterface = {
    typeCard:'basic1',
    closeHeader:false,
    header:{
      //Cambiamos el tipo dato tanto aqui como en la interfaz
      title: ['firstName', 'lastName'],
      //title: ['email'], si hacemos esto colocara el email de una
      titleClass: 'text-uppercase text-start',
      siglas: 'TT',
    },
    body:{
      title:'firstName',
      titleClass:'',
      desc:'email',
      descClass:'',
      subDesc:'phoneNumber',
      subDescClass:'fst-italic',
    },
    footer:{
      //Se declara porque es un tipo enum(contante)
      footerType: footerType.typeBtn,
      label:'status',
      footerClass:'col-md-12 fw-bolder text-color-green'
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { UserData } = changes;

    //Si UserData no esta vacia entonces ejecuta loadUserData
    if(!!UserData.currentValue){
      this.loadUserData();
    }
  }
  loadUserData() {
    //verifica si existe header y si siglas esta vacio 
    if(this.card.header && this.card.header?.siglas){
      let tmpA: string[] = [];
      //Se agregan 2 Caracteres al array
      this.card.header.title?.forEach(elem => tmpA.push((this.UserData[elem]).charAt(0)))
      //Se une llos valores de la lista reparandolas por el simobolo entre ''
      this.card.header.siglas = tmpA.join('');
    }
  }
  getArrayToText(arrayText: string[]){
    let tmpA:  any = [];
    //Se agrega los nombres en el array
    arrayText.forEach(title => tmpA.push(this.UserData[title]));
    return tmpA.join(' ');
  }
}
