import {Module} from "@/core/module";
import {random} from '@/utils'

export class MessageModule extends Module {

    words = [
        'Солнце, небо, птицы', 'Дождь, лужи, отражение', 'Цветы, луг, аромат', 'Луна, звезды, ночь',
        'Лес, природа, тишина', 'Море, волны, песок', 'Ветер, листва, шепот'
    ]
    body = document.body
    timerId = null
    constructor(type,text) {
        super(type,text);
    }

    trigger() {
       this.timerId ? clearTimeout(this.timerId) : null
       const message =document.querySelector('.message')
       message ? message.remove() : null
       const el = document.createElement('div')
       el.innerText = this.randomText()
       el.className = 'message'
       el.style.background = 'blue'
       el.style.color = 'red'
       el.style.fontSize = '20px'
       el.style.position = 'absolute'
       el.style.top = '90%'
       el.style.right = '2%'
       el.style.padding = '4px'
       this.timerId = setTimeout(()=>{
            document.querySelector('.message').remove()
       }, 5000)
       this.body.append(el)
    }

    randomText() {
        return this.words[random(0, this.words.length-1)]
    }
}