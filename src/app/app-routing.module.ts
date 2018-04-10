import { ProjectResolverService } from './shared/project-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ProjectViewComponent } from './project-view/project-view.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: ':tag',
        component: ProjectViewComponent,
        resolve: {
            project: ProjectResolverService
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
