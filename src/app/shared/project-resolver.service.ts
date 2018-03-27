import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProjectStoreService } from './project-store.service';
import { Project } from './project';

@Injectable()
export class ProjectResolverService {

  constructor(private ps: ProjectStoreService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.ps.getSingle(route.params['tag']);
  }
}
