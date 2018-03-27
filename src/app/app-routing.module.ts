import { ProjectResolverService } from './shared/project-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
    },
    {
        path: 'projects',
        component: ProjectsListComponent
    },
    {
        path: 'projects/:tag',
        component: ProjectsDetailsComponent,
        resolve: {
            project: ProjectResolverService
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
