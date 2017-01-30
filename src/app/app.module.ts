import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Module Imports
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
//Custom Component Imports
import { AppComponent } from './app.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlayersModule,
    TeamsModule,
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
