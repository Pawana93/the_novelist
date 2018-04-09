import { Injectable } from '@angular/core';

import { Project } from './project';

@Injectable()
export class ProjectStoreService {
    projects: Project[];

    constructor() {
        this.projects = [
            new Project('A new hope', 'AnH', 'Eine neue Hoffnung erscheint im Angesicht des Todes'),
            new Project('Dawn', 'D', 'Ein dunkler Schatten erhebt sich'),
            new Project('End', 'End', 'Alles hat ein Ende, nur die Wurst hat zwei')
        ];
    }

    create(project) {
        this.projects.push(project);
    }

    getAll() {
        return this.projects;
    }

    getSingle(tag) {
        return this.projects.find(project => project.tag === tag);
    }

    deleteProject(tag) {
        tag = this.projects.find(project => project.tag === tag);
        this.projects.splice(tag, 1);
    }
}
