import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Device} from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private http: HttpClient) {
  }

  getAll(){
    const manufacturerName = localStorage.getItem('manufacturerName');
    return this.http.get<Device[]>(`${environment.endPoint}/products-details?manufacturer=${manufacturerName}`);
  }
  storeManufactureName(manufacturerName){
    return localStorage.setItem('manufacturerName',manufacturerName)
  }
  storeDeviceName(modelName){
    return localStorage.setItem('modelName', modelName);
  }
  storeColorName(color){
    return localStorage.setItem('color', color);
  }
  storeCapacity(capacity){
    return localStorage.setItem('capacity', capacity);
  }
  storeIssue(issue){
    return localStorage.setItem('issue',issue);
  }
  storeUserInfo(userInfo){
    return localStorage.setItem('userInfo',JSON.stringify(userInfo))
  }

  storeUserAddress(userAddress) {
    return localStorage.setItem('userAddress',JSON.stringify(userAddress))
  }
  storeDate(date){
    return localStorage.setItem('date',date);
  }
  storeCardDetails(cardDetails){
    return localStorage.setItem('cardDetails',JSON.stringify(cardDetails))
  }
  
}
