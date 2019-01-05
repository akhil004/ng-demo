import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '@app/_services';
import { Device, Details } from '@app/_models';
import { first } from 'rxjs/operators';
import { getDetails, getUrl } from '@app/utils';
@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.css']
})
export class CapacityComponent implements OnInit {
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
  selectCapacity(capacity){
    this.deviceService.storeCapacity(capacity);
    this.router.navigate([this.theme+'/issue'])
  }
  private loadAllDevices() {
    this.deviceService.getAll().pipe(first()).subscribe(devices => {
      this.devices = devices['content'];
    })
  }
}
