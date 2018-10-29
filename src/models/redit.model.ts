export class Redit {
    createdDate: Date;
    constructor(public title?: string, public desc?: string, public id?: number, public img?: string[], public comments?: string[], public vote?: number) {
        this.createdDate = new Date();
    }
}
