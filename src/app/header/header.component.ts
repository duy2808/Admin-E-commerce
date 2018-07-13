import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user_email:string;
  constructor( private authService: AuthService) {  }

  ngOnInit() {
    this.user_email = JSON.parse(localStorage.getItem('currentUser')).email;
  }
  onLogout(){
    this.authService.logout();
  }

}
