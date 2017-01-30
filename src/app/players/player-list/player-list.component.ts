import { ResApiService } from '../../common/restapi.service'
import { Component, OnInit } from '@angular/core';

import { Player } from '../../common/players/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  listOfPlayers: Player[];

  constructor(private apiService: ResApiService) { }

  ngOnInit() {
    this.listOfPlayers = this.apiService.getListOfPlayers();
  }

}
