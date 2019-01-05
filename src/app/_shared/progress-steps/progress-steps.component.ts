import { Component, OnInit } from '@angular/core';
import { ProgressStepsService } from './../../_services';
@Component({
  selector: 'app-progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.css']
})
export class ProgressStepsComponent implements OnInit {
  step:any;
  constructor(private data: ProgressStepsService) {
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(step => this.step = step)
  }
  
}
