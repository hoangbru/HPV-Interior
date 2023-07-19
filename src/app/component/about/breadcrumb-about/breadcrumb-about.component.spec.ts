import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbAboutComponent } from './breadcrumb-about.component';

describe('BreadcrumbAboutComponent', () => {
  let component: BreadcrumbAboutComponent;
  let fixture: ComponentFixture<BreadcrumbAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbAboutComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
