import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartQuickViewComponent } from './shopping-cart-quick-view.component';

describe('ShoppingCartQuickViewComponent', () => {
  let component: ShoppingCartQuickViewComponent;
  let fixture: ComponentFixture<ShoppingCartQuickViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartQuickViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
