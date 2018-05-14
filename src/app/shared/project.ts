import { Chapter } from './chapter';

export class Project {
    constructor(
        public title: string,
        public tag: string,
        public description: string,
        public chapters: Chapter[]
    ) { }
}
