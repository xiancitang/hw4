import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { NostudentComponent } from './nostudent/nostudent.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { SurveyComponent } from './survey/survey.component';
import { WinnerComponent } from './winner/winner.component';

const routes: Routes = [
  { path: '', redirectTo: '/survey', pathMatch: 'full' },
  {path:'acknowledge', component: AcknowledgementComponent},
  {path:'winner', component: WinnerComponent},
  {path:'survey', component: SurveyComponent},
  {path:'studentinfo/:id', component: StudentinfoComponent},
  {path:'nostudent', component: NostudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
