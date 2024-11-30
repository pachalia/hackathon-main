import {Menu} from './core/menu'
import {TimerModule} from './modules/timer.module'

export class ContextMenu extends Menu {

    constructor(){
        super();
        this.menu = document.querySelector('.menu');
        this.modulesArray = [new TimerModule("timer", "Таймер")];
    }

    open(x, y){
        this.menu.style.display = "block";
        this.menu.style.top = y;
        this.menu.style.left = x;
        const arr = this.modulesArray.map(module => module.toHTML());
        this.menu.innerHTML = arr;
        const menuItem = document.querySelectorAll('.menu-item');
        menuItem.forEach((item) => item.addEventListener('click', (event) => {
            const type = event.target.dataset.type;
            this.modulesArray.forEach(module => module.type === type ? module.trigger() : null);
        }))
    }

    close(){
        this.menu.style.display = "none";
    }

    add(){
        //В разработке
    }
}