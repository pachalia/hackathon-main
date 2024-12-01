import {Module} from '@/core/module'
import {getRandomColor} from '@/utils'

export class BackgroundModule extends Module {
    constructor(type,text) {
        super(type,text);
    }

    trigger() {
        const body = document.querySelector('body')
        body.style.background=getRandomColor()
    }
}