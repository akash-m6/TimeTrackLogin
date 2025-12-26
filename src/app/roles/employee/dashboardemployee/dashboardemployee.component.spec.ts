import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardemployeeComponent } from './dashboardemployee.component';

describe('DashboardemployeeComponent', () => {
  let component: DashboardemployeeComponent;
  let fixture: ComponentFixture<DashboardemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardemployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
