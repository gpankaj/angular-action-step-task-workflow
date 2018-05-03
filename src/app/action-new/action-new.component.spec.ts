import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNewComponent } from './action-new.component';

describe('ActionNewComponent', () => {
  let component: ActionNewComponent;
  let fixture: ComponentFixture<ActionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
