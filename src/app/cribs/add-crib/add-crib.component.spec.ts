import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCribComponent } from './add-crib.component';

describe('AddCribComponent', () => {
  let component: AddCribComponent;
  let fixture: ComponentFixture<AddCribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
