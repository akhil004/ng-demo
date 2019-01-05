import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { KeysPipe } from './utils/keys.pipe';
import { JwtInterceptor, ErrorInterceptor } from './_interceptors';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { HeaderComponent, ProgressStepsComponent, AlertComponent } from './_shared';
import { BrandComponent, 
         LoginComponent, 
         RegisterComponent, 
         DeviceComponent,
         ConfirmationComponent,
         ColorComponent,
         CapacityComponent,
         IssueComponent,
         ScheduleRepairInfoComponent,
         ScheduleRepairAddressComponent,
         ScheduleRepairTimeComponent,
         PaymentDetailsComponent,
         ThankYouComponent,
         CancelConfirmationComponent,
         CancelCompleteComponent,
         TrackingComponent,
        } from './_components';
import { PaymentService } from './_services';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        routing,
        DlDateTimePickerDateModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAGEZ3s_b1w_g2MW8dAOeikGBdbpANF0n0'
        })
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        BrandComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        ProgressStepsComponent,
        DeviceComponent,
        ConfirmationComponent,
        ColorComponent,
        CapacityComponent,
        IssueComponent,
        ScheduleRepairInfoComponent,
        PaymentDetailsComponent,
        KeysPipe,
        ThankYouComponent,
        ScheduleRepairAddressComponent,
        ScheduleRepairTimeComponent,
        CancelCompleteComponent,
        CancelConfirmationComponent,
        TrackingComponent
    ],
        
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        PaymentService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }