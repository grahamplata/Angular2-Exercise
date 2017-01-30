import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

import { TeamsListComponent } from '../teams/teams-list/teams-list.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [TeamsListComponent]
})
export class TeamsModule { }
