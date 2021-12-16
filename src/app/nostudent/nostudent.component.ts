import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nostudent',
  templateUrl: './nostudent.component.html',
  styleUrls: ['./nostudent.component.css']
})
export class NostudentComponent implements OnInit {
  nostudentId:any;
  

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {let id = params['id'];console.log(`${id}`);this.nostudentId=id;});
  }

}
