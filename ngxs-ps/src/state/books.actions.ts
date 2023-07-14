import { book } from "src/app/core/services/books.service";

export class AddBooksAction {
  static readonly type = '[Books] Add book';
  constructor(public payload: book) { }
}

export class LoadBooksAction {
  static readonly type = '[Books] Load book';
}

export class UpdateBooksAction {
  static readonly type = '[Books] Update book';
  constructor(public payload: book) { }
}

export class DeleteBooksAction {
  static readonly type = '[Books] Delete book';
  constructor(public payload: book) { }
}

