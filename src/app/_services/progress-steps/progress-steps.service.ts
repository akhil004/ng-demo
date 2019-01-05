import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressStepsService {

  private messageSource = new BehaviorSubject<Object>({
    issue: true,
    schedule: false,
    payment: false,
    confirmation: false,
    issueState: false,
    scheduleState: false,
    paymentSate: false,
    confirmationState: false
  });
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(step: Object) {
    this.messageSource.next(step)
  }
}
