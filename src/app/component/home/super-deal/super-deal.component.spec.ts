import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDealComponent } from './super-deal.component';

describe('SuperDealComponent', () => {
  let component: SuperDealComponent;
  let fixture: ComponentFixture<SuperDealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperDealComponent]
    });
    fixture = TestBed.createComponent(SuperDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
