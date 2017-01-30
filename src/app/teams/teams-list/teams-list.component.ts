import { Component, OnInit } from '@angular/core';

import { Team } from '../shared/Team'
import { MOCK_TEAMS } from '../shared/mock-teams'

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  listOfTeams = [];

  constructor() { }

  ngOnInit() {
    this.listOfTeams = MOCK_TEAMS;
  }

}
