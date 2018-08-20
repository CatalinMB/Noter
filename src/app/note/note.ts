export class Note {
   public  id: number;
   public user: String = '';
   public title: String = '';


    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
