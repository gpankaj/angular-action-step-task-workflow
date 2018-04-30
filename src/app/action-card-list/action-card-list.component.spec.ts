import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCardListComponent } from './action-card-list.component';

describe('ActionCardListComponent', () => {
  let component: ActionCardListComponent;
  let fixture: ComponentFixture<ActionCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
