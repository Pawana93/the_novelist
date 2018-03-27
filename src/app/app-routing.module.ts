import { ProjectResolverService } from './shared/project-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

<<<<<<< HEAD
=======
import { ProjectsListComponent } from './projects-list/projects-list.component';
>>>>>>> bd506616b44f8b26272e0fe0b2766d5b6d2c928e
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
    },
    {
        path: 'projects',
        component: ProjectsListComponent
<<<<<<< HEAD
=======
    },
    {
        path: 'projects/:tag',
        component: ProjectsDetailsComponent,
        resolve: {
            project: ProjectResolverService
        }
>>>>>>> bd506616b44f8b26272e0fe0b2766d5b6d2c928e
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
