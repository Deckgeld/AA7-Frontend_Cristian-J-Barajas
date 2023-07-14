import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { BooksAction } from './books.actions';

export class BooksStateModel {
  //Aqui te marcara un error, arreglalo de esta forma 
  public items: string[] = [];
}

const defaults = {
  items: []
};

@State<BooksStateModel>({
  name: 'books',
  defaults
})
@Injectable()
export class BooksState {
  @Action(BooksAction)
  add({ getState, setState }: StateContext<BooksStateModel>, { payload }: BooksAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
