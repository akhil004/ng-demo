import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit, OnDestroy  {

  intervalRef: any = null;
  showMap: boolean = false
  lat: number = 51.678418;
  lng: number = 7.809007;
  latLng: any = [
    {latitude:41.90265,longitude:-88.75181},
    {latitude:41.86789,longitude:-88.75181},
    {latitude:41.80753,longitude:-88.75318},
    {latitude:41.77066,longitude:-88.74906},
    {latitude:41.76862,longitude:-88.66941},
    {latitude:41.76554,longitude:-88.54169},
    {latitude:41.79626,longitude:-88.39063},
    {latitude:41.80855,longitude:-88.07477},
    {latitude:41.81878,longitude:-87.91273},
    {latitude:41.80241,longitude:-87.78913},
    {latitude:41.82441,longitude:-87.71909},
    {latitude:41.85460,longitude:-87.64425},
    {latitude:41.87584,longitude:-87.64594}
  ];
  counter: number = 0;

  constructor() { }

  ngOnInit() {
    this.initiateInterval();
  }

  ngOnDestroy () {
    this.removeInterval();
  }

  initiateInterval () {
    this.intervalRef = setInterval(() => {
      if (this.counter < this.latLng.length) {
        const latLng = this.latLng[this.counter];
        if (latLng) {
          this.lat = latLng.latitude;
          this.lng = latLng.longitude;
          this.counter++;
          console.log('going to change the lat lng.....');
        }
      } else {
        this.counter = 0
      }
    }, 5 * 1000);
  }

  removeInterval () {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }
}
