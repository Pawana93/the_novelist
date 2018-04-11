import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

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
        projects = projects.filter(project => project.tag !== tag);
        this.setLocalStorageProjects(projects);
    }

    downloadAllProjects() {
        let projects = this.getAll();
        let blob = new Blob([projects], { type: 'appliction/json' })
        console.log('blob: ', blob);
        saveAs(blob, 'projects.json');
    }

    downloadSingle(tag) {
        let projects = this.getAll();
        let project = projects.find(project => project.tag === tag);
        let blob = new Blob([project], { type: 'appliction/json' })
        console.log('blob: ', blob);
        saveAs(blob, tag + '.json');
    }

    private setLocalStorageProjects(projects: Project[]): void {
        localStorage.setItem('projects', JSON.stringify({ projects: projects }));
    }
}
