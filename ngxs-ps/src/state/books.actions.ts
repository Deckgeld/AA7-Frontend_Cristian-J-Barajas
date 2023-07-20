import { book } from "src/app/core/services/books.service";

export class AddBooks {
  static readonly type = '[Books] Add book';
  constructor(public payload: book) { }
}

export class LoadBooks {
  static readonly type = '[Books] Load book';
}

//Cambimos el nombre a la accion EDBooks
export class UpdateBooks {
  static readonly type = '[Books] Update book';
  constructor(public payload: book) { }
}


