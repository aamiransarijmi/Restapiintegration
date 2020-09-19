import { Component, OnInit } from '@angular/core';
import { companyjob } from '../models/companyjob.modal';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-companyjob',
  templateUrl: './companyjob.component.html'
})
export class CompanyjobComponent implements OnInit {
  companyjob:companyjob[];

  constructor(
    public jobsser: JobsService
  ) { 
    this.companyjob=[];
  }

  ngOnInit(): void {
    this.jobsser.getcompanyjobs().subscribe( data=>{
      this.companyjob=data.data;    
    })
  }

  back(){
    window.history.back();
  }
}
