import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCardListComponent } from './step-card-list.component';

describe('StepCardListComponent', () => {
  let component: StepCardListComponent;
  let fixture: ComponentFixture<StepCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
