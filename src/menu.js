import {Menu} from '@/core/menu'
import {BackgroundModule} from "@/modules/background.module";
import {ShapeModule} from "@/modules/shape.module";
import {MessageModule} from "@/modules/message.module";
import {ClicksModule} from "@/modules/clicks.module";
import {Module} from "@/core/module";
import {SoundModule} from "@/modules/sound.module";
import {TimerModule} from "@/modules/timer.module";
import {QuestionnaireModule} from "@/modules/questionnaire.module";

export class ContextMenu extends Menu {

    modulesArray = [
        new ClicksModule('clicks', 'Считать клики (за 5 секунд)'),
        new ShapeModule('shape','Создать фигуру'),
        new BackgroundModule('backround', 'Поменять цвет'),
        new MessageModule('message', 'Вызвать сообщение'),
        new SoundModule('sound', 'Случайный звук'),
        new TimerModule('timer', 'Timer'),
        new QuestionnaireModule('question', 'Анкета')
    ]
    menu = document.querySelector('.menu')
    body = document.body

    constructor() {
        super();
        this.body.addEventListener('contextmenu', (e) =>{
            e.preventDefault()
            this.open(`${e.pageX}px`, `${e.pageY}px`)
        })
        this.body.addEventListener('click', () => {
            this.close()
        })
    }


    open(x,y) {
        this.menu.style.display = 'block'
        this.menu.style.top = y
        this.menu.style.left = x
        const arr =  this.modulesArray.map((module) =>module.toHTML())
        this.menu.innerHTML= arr.join('')
        const menuItem = document.querySelectorAll('.menu-item')
        menuItem.forEach((val) =>val.addEventListener('click', (e) => {
            const type = e.target.dataset.type
            this.modulesArray.forEach(val =>val.type === type ? val.trigger() : null)
        }))
    }

    close() {
        this.menu.style.display = 'none'
    }

    add(module) {
        module instanceof Module ? this.modulesArray.push(module): null
    }

}