import { Component, OnInit } from '@angular/core';
import {UserService} from '../../modules/authentication/service/user.service';
import {Router} from '@angular/router';
import {UserPrincipal} from '../../shared/models/auth/user-principal';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  user: UserPrincipal;
  faShoppingCart = faShoppingCart;
  open = false;
  cartHover = false;

  constructor(private router: Router,
              public userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      user => {
        this.user = user;
        console.log(this.user);
      }
    );
  }

  login() {
    this.router.navigate(['auth', 'login']);
  }

  logout() {
    this.userService.logout().subscribe();
    this.router.navigate(['auth', 'login']);
  }

  switchCartPreview(oldState: boolean) {
    this.cartHover = !oldState;
  }

}
