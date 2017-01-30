import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import {TeamsRoutingModule} from './teams.routing'

import { TeamsListComponent } from '../teams/teams-list/teams-list.component';

@NgModule({
    imports: [BrowserModule, FormsModule, TeamsRoutingModule],
    declarations: [TeamsListComponent]
})
export class TeamsModule { }
