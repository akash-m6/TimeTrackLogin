import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksassignedComponent } from './tasksassigned.component';

describe('TasksassignedComponent', () => {
  let component: TasksassignedComponent;
  let fixture: ComponentFixture<TasksassignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksassignedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
