import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountriesComponent } from './countries/countries.component';
import { CountryService } from './services/countries.service';
import { JobsComponent } from './jobs/jobs.component';
import { JobsService } from './services/jobs.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompanyjobComponent } from './companyjob/companyjob.component';
import { DashboadComponent } from './dashboad/dashboad.component';
@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    JobsComponent,
    CompanyjobComponent,
    DashboadComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CountryService,
    JobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
