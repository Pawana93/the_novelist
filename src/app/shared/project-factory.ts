import { Project } from './project';
import { ProjectRaw } from './project-raw';

export class ProjectFactory {

    static empty(): Project {
        return new Project('', '', '', []);
    }

    static fromObject(rawProject: ProjectRaw | any): Project {
        return new Project (
            rawProject.title,
            rawProject.tag,
            rawProject.description,
            rawProject.chapters
        );
    }
}
