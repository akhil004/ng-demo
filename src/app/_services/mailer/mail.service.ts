import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment.prod";
import { Observable } from "rxjs";
import { EmailModel } from "@app/_models";


@Injectable({
  providedIn: 'root'
})
export class MailService {
  constructor(private http: HttpClient) { }

  successMail(toEmail: string): Observable<any> {
      const requestBody = {'toEmail': toEmail};
       return this.http.post(environment.endPoint + `/postmark-mail`, requestBody);
  }
  
}
