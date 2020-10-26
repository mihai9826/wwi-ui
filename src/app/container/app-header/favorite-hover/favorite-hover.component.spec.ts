import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteHoverComponent } from './favorite-hover.component';

describe('FavoriteHoverComponent', () => {
  let component: FavoriteHoverComponent;
  let fixture: ComponentFixture<FavoriteHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
