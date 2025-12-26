import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalreportsComponent } from './personalreports.component';

describe('PersonalreportsComponent', () => {
  let component: PersonalreportsComponent;
  let fixture: ComponentFixture<PersonalreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalreportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
