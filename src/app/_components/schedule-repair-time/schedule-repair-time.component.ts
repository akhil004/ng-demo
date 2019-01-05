import { Component, OnInit } from '@angular/core';
import { ProgressStepsService, DeviceService } from '@app/_services';
import { Details } from '@app/_models';
import { getDetails,getUrl } from '@app/utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schedule-repair-time',
  templateUrl: './schedule-repair-time.component.html',
  styleUrls: ['./schedule-repair-time.component.css']
})
export class ScheduleRepairTimeComponent implements OnInit {
  step: Object;
  details: Details[] = [];
  selectedDate: Date;
  theme: string;
  status: boolean = true;
  constructor(
    private data: ProgressStepsService,
    private deviceService: DeviceService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(step => this.step = step);
    this.details = getDetails();
    this.theme = getUrl();
  }
  updateStep() {
    this.data.changeMessage({
      issue: false,
      schedule: false,
      payment: true,
      confirmation: false,
      issueState: true,
      scheduleState: true,
      paymentSate: false,
      confirmationState: false
    })
    this.deviceService.storeDate(this.selectedDate);
    
    if(this.details[0]['flag'] === 'true'){
      return this.router.navigate([this.theme+'/confirmation']);
    }
    this.router.navigate([this.theme+'/payment-details']);
  }
  onCustomDateChange(event){
    console.log(event.value instanceof Date, event.value);
    this.selectedDate = event.value;
  }
  toggleClass(){
    this.status = !this.status;    
  }

}
