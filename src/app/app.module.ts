import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ActivityService } from './activity.service';

import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService,TooltipService, DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { ActivityAddComponent } from './activity-add/activity-add.component';
import { ActivityGetComponent } from './activity-get/activity-get.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AuthService } from "./shared/services/auth.service";

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { environment } from '../environments/environment';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityAddComponent,
    ActivityGetComponent,
    ActivityEditComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    SlimLoadingBarModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [ActivityService,AuthService, CategoryService, LegendService,TooltipService, DataLabelService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
