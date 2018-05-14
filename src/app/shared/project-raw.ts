import { Chapter } from './chapter';

export interface ProjectRaw {
    title: string;
    tag: string;
    description: string;
    chapters: Chapter[];
}
