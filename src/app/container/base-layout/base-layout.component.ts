import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './base-layout.component.html',
  styles: ['.app-body { position: relative; z-index: 0;}']
})
export class BaseLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
