import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRepairTimeComponent } from './schedule-repair-time.component';

describe('ScheduleRepairTimeComponent', () => {
  let component: ScheduleRepairTimeComponent;
  let fixture: ComponentFixture<ScheduleRepairTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleRepairTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleRepairTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
