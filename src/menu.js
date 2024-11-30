import {Menu} from './core/menu'
import {BackgroundModule} from "@/modules/background.module";
import {ShapeModule} from "@/modules/shape.module";

export class ContextMenu extends Menu {

    constructor() {
        super();
        this.menu = document.querySelector('.menu')
        this.modulesArray = [new BackgroundModule('backround', 'фон'), new ShapeModule('shape','фигура')]
    }

    open(x,y) {
        this.menu.style.display = 'block'
        this.menu.style.top = y
        this.menu.style.left = x
        const arr =  this.modulesArray.map((module) =>module.toHTML())
        this.menu.innerHTML= arr
        const menuItem = document.querySelectorAll('.menu-item')
        menuItem.forEach((val) =>val.addEventListener('click', (e) => {
            const type = e.target.dataset.type
            this.modulesArray.forEach(val =>val.type === type ? val.trigger() : null)
        }))
    }

    close() {
        this.menu.style.display = 'none'
    }

    add() {

    }

}