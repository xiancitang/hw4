import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {
  Student: any = [];

  constructor(private restApi:RestApiService,private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {let id = params['id'];console.log(`${id}`);this.loadStudentbyId(id);});
  }

     // Get student by Id
     loadStudentbyId(id:any) {
      return this.restApi.getStudentbyId(id).subscribe((data: {}) => {
        this.Student = data;})
    }

}


