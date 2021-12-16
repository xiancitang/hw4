import { Component, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MeansdService } from '../meansd.service';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})


export class SurveyComponent implements OnInit {

  @Input() studentDetails = {studentid: '',firstName:'',lastName:'',email: '', phone: '',address:'',city:'',state:'',zipcode:'', dateofsurvey:'',highschoolmonth:'',highschoolyear:'',thingslikegmu:"",waytoknowgmu:'',recommend:'',comments:'',data: ''}


  gmulikes = 
    [
      {
        id: 'Students',
        label: 'Students',
        selected: false,
      },
      {
        id: 'Location',
        label: 'Location',
        selected: false,
      },
      {
        id:'Campus',
        label: 'Campus',
        selected: false,
      },
      {
        id:"Dorm rooms",
        label: "Dorm rooms",
        selected: false,
      },
      {
        id:"Atmosphere",
        label: "Atmosphere",
        selected: false,
      },
      {
        id:"Sports",
        label: "Sports",
        selected: false,
      }
    ];

    waysknowgmu=['Friends','Tevevision',"Internet",'Other'];

  stringList: Array<string> = [];
  likes: Array<string> = [];
  likesgmu:string='';
  average:number;
  sd:number;
   today:string;
   myname:string="Paul";
   submitted = false;
 
  constructor(private router: Router,private svc1:MeansdService, private restApi:RestApiService ) {
   }

  ngOnInit(): void {
    this.greetTime();
  }
 
  onClickSubmit(input:any){
    this.submitted = true; 
    this.stringList=input.data.split(",");
    this.studentDetails.thingslikegmu=this.likesgmu;
    this.restApi.createStudent(this.studentDetails).subscribe((response)=>console.log(response));
    this.average=this.getMean();
    this.sd=this.getSd();
    if(this.average < 90){
    this.router.navigate(['/acknowledge']); }
    else{
      this.router.navigate(['/winner']);
    }
}

// get mean of number list
  getMean():number{
  this.average=this.svc1.calculateMean(this.stringList);
  console.log("mean"+this.average);
  return this.average;
  }

  // get sd of number list
  getSd():number{
   this.sd= this.svc1.calculateSD(this.stringList);
   console.log("sd"+this.sd);
   return this.sd;
  }

  greetTime() 
  { let date=new Date();
    if (date.getHours()>12 && date.getHours()<18){
              this.today="Good afternoon";
  }else if(date.getHours()<12 && date.getHours()>6){
   this.today="Good Morning";
  }
  else {this.today="Good Evening";} 
     }
   
 
  changeName(){
    var username=window.prompt();
    if(username!=null)
    {this.myname=username;}
    else{this.myname='';}
  }

}


