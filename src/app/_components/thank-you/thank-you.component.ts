import { Component, OnInit } from '@angular/core';
import { getUrl, getDetails} from '@app/utils';
import { Details } from '@app/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  theme: string;
  details: Details[] = [];
  flag:any= false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.theme = getUrl();
    this.details = getDetails();
  }
  onReschedule(){
    this.flag = true;
    localStorage.setItem('flag', this.flag );
    this.router.navigate([this.theme+'/schedule-repair-address'])
  }
}
