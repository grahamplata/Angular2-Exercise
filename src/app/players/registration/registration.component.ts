import { Component, OnInit } from '@angular/core';

import { RegistraionViewModel } from './registrationViewModel';
import { TeamLookup } from '../../common/lookup/team-lookup';
import { InjuryLookupService } from '../../common/lookup/injury-lookup.service';
import { TeamLookupService } from '../../common/lookup/team-lookup.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registraionViewModel: RegistraionViewModel;
  teamLookupList: TeamLookup[];
  injuryLookupList: string[];
  injuryFieldList: string[];

  constructor(
    private injuryLookupService: InjuryLookupService,
    private teamLookupService: TeamLookupService
  ) {
    this.registraionViewModel = new RegistraionViewModel;
  }

  ngOnInit() {
    this.teamLookupList = this.teamLookupService.getTeamsLookup();
    this.injuryLookupList = this.injuryLookupService.getInjuriesLookUp();
    this.initializeInjuryFieldList();
  }
  
  private initializeInjuryFieldList() {
    this.injuryFieldList = [];

    for(let injury of this.injuryLookupList) {
      this.injuryFieldList.push(injury.trim().replace(" ", "").toLowerCase());
    }
  } 
  
  addOrRemoveInjury(value: string) {
    var indexOfEntry = this.registraionViewModel.injuries.indexOf(value);

    if (indexOfEntry < 0) {
      this.registraionViewModel.injuries.push(value);
    }
    else {
      this.registraionViewModel.injuries.splice(indexOfEntry, 1);
    }
  }
}