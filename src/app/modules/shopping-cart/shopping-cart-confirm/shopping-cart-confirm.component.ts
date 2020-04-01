import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../authentication/service/user.service';
import {ShoppingCartService} from '../service/shopping-cart.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-shopping-cart-confirm',
  templateUrl: './shopping-cart-confirm.component.html',
  styleUrls: ['./shopping-cart-confirm.component.css']
})
export class ShoppingCartConfirmComponent implements OnInit {
  finishOrderForm = new FormGroup({
    deliveryAddress: new FormControl('', Validators.required),
    comments: new FormControl('')
  });

  constructor(private router: Router,
              private userService: UserService,
              private cartService: ShoppingCartService,
              private toastr: ToastrService) { }

  ngOnInit() {
      this.userService.getCurrentUser().subscribe(userPrincipal => {
        this.finishOrderForm.controls.deliveryAddress.patchValue(userPrincipal.theUser.deliveryAddress);
      });
  }

  onSubmit() {
    const {deliveryAddress, comments} = this.finishOrderForm.getRawValue();
    this.userService.getCurrentUser().subscribe(userPrincipal => this.cartService.setContactPerson(userPrincipal.theUser));
    this.cartService.setDeliveryAddress(deliveryAddress);
    this.cartService.setComments(comments);
    this.cartService.createNewOrder().subscribe(_ =>
      this.router.navigate(['/']).then(__ => this.toastr.success('Order placed', 'Success')));
  }
}
