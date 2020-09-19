import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyjobComponent } from './companyjob/companyjob.component';
import { CountriesComponent } from './countries/countries.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { JobsComponent } from './jobs/jobs.component';


const routes: Routes = [
  { path: '', component: DashboadComponent },
  { path: 'dashbboard', component: DashboadComponent },
  { path: 'Countries', component: CountriesComponent },
  { path: 'jobs', component:JobsComponent},
  { path: 'companyjobs', component:CompanyjobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
