export class Redit {
    createdDate: Date;
    id: number;
    constructor(public title?: string, public desc?: string, public img?: string[], public comments?: string[], public vote?: number) {
        this.createdDate = new Date();
    }
}
