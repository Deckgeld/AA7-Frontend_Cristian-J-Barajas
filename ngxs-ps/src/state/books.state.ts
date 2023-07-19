import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddBooks, EDBooks, LoadBooks } from './books.actions';
import { BooksService, book } from 'src/app/core/services/books.service';
import { tap } from 'rxjs';

export class BooksStateModel {
  public books!: book[];
}

const defaults = {
  books: []
};

@State<BooksStateModel>({
  name: 'stateBooks',
  defaults
})

@Injectable()
export class BooksState {

  constructor(private bks:BooksService) { }

  //Dentro de booksState es Selector; pero cuando lo utilizaremos en una page es Select
  @Selector()
  public static getBooks({ books }: BooksStateModel): book[]{
    console.log(books, 'from state')
    return books
  }

  @Action(AddBooks)
  addBook({ getState, setState }: StateContext<BooksStateModel>, { payload }: AddBooks) {
    const state = getState();
    setState({ books: [ ...state.books, payload ] });
  }

  @Action(LoadBooks)
  loadBooks({ getState, setState }: StateContext<BooksStateModel>): LoadBooks {
    return this.bks.getBooks().pipe(
      tap((books: book[]) => {
        const state = getState();
        setState({ ...state, books })
      })
    )
  }

  @Action(EDBooks)
  EDBooks({ getState, setState }: StateContext<BooksStateModel>, { payload }: EDBooks) {
    const state = getState();
    //Creamos un obj temporal que desechara todos los libros que no tengan el id del payload
    let bookstmp = state.books.filter(book => book.id !== payload.id);
    //Establece el stado 
    setState({ books: [...bookstmp, payload] })
  }


}
