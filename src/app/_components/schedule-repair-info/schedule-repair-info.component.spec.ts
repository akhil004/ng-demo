import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRepairInfoComponent } from './schedule-repair-info.component';

describe('ScheduleComponent', () => {
  let component: ScheduleRepairInfoComponent;
  let fixture: ComponentFixture<ScheduleRepairInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleRepairInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleRepairInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
