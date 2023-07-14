import { Component, OnInit } from '@angular/core';
import { BooksService, book } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books!: book[];

  constructor(private bks: BooksService) {  }

  ngOnInit(): void {
    this.bks.getBooks().subscribe(resp => this.books = resp)
  }

  geIniciales(book:book){
    return (book.name).charAt(0).toUpperCase();
  }
}
