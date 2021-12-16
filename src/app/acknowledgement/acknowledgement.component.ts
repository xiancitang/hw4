import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { MeansdService } from '../meansd.service';
import { RestApiService } from '../shared/rest-api.service';
import { Student } from '../shared/student';

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.css']
})
export class AcknowledgementComponent implements OnInit {
  
  mean:number;
  sd:number;
  Student: any = [];

  constructor(private svc:MeansdService,private restApi:RestApiService) {
    this.mean=JSON.parse(localStorage.getItem('localAverage'));
    this.sd=JSON.parse(localStorage.getItem('localSd'));
   }

   ngOnInit() {
    this.loadStudents();
  }

   // Get students list
   loadStudents() {
     
    return this.restApi.getStudents().subscribe((data: {}) => {
      this.Student = data;})
  }

  refresh(): void {
    window.location.reload();
}

}
