import { ResApiService } from '../../common/restapi.service'
import { Component, OnInit } from '@angular/core';


import { Team } from '../../common/teams/team';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  listOfTeams: Team[];
  selectedTeam: Team;

  constructor(private apiService: ResApiService) { }

  ngOnInit() {
    this.listOfTeams = this.apiService.getListOfTeams();
  }

  selectTeam(selectedTeam: Team) {
    this.selectedTeam = selectedTeam;
  }

}
