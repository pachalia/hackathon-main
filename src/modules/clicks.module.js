import {Module} from '../core/module'

export class ClicksModule extends Module {
    constructor(type,text) {
        super(type,text);
    }

    trigger() {
        const body = document.body
        body.append(this.getClicks())
    }

    getClicks() {
        let numberOfClicks = 0
        const body = document.body
        
        //создание кнопки запуска таймера
        const btn = document.createElement('button')
        btn.style.cssText = 'width: 150px; height: 100px; background-color: green; color: white; font-weight: bold;'
        btn.textContent = 'Запустить таймер'
        body.prepend(btn)
        
        
        //обработчик события 'click' на странице
        document.addEventListener('click', (event) => {
            numberOfClicks++
        })
        
        //обработчик события 'dblclick' на странице
        document.addEventListener('dblclick', (event) => {
            numberOfClicks++
        })

        //обработчик события 'click' на кнопке
        btn.addEventListener('click', (event) => {
            startTime()
            btn.disabled = true //блокируется кнопка
        })
        
        //запуск таймера
        function startTime() {
          setTimeout(() => {
            showResult()
          }, 5000)
        }
        
        //вывод результата
        function showResult() {
          const result = document.createElement('h1')
          if (numberOfClicks === 1 ) {
            result.textContent = `Вы сделали ${numberOfClicks} клик`
          } else if (1 < numberOfClicks && numberOfClicks < 5) {
            result.textContent = `Вы сделали ${numberOfClicks} клика`
          } else {
            result.textContent = `Вы сделали ${numberOfClicks} кликов`
          }  
          body.prepend(result)
          
          //обнуление счетчика
          setTimeout(() => {
            const h1 = document.querySelector("h1")
            h1.remove()
            numberOfClicks = 0  
            btn.disabled = false //кнопка разблокирована
          }, 5000)
          
        } 
    }
}