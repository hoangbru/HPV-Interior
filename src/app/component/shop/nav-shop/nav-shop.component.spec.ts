import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavShopComponent } from './nav-shop.component';

describe('NavShopComponent', () => {
  let component: NavShopComponent;
  let fixture: ComponentFixture<NavShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavShopComponent]
    });
    fixture = TestBed.createComponent(NavShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
