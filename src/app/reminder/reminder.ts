import { Time } from '@angular/common';

export class Reminder {
    id: number;
    title: string = '';
    time: Time;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    get getTime(): any {
        const h = this.time.hours;
        const m = this.time.minutes;

        if (h >= 0 && h < 10) {
            if (m >= 0 && m < 10) {
                return "0" + h + ":" + "0" + m;
            }
            return "0" + h + ":" + m;
        } else {
            if (m >= 0 && m < 10) {
                return h + ":" + "0" + m;
            }
            return h + ":" + m;
        }

    }
}
