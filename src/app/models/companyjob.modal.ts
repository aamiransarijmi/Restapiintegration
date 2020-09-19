export  class companyjob{
    about: string;
    categoryID: number;
    colorCode: number;
    designation: string;
    designationID: string;
    experience: string;
    iconPath: string;
    isActive: string;
    location:string;
    maxExperienceInYear: number;
    minExperienceInYear: number;
    noOfPosition: number;
    openingPostion: number;
    priority: number;
    qualification: string;
    skills: string;
    specialityID: number;
    typeID: number;
    vacancyID: number;
    constructor(){
        this.about='';
        this.categoryID = 0;
        this.colorCode = 0;
        this.designation='';
        this.designationID='';
        this.experience='';
        this.iconPath='';
        this.isActive='';
        this.location='';
        this.maxExperienceInYear = 0;
        this.minExperienceInYear = 0;
        this.noOfPosition = 0;
        this.openingPostion = 0;
        this.priority = 0;
        this.qualification='';
        this.skills='';
        this.specialityID = 0;
        this.typeID = 0;
        this.vacancyID = 0;
    }
}
export class ResponseBaseNew {
    message: string;
    statusCode: number;
    success:string;
    constructor() {
        this.message = '';
        this.statusCode = 0;
        this.success='';
    }
}

export class companyjobwithresponse extends ResponseBaseNew{
    data: companyjob[];
    constructor(){
        super();
        this.data=[];
    }
}