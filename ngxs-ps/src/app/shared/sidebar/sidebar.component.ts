import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CompnameAction } from 'src/state/compname.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.changeTitle('Welcome from Home');
  }

  changeTitle(title: string) {
    //CompnameAction de declaro en el archivo compname.actions.ts
    this.store.dispatch(new CompnameAction(title));
  }

}
