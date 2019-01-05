import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth';
import {
    BrandComponent,
    LoginComponent,
    RegisterComponent,
    DeviceComponent,
    ColorComponent,
    CapacityComponent,
    IssueComponent,
    ScheduleRepairInfoComponent,
    PaymentDetailsComponent,
    ConfirmationComponent,
    ThankYouComponent,
    ScheduleRepairAddressComponent,
    ScheduleRepairTimeComponent,
    CancelConfirmationComponent,
    CancelCompleteComponent,
    TrackingComponent
} from './_components';

const appRoutes: Routes = [
    { path: '', component: BrandComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
   

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
    // Routes For Authorized Users.
    { path: 'lori', component: BrandComponent, canActivate: [AuthGuard] },
    { path: 'lori/device', component: DeviceComponent, canActivate: [AuthGuard] },
    { path: 'lori/color', component: ColorComponent, canActivate: [AuthGuard] },
    { path: 'lori/capacity', component: CapacityComponent, canActivate: [AuthGuard] },
    { path: 'lori/issue', component: IssueComponent, canActivate: [AuthGuard] },
    { path: 'lori/schedule-repair', component: ScheduleRepairInfoComponent, canActivate: [AuthGuard] },
    { path: 'lori/schedule-repair-address', component: ScheduleRepairAddressComponent, canActivate: [AuthGuard] },
    { path: 'lori/schedule-repair-time', component: ScheduleRepairTimeComponent, canActivate: [AuthGuard] },
    { path: 'lori/payment-details', component: PaymentDetailsComponent, canActivate: [AuthGuard] },
    { path: 'lori/confirmation', component: ConfirmationComponent, canActivate: [AuthGuard] },
    { path: 'lori/thank-you', component: ThankYouComponent, canActivate: [AuthGuard] },

    // // Routes For Unauthorized Users. 
    { path: 'lori/login', component: LoginComponent },

    // // Routes For Authorized Users.
    { path: 'synchrony', component: BrandComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/device', component: DeviceComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/color', component: ColorComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/capacity', component: CapacityComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/issue', component: IssueComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/schedule-repair', component: ScheduleRepairInfoComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/schedule-repair-address', component: ScheduleRepairAddressComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/schedule-repair-time', component: ScheduleRepairTimeComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/payment-details', component: PaymentDetailsComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/confirmation', component: ConfirmationComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/thank-you', component: ThankYouComponent, canActivate: [AuthGuard] },
    
    { path: 'lori/cancel-confirmation', component: CancelConfirmationComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/cancel-confirmation', component: CancelConfirmationComponent, canActivate: [AuthGuard] },

    { path: 'lori/cancel-complete', component: CancelCompleteComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/cancel-complete', component: CancelCompleteComponent, canActivate: [AuthGuard] },
    
    { path: 'lori/tracking', component: TrackingComponent, canActivate: [AuthGuard] },
    { path: 'synchrony/tracking', component: TrackingComponent, canActivate: [AuthGuard] },


    // // Routes For Unauthorized Users. 
    { path: 'synchrony/login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);