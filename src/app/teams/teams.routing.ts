import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TeamsListComponent } from './teams-list/teams-list.component';

const routes: Routes = [
    {
        path: 'teams',
        component: TeamsListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamsRoutingModule {

}