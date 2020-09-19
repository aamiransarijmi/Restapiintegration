import { ResponseBase } from './response.modal';

export class jobs{
    uuid: string;
    title:string;
    normalized_job_title:string;
    parent_uuid:string;
    constructor(){
        this.uuid='';
        this.title='';
        this.normalized_job_title='';
        this.parent_uuid='';
    }
}
export class skills{
    skill_uuid:string;
    skill_name:string;
    description:string;
    normalized_skill_name:string;
    importance:number;
    level:number;
    constructor(){
        this.skill_uuid='';
        this.skill_name='';
        this.description='';
        this.normalized_skill_name='';
        this.importance=0;
        this.level=0;
    }
}
export class jobswithresponse extends ResponseBase{
    list: jobs[];
    constructor(){
        super();
        this.list=[];
    }
}
export class jobskills{
  job:jobs;
  skills:skills;
  constructor(){
      this.job=new jobs;
      this.skills=new skills;
  }
}
export class related_job_titles{
    uuid:string;
    title:string;
    parent_uuid:string;
    constructor(){
        this.uuid='';
        this.title='';
        this.parent_uuid='';
    }
}
export class responseRelatedjob extends ResponseBase{
    data:related_job_titles[];
    constructor(){
        super();
        this.data=[];
    }

}