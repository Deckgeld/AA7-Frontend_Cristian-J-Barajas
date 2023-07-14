import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddBooksAction, LoadBooksAction } from './books.actions';
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

  @Action(AddBooksAction)
  addBook({ getState, setState }: StateContext<BooksStateModel>, { payload }: AddBooksAction) {
    const state = getState();
    setState({ books: [ ...state.books, payload ] });
  }

  @Action(LoadBooksAction)
  loadBooks({ getState, setState }: StateContext<BooksStateModel>): LoadBooksAction {
    return this.bks.getBooks().pipe(
      tap((books: book[]) => {
        const state = getState();
        setState({ ...state, books })
      })
    )
  }
}
