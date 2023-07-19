import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrderPageComponent } from './detail-order-page.component';

describe('DetailOrderPageComponent', () => {
  let component: DetailOrderPageComponent;
  let fixture: ComponentFixture<DetailOrderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailOrderPageComponent]
    });
    fixture = TestBed.createComponent(DetailOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
