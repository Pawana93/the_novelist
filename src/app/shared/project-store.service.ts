import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

import { Project } from './project';

@Injectable()
export class ProjectStoreService {

    constructor() {
        const projects = this.getAll();
    }

    public create(project): void {
        const projects = this.getAll();
        projects.push(project);
        this.setLocalStorageProjects(projects);
    }

    public getAll(): Project[] {
        const localStorageItem = JSON.parse(localStorage.getItem('projects'));
        return localStorageItem == null ? [] : localStorageItem.projects;
    }

    public getSingle(tag) {
        const projects = this.getAll();
        return projects.find(project => project.tag === tag);
    }

    public deleteProject(tag) {
        let projects = this.getAll();
        projects = projects.filter(project => project.tag !== tag);
        this.setLocalStorageProjects(projects);
    }

    downloadAllProjects() {
        const projects = this.getAll();
        const blob = new Blob([projects], { type: 'appliction/json' });
        console.log('blob: ', blob);
        saveAs(blob, 'projects.json');
    }

    downloadSingle(tag) {
        const projects = this.getAll();
        const project = projects.find(project => project.tag === tag);
        const blob = new Blob([project], { type: 'appliction/json' });
        console.log('blob: ', blob);
        saveAs(blob, tag + '.json');
    }

    private setLocalStorageProjects(projects: Project[]): void {
        localStorage.setItem('projects', JSON.stringify({ projects: projects }));
    }

    writeProjectData(tag) {
        const project = this.getSingle(tag);
        localStorage.setItem('baseInfo', JSON.stringify({ title: project.title, tag: project.tag, description: project.description }));
    }

    clearProjectData() {
        localStorage.setItem('baseInfo', '');
    }
}
