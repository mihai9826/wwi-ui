import { Component, OnInit } from '@angular/core';
import {UserService} from '../../modules/authentication/service/user.service';
import {Router} from '@angular/router';
import {UserPrincipal} from '../../shared/models/auth/user-principal';
import {faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {ShoppingCartService} from '../../modules/shopping-cart/service/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  user: UserPrincipal;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  open = false;
  cartHover = false;
  cartCounter: string;
  favoriteCounter: string;

  constructor(private router: Router,
              public userService: UserService,
              private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartCounter = `${this.cartService.getAllItems().orderLines.length}`;

    this.userService.getCurrentUser().subscribe(
      user => {
        this.user = user;
        this.userService.getFavoriteItems().subscribe(items => this.favoriteCounter = `${items.length}`);
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
