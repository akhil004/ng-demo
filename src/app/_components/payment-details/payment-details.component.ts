import { Component, OnInit, NgZone } from '@angular/core';
import { ProgressStepsService, PaymentService, DeviceService } from '@app/_services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardDetailModal, Details } from '@app/_models';
import { getDetails,getUrl } from '@app/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  step: Object;
  details: Details[] = [];
  theme: string;
  status: boolean = true;
  //Card Details form with properties
  paymentForm: FormGroup;
  cardDetailModel: CardDetailModal = new CardDetailModal();
  submitted = false;

  constructor(
    private data: ProgressStepsService,
    private formBuilder: FormBuilder,
    private deviceService: DeviceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(step => this.step = step);
    this.initProperties();
    this.valiadateFormField();
    this.details = getDetails();
    this.theme = getUrl();
  }
  updateStep() {
    this.data.changeMessage({
      issue: false,
      schedule: true,
      payment: false,
      confirmation: false,
      issueState: true,
      scheduleState: false,
      paymentSate: false,
      confirmationState: false
    })
  }
  updateSecondStep() {
    this.data.changeMessage({
      issue: false,
      schedule: false,
      payment: false,
      confirmation: true,
      issueState: true,
      scheduleState: true,
      paymentState: true,
      confirmationState: false
    })
  }



  initProperties() {
    this.cardDetailModel = new CardDetailModal()
  }

  /**
  * Form validation method.
  */
  valiadateFormField() {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      cvc: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get formMessage() { return this.paymentForm.controls; }


  /**
   * This method is call when user submit the payment form.
   */
  onPaymentFormSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.paymentForm.invalid) {
      return;
    }
    this.deviceService.storeCardDetails(this.paymentForm.value);
    this.updateSecondStep();
    this.router.navigate([this.theme+'/confirmation']);
  }
  toggleClass(){
    this.status = !this.status;    
  }
}
