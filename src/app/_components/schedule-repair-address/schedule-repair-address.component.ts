import { Component, OnInit } from '@angular/core';
import { Details, ScheduleRepairAddress } from '@app/_models';
import { getDetails, getUrl } from '@app/utils';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from '@app/_services';
@Component({
  selector: 'app-schedule-repair-address',
  templateUrl: './schedule-repair-address.component.html',
  styleUrls: ['./schedule-repair-address.component.css']
})
export class ScheduleRepairAddressComponent implements OnInit {
  details: Details[] = [];
  scheduleRepairAddress: ScheduleRepairAddress[] = [];
  addressForm: FormGroup; 
  submitted = false;
  theme: string;
  status: boolean = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private deviceService: DeviceService,

  ) { }



  ngOnInit() {
  this.details = getDetails();
  this.addressForm = this.formBuilder.group({
    address1: ['', Validators.required],
    address2: ['', Validators.required],
    email: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required]
  });
  this.theme = getUrl();
  }

  // convenience getter for easy access to form fields
  get formMessage() { return this.addressForm.controls; }
  onSubmit(){
    this.submitted = true;
    if (this.addressForm.invalid) {
      return;
    }
    this.deviceService.storeUserAddress(this.addressForm.value);
    this.router.navigate([this.theme+'/schedule-repair-time']);
  }
  toggleClass(){
    this.status = !this.status;    
  }
  
}
