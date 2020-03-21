import {Component, Input, OnInit} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {ToastrService} from 'ngx-toastr';


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

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addButtonClicked() {
    this.toastr.success('Product added to shop chart', 'Success');
  }

}
