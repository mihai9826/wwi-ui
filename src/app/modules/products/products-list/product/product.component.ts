import {Component, Input, OnInit} from '@angular/core';


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
  constructor() { }

  ngOnInit(): void {
  }

}
