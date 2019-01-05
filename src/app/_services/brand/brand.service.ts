import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Brand } from '@app/_models/brand';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<Brand[]>(`${environment.endPoint}/products-supported`);
  }

}
