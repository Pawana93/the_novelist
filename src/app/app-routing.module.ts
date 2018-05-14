import { ProjectResolverService } from './shared/project-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ProjectViewComponent } from './project-view/project-view.component';
import { ListComponent } from './list/list.component';
import { ChaptersComponent } from './project-view/chapters/chapters.component';
import { BaseInfoComponent } from './project-view/base-info/base-info.component';

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
        },
        children: [
            {
                path: '',
                component: BaseInfoComponent
            },
            {
                path: 'chapters',
                component: ChaptersComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
