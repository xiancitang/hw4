import { Component, OnInit } from '@angular/core';
import { MeansdService } from '../meansd.service';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {
  mean:number;
  sd:number;
  Student: any = [];

  constructor(private svc:MeansdService,private restApi:RestApiService) { 
    this.mean=JSON.parse(localStorage.getItem('localAverage'));
    this.sd=JSON.parse(localStorage.getItem('localSd'));
  }

  ngOnInit(): void {
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
