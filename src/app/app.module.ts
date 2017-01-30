import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsListComponent,
    PlayerListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path: 'teams',
          component: TeamsListComponent
        },
        {
          path: 'players',
          component: PlayerListComponent
        },
        {
          path: '',
          component: PlayerListComponent
        },
        {
          path: '**',
          component: NotFoundComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
