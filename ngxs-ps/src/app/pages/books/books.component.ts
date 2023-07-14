import { Component } from '@angular/core';
import { BooksService, book } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  books!: book[];

  constructor(private bks: BooksService) {  }

  ngOnInit(): void {
    this.bks.getBooks().subscribe(resp => this.books = resp)
  }

  geIniciales(book:book){
    return (book.name).charAt(0).toUpperCase();
  }
}
