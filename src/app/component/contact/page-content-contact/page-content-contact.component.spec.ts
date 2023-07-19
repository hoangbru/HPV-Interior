import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentContactComponent } from './page-content-contact.component';

describe('PageContentContactComponent', () => {
  let component: PageContentContactComponent;
  let fixture: ComponentFixture<PageContentContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageContentContactComponent]
    });
    fixture = TestBed.createComponent(PageContentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
