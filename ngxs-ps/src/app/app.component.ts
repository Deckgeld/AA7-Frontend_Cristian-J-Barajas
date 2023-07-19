import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadBooks } from 'src/state/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-ps';

  constructor(private store:Store) { 
    store.dispatch(new LoadBooks());
  }

}
