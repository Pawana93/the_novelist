import { Injectable } from '@angular/core';

import { Project } from './project';

@Injectable()
export class ProjectStoreService {

    constructor() {
        let projects = this.getAll();
    }

    public create(project): void {
        let projects = this.getAll();
        projects.push(project);
        this.setLocalStorageProjects(projects);
    }

    public getAll(): Project[] {
        let localStorageItem = JSON.parse(localStorage.getItem('projects'));
        return localStorageItem == null ? [] : localStorageItem.projects;
    }

    public getSingle(tag) {
        let projects = this.getAll();
        return projects.find(project => project.tag === tag);
    }

    public deleteProject(tag) {
        let projects = this.getAll();
        tag = projects.find(project => project.tag === tag);
        projects.splice(tag, 1);
        this.setLocalStorageProjects(projects);
    }

    private setLocalStorageProjects(projects: Project[]): void {
        localStorage.setItem('projects', JSON.stringify({ projects: projects }));
    }
}
