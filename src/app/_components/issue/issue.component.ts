import { Component, OnInit } from '@angular/core';
import { ProgressStepsService } from '../../_services';
import { getDetails, getUrl } from '@app/utils';
import { Details } from '@app/_models';
import { Router } from '@angular/router';
import { DeviceService } from '@app/_services'; 
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  step: Object;
  details: Details[] = [];
  theme: string;
  status: boolean = true;
  issues: any = [
    {
      name: 'Broken Screen'
    },
    {
      name: 'Bad Battery'
    },
    {
      name: "Button don't work"
    },
    {
      name: "Phone won't charge"
    },
  ];
  
  constructor(
    private data: ProgressStepsService,
    private router: Router,
    private deviceService: DeviceService,
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(step => this.step = step);
    this.details = getDetails();
    this.theme = getUrl();
  }
  
  updateStep() {
    this.data.changeMessage({
      issue: false,
      schedule: true,
      payment: false,
      confirmation: false,
      issueState: true,
      scheduleState: false,
      paymentSate: false,
      confirmationState: false
    });
  }
  selectIssuse(issue){
    this.deviceService.storeIssue(issue);
    this.updateStep();
    this.router.navigate([this.theme+'/schedule-repair'])
  }
  toggleClass(){
    this.status = !this.status;    
  }
}
