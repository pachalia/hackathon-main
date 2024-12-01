import {Module} from '@/core/module'

export class ClicksModule extends Module {

    body = document.body
    clickHandlerBound = this.clickHandler.bind(this)
    clicks = 0
    timer = 5

    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const timerElement = document.createElement('div')
        timerElement.style.fontSize = '7em'
        timerElement.style.color = 'red'
        timerElement.style.display = 'flex'
        timerElement.style.justifyContent = 'center'
        timerElement.innerText = this.timer

        const clicksElement = document.createElement('div')
        clicksElement.innerText = `Кликните здесь. Кликнуто ${this.clicks} раз`
        clicksElement.style.width = '500px'
        clicksElement.style.height = '500px'
        clicksElement.style.background = 'green'
        clicksElement.style.fontSize = '4em'
        clicksElement.style.margin = 'auto'
        clicksElement.style.color = 'red'
        clicksElement.style.display = 'flex'
        clicksElement.style.alignItems='center'
        clicksElement.addEventListener('click', this.clickHandlerBound)
        clicksElement.addEventListener('dblclick', this.clickHandlerBound)
        clicksElement.style.cursor = 'pointer'
        let timer = this.timer
        const timerId = setInterval(()=>{
            timer = timer - 0.5
            clicksElement.innerText = `Кликните здесь. Кликнуто ${this.clicks} раз`
            timerElement.innerText=Math.floor(timer)
        }, 500)
        this.body.append(timerElement, clicksElement)
        setTimeout(()=>{
            timerElement.remove()
            clicksElement.removeEventListener('click', this.clickHandlerBound)
            clicksElement.removeEventListener('dblclick', this.clickHandlerBound)
            clicksElement.remove()
            clearInterval(timerId)
            alert(`Количество кликов за 5 секунд ${this.clicks}`)
            this.clicks=0
        },this.timer * 1000)
    }

    clickHandler () {
        this.clicks++
    }

}