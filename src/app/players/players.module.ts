import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Custom Component Imports
import { PlayerListComponent } from '../players/player-list/player-list.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [PlayerListComponent]
})

export class PlayersModule { }
