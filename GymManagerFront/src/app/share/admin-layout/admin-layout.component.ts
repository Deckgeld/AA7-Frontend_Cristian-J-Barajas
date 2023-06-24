import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

  constructor(private router:Router, private cookie:CookieService ){
  }
  signOut(){
    this.cookie.remove('session');
    this.router.navigate(['/sign-in']);
  }

}
