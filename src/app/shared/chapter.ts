import { Scene } from './scene';

export class Chapter {
    constructor(
        public id: number,
        public title: string,
        public scenes: Scene[]
    ) { }
}
