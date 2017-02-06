import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//services
import { ResApiService } from './restapi.service';
import { InjuryLookupService } from './lookup/injury-lookup.service';
import { TeamLookupService } from './lookup/team-lookup.service';

@NgModule({
  providers: [ResApiService, InjuryLookupService, TeamLookupService],
  bootstrap: []
})
export class CommonModule { }