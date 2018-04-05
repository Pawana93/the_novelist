import { ProjectResolverService } from './shared/project-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: ':tag',
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
