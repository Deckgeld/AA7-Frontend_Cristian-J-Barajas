import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgxsOnInit, Select, Store } from '@ngxs/store';
import * as bootstrap from 'bootstrap';
import { Observable } from 'rxjs';
import { BooksService, book } from 'src/app/core/services/books.service';
import { UpdateBooks } from 'src/state/books.actions';
import { BooksState } from 'src/state/books.state';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @Select(BooksState.getBooks) books$!: Observable<book[]>;

  //Reclaramos las variables necesarias
  myForm!: FormGroup
  isEditorMode: boolean = false;
  myModal!: bootstrap.Modal;

  constructor(
    //inyectamos las dependencias necesarias
    private store: Store,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    //Por esta linea instalamos la dependencia
    this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('exampleModal'));
    //Creamos el form
    this.myForm = this.fb.group({
      id: new FormControl(0),
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(0),
      status: new FormControl(false)
    })
  }

  geIniciales(book: book) {
    return (book.name).charAt(0).toUpperCase();
  }

  editBooks(book: book) {
    this.myModal.show();

    this.isEditorMode = true;
    this.myForm.patchValue(book);
  }

  EDBooks(book: book) {
    let book1 = { ...book };
    book1.status = !book.status;
    //Se decidio cambiar el nombre a la accion EDBooks
    this.store.dispatch(new UpdateBooks(book1));
  }

  subook() {
    if (this.isEditorMode) {
      this.store.dispatch(new UpdateBooks(this.myForm.value))
    }
    this.myModal.hide();
  }
}
