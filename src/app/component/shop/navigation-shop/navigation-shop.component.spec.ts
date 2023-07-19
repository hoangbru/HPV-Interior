import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationShopComponent } from './navigation-shop.component';

describe('NavigationShopComponent', () => {
  let component: NavigationShopComponent;
  let fixture: ComponentFixture<NavigationShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationShopComponent]
    });
    fixture = TestBed.createComponent(NavigationShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
