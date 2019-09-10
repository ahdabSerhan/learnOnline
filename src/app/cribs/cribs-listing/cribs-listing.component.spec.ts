import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribsListingComponent } from './cribs-listing.component';

describe('CribsListingComponent', () => {
  let component: CribsListingComponent;
  let fixture: ComponentFixture<CribsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
