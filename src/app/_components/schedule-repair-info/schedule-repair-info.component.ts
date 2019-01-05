import { Component, OnInit } from '@angular/core';
import { ProgressStepsService , DeviceService} from '@app/_services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Details, ScheduleRepairInfo } from '@app/_models';
import { getDetails, getUrl } from '../../utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schedule-repair-info',
  templateUrl: './schedule-repair-info.component.html',
  styleUrls: ['./schedule-repair-info.component.css']
})
export class ScheduleRepairInfoComponent implements OnInit {
  step: Object;
  details: Details[] = [];
  theme: string;
  scheduleRepairInfo: ScheduleRepairInfo[] = [];
  infoForm: FormGroup; 
  submitted = false;
  status: boolean = true;
  constructor(
    private data: ProgressStepsService,
    private formBuilder: FormBuilder,
    private deviceService: DeviceService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(step => this.step = step);
    this.details = getDetails();
    this.infoForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      contactMethod: ['', Validators.required],
    });
    this.theme = getUrl();

  }
  updateStep() {
    this.data.changeMessage({
      issue: true,
      schedule: false,
      payment: false,
      confirmation: false,
      issueState: false,
      scheduleState: false,
      paymentSate: false,
      confirmationState: false
    })
  }
  // convenience getter for easy access to form fields
  get formMessage() { return this.infoForm.controls; }
  
  onSubmit(){
    this.submitted = true;
    if (this.infoForm.invalid) {
      return;
    }
    this.deviceService.storeUserInfo(this.infoForm.value);
    this.updateStep();
    this.router.navigate([this.theme+'/schedule-repair-address']);
  }
  toggleClass(){
    this.status = !this.status;    
  }
  
}
