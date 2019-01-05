import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '@app/_services';
import { Device, Details } from '@app/_models';
import { first } from 'rxjs/operators';
import { getDetails, getUrl } from '@app/utils';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  devices: Device[] = [];
  details: Details[] = [];
  theme: string;
  constructor(
    private router: Router,
    private deviceService: DeviceService,
  ) { }

  ngOnInit() {
    this.loadAllDevices();
    this.details = getDetails();
    this.theme = getUrl();
  }
  selectColor(color){
    this.deviceService.storeColorName(color);
    this.router.navigate([this.theme+'/capacity'])
  }
  private loadAllDevices() {
    this.deviceService.getAll().pipe(first()).subscribe(devices => {
      this.devices = devices['content'];
      console.log(this.devices);
    })
  }
}
