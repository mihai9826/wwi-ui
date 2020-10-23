import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cart-hover',
  templateUrl: './cart-hover.component.html',
  styleUrls: ['./cart-hover.component.css']
})
export class CartHoverComponent implements OnInit, OnChanges {
  @Input() display = false;

  constructor() { }

  ngOnInit(): void {
    console.log('DISPLAY-------------' + this.display);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('DISPLAY-------------' + this.display);
  }

}
