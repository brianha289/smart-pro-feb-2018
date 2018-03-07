import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDetailComponent } from './next-detail.component';

describe('NextDetailComponent', () => {
  let component: NextDetailComponent;
  let fixture: ComponentFixture<NextDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
