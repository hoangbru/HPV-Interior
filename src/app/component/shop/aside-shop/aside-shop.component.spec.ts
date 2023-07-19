import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideShopComponent } from './aside-shop.component';

describe('AsideShopComponent', () => {
  let component: AsideShopComponent;
  let fixture: ComponentFixture<AsideShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideShopComponent]
    });
    fixture = TestBed.createComponent(AsideShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
