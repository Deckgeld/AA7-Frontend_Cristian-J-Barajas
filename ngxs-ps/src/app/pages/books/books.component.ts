import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BooksService, book } from 'src/app/core/services/books.service';
import { BooksState } from 'src/state/books.state';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  @Select(BooksState.getBooks) books$!: Observable<book[]>;

  ngOnInit(): void {
  }

  geIniciales(book:book){
    return (book.name).charAt(0).toUpperCase();
  }
}
