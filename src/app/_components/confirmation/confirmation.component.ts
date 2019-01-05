import { Component, OnInit, NgZone } from '@angular/core';
import { ProgressStepsService, PaymentService, AlertService, MailService } from '../../_services';
import { Details, StripePaymentModel } from '@app/_models';
import { getDetails,getUrl } from '@app/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  step: Object;
  details: Details[] =[];
  theme: string;
  private stripePaymentModel: StripePaymentModel = new StripePaymentModel();

  constructor(private data: ProgressStepsService,
    private zone: NgZone,
    private paymentService: PaymentService,
    private router: Router,
    private alertService: AlertService,
    private mailService: MailService
    ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(step => this.step = step);
    this.details = getDetails();
    this.theme = getUrl();
  }
  updateStep() {
    this.data.changeMessage({
      issue: false,
      schedule: false,
      payment: false,
      confirmation: false,
      issueState: true,
      scheduleState: true,
      paymentState: true,
      confirmationState: true
    })
  }
  updateSecondStep() {
    this.data.changeMessage({
      issue: false,
      schedule: false,
      payment: true,
      confirmation: false,
      issueState: true,
      scheduleState: true,
      paymentState: false,
      confirmationState: false
    })
  }
  onSubmitConfirmation(){
    if(this.details[0]['flag'] === 'true'){
      this.updateStep();
      return this.router.navigate([this.theme+'/thank-you']);
    }
    const cardDetails = this.details[0]['cardDetails'];
    (<any>window).Stripe.card.createToken({
        number: cardDetails.cardNumber,
        exp_month: cardDetails.expiryMonth,
        exp_year: cardDetails.expiryYear,
        cvc: cardDetails.cvc
      }, (status: number, response: any) => {
         // Wrapping inside the Angular zone
        this.zone.run(() => {
          if (status === 200) {
            console.log(`Success! Card token ${response.id}.`);
            this.stripePaymentModel.paymentToken = response.id;
            //TODO: amount will come from UI.
            debugger;
            this.stripePaymentModel.chargeAmount = 100;
            this.stripePaymentModel.currency = 'usd';
            this.stripePaymentModel.description = this.details[0]['userAddress'].email;
            this.paymentService.chargePayment(this.stripePaymentModel).subscribe(responseData => {
              console.log("Success " + responseData.message);
              localStorage.setItem('paymentTransID',responseData.content.balanceTransaction);
              localStorage.setItem('chargeUniqueID',responseData.content.chargeUniqueId);
              debugger;
              this.mailService.successMail(this.details[0]['userAddress'].email).subscribe(emailResponse =>{
                console.log("Email send successfully."+emailResponse);
              }, emailErrorResponse =>{
                console.log("Error while sending email"+emailErrorResponse);
              });
              this.alertService.success('Payment Succesfully Done', true);
                    this.router.navigate([this.theme+'/thank-you']);
            }, error => {
              debugger;
              console.log("Error comes" + error);
                this.alertService.error(error);
            });
          } else {
            //18.220.170.210:8080
            console.log("Error while generatin card token.");
          }
        });
      });
  }
}
