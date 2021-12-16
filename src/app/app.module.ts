import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { WinnerComponent } from './winner/winner.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { NostudentComponent } from './nostudent/nostudent.component';
import { DatavalidatorDirective } from './datavalidator.directive';
import { CheckboxvalidatorDirective } from './checkboxvalidator.directive';
import { RadiobuttonvalidatorDirective } from './radiobuttonvalidator.directive';


@NgModule({
  declarations: [
    AppComponent,
    AcknowledgementComponent,
    SurveyComponent,
    WinnerComponent,
    StudentinfoComponent,
    NostudentComponent,
    DatavalidatorDirective,
    CheckboxvalidatorDirective,
    RadiobuttonvalidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
