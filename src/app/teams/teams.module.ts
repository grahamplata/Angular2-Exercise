import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import {CommonModule} from '../common/common.module';

import {TeamsRoutingModule} from './teams.routing'

import { TeamsListComponent } from '../teams/teams-list/teams-list.component';
import { TeamEditComponent } from './team-edit/team-edit.component';

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule, TeamsRoutingModule],
    declarations: [TeamsListComponent, TeamEditComponent]
})
export class TeamsModule { }
