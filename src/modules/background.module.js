import {Module} from '@/core/module'
import {random} from '@/utils'

export class BackgroundModule extends Module {
    constructor(type,text) {
        super(type,text);
    }

    trigger() {
        const body = document.querySelector('body')
        body.style.background=this.getRandomColor()

    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[random(0,15)];
        }
        return color;
    }
}