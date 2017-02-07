import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '../common/common.module';

//Custom Component Imports
import { PlayerListComponent } from '../players/player-list/player-list.component';
import { PlayersRoutingModule } from './players.routing';
import { PlayersProfileComponent } from './players-profile/players-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationViewModel  } from './registration/registrationViewModel';

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule, PlayersRoutingModule],
    declarations: [PlayerListComponent, PlayersProfileComponent, RegistrationComponent]
})

export class PlayersModule { }
