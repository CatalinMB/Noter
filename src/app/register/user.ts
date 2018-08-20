
declare var jquery: any;
declare var $: any;

const usr = $('#susername-field').val;

export class User {
    public  email: String = '';
    public username: String = usr;
    public title: String = '';
    
     constructor(values: Object = {}) {
         Object.assign(this, values);
     }
 }
 