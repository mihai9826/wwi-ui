import {Component, Input, OnInit} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {ToastrService} from 'ngx-toastr';
import {ShoppingCartService} from '../../../shopping-cart/service/shopping-cart.service';
import {Product} from '../../../../shared/models/product/product';
import {UserService} from '../../../authentication/service/user.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() price: number;
  @Input() inStock: boolean;

  faShoppingCart = faShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService,
              public userService: UserService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addButtonClicked() {
    const selectedProduct = new Product({
      stockItemId: this.id,
      stockItemName: this.name,
      unitPrice: this.price,
      soldOut: this.inStock
    });

    this.shoppingCartService.addToCart(selectedProduct);
    this.toastr.success('Product added to shop chart', 'Success');
  }

}
