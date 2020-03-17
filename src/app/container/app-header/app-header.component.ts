import { Component, OnInit } from '@angular/core';
import {UserService} from '../../modules/authentication/service/user.service';
import {Router} from '@angular/router';
import {UserPrincipal} from '../../shared/models/auth/user-principal';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  user: UserPrincipal;
  open = false;

  constructor(private router: Router,
              public userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      user => this.user = user
    );
  }

  login() {
    this.router.navigate(['auth', 'login']);
  }

  logout() {
    this.userService.logout().subscribe();
    this.router.navigate(['auth', 'login']);
  }

}
