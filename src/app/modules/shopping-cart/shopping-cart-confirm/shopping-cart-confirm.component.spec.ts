import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartConfirmComponent } from './shopping-cart-confirm.component';

describe('ShoppingCartConfirmComponent', () => {
  let component: ShoppingCartConfirmComponent;
  let fixture: ComponentFixture<ShoppingCartConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
