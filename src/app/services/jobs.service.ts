import {Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { responseRelatedjob } from '../models/jobs.model';
import { companyjobwithresponse } from '../models/companyjob.modal';
@Injectable()

export class JobsService{
    apiurl="http://api.dataatwork.org/v1";

    constructor(
        private http:HttpClient
    ){

    }

    getjobs(){
        return this.http.get<any>(this.apiurl + '/jobs');
    }
    
    getjobByid(id:any){
        return this.http.get<any>(this.apiurl+'/jobs/'+id)
    }
    getskills(id:any){
        return this.http.get<any>(this.apiurl+'/jobs/'+id+'/related_skills')
    }
    getjobrelated(id:any){
        return this.http.get<any>(this.apiurl+'/jobs/'+id+'/related_jobs')
    }

    getcompanyjobs(){
        debugger
        return this.http.get<companyjobwithresponse>('http://api.ansits.ansitdev.com/api/website/getCarrier')
    }

}
