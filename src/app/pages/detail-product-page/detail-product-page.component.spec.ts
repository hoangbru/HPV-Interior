import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductPageComponent } from './detail-product-page.component';

describe('DetailProductPageComponent', () => {
  let component: DetailProductPageComponent;
  let fixture: ComponentFixture<DetailProductPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailProductPageComponent]
    });
    fixture = TestBed.createComponent(DetailProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
