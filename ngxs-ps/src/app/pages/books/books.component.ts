import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BooksService, book } from 'src/app/core/services/books.service';
import { EDBooks } from 'src/state/books.actions';
import { BooksState } from 'src/state/books.state';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  @Select(BooksState.getBooks) books$!: Observable<book[]>;

  constructor(private store:Store) {}

  ngOnInit(): void {
  }

  geIniciales(book:book){
    return (book.name).charAt(0).toUpperCase();
  }

  editBooks(book: book) {
      //Componenete capaz de editar o crear nuevos libros
    }
  
  EDBooks(book: book){
    let book1 = { ...book };
    book1.status = !book.status;
    this.store.dispatch(new EDBooks(book1));
  }
}
