import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getUrl, getDetails} from '@app/utils';
import { Details } from '@app/_models';
import { PaymentService, AlertService } from '@app/_services';

@Component({
  selector: 'app-cancel-confirmation',
  templateUrl: './cancel-confirmation.component.html',
  styleUrls: ['./cancel-confirmation.component.css']
})
export class CancelConfirmationComponent implements OnInit {
  theme: string;
  details: Details[] = [];
  constructor(

    private router: Router,
    private paymentService: PaymentService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.theme = getUrl();
    this.details = getDetails();
  }
  refund(){
    const chargeId = this.details[0]['chargeUniqueID'];
    this.paymentService.refundPayment(chargeId).subscribe(responseData => {
      this.alertService.success('Refund Succesfully Done', true);
            this.router.navigate([this.theme+'/cancel-complete']);
    }, error => {
        this.alertService.error(error);
    });
  }
}
