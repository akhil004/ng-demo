import { Component, OnInit } from '@angular/core';
import { DeviceService } from '@app/_services';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Device } from '@app/_models';
import { getUrl } from '@app/utils';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  devices: Device[] = [];
  theme: string;
  constructor(
    private deviceService: DeviceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadAllDevices();
    this.theme = getUrl();
  }
  selectDevice(modelName){
    this.deviceService.storeDeviceName(modelName);
    this.router.navigate([this.theme+'/color'])
  }
  private loadAllDevices() {
    this.deviceService.getAll().pipe(first()).subscribe(devices => {
      this.devices = devices['content'];
    })
  }
  nextScreen(){
    this.router.navigate([this.theme+'/color'])
  }

}
