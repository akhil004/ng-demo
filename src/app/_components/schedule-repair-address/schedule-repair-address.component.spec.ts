import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRepairAddressComponent } from './schedule-repair-address.component';

describe('ScheduleRepairAddressComponent', () => {
  let component: ScheduleRepairAddressComponent;
  let fixture: ComponentFixture<ScheduleRepairAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleRepairAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleRepairAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
