import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainScreenComponent } from './main-screen/main-screen.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: MainScreenComponent
    },
    {
        path: 'projects',
        component: ProjectsListComponent
    },
    {
        path: 'projects/:tag',
        component: ProjectsDetailsComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }