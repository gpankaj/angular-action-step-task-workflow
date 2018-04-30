import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowCardListComponent } from './workflow-card-list.component';

describe('WorkflowCardListComponent', () => {
  let component: WorkflowCardListComponent;
  let fixture: ComponentFixture<WorkflowCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
