export default class Reminder {
    id : number ;
    IsCompelt : boolean;
    constructor(public titel:string) {
        this.id = Date.now();
        this.IsCompelt = false;
    }
}