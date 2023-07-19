import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbDetailProductComponent } from './breadcrumb-detail-product.component';

describe('BreadcrumbDetailProductComponent', () => {
  let component: BreadcrumbDetailProductComponent;
  let fixture: ComponentFixture<BreadcrumbDetailProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbDetailProductComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
