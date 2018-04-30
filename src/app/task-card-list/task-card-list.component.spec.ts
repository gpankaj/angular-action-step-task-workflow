import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardListComponent } from './task-card-list.component';

describe('TaskCardListComponent', () => {
  let component: TaskCardListComponent;
  let fixture: ComponentFixture<TaskCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
