import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { jobs, jobskills, related_job_titles } from '../models/jobs.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html'
})
export class JobsComponent implements OnInit {
  jobData:jobs[];
  particularjobdata:jobs;
  Infojob:FormGroup;
  skills:jobskills[];
  relatedjob:related_job_titles[];
  constructor(
    public JobsService: JobsService,
    private _formbuilder:FormBuilder
  ) { 
    this.jobData=[];
    this.particularjobdata=new jobs;
    this.skills=[];
    this.relatedjob=[];
    this.Infojob=_formbuilder.group({
      uuid:['',[Validators.required]],
      title:['',[Validators.required]],
      normalized_job_title:['',[Validators.required]],
      parent_uuid:['',[Validators.required]]
    })
  }

  ngOnInit() {
    this.JobsService.getjobs().subscribe(data => {
      this.jobData =data            
     }
    )
  }
  getdetals(id:any){
    this.JobsService.getjobByid(id).subscribe(data=>{
      if(data){
        this.particularjobdata=data;
        this.Infojob.patchValue(this.particularjobdata);
      }
      else{
        console.log("Somethjing wrong");        
      }
    })
  }  
  getskills(id:string){
   this.JobsService.getskills(id).subscribe(data=>{
     if(data){
       this.skills=data       
     }
   })
  }
  getrelatedjob(id:string){
    debugger
    this.JobsService.getjobrelated(id).subscribe(data=>{
      if(data){
        this.relatedjob=data
        console.log(this.relatedjob);
        
      }
    })
  }
  back(){
    window.history.back();
  }


}
