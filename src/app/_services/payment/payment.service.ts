import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StripePaymentModel } from "@app/_models";
import { environment } from "@environments/environment.prod";
import { Observable } from "rxjs";

@Injectable()
export class PaymentService {

    constructor(private http: HttpClient) { }

    chargePayment(stripePaymentModel: StripePaymentModel): Observable<any> {
        return this.http.post(environment.endPoint + `/stripe/charge`, stripePaymentModel);
    }

    refundPayment(chargeId: string): Observable<any> {
        const requestBody = {'chargeUniqueId': chargeId};
        return this.http.post(environment.endPoint + `/stripe/refund`, requestBody);
    }

    


}