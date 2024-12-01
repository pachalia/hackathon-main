import {Module} from '../core/module'

export class TimerModule extends Module {
    constructor(type, text){
        super(type, text);
    }

    trigger(){
        const body = document.body;
        //body.append(this.getTimer());
        body.append(this.createTimerTemplate());
        body.append(this.createModalOverlay());
    }

    createModalOverlay(){
        const overlay = document.createElement('div');
        overlay.className = "timer-modal-overlay";
        const form = document.createElement('form');
        form.className = "timer-modal_form";
        const background = document.createElement('div');
        background.className = "timer-modal_background";
        background.style = "--clr: #FC4B29";
        const input = document.createElement('input');
        input.name = "usersTime"
        input.type = "number";
        input.placeholder = "Выберите время";
        input.style = "--clr: #FC4B29";

        background.append(input);
        form.append(background);
        overlay.append(form);

        background.onmousemove = function (event){
            let x = event.pageX - background.offsetLeft;
            let y = event.pageY - background.offsetTop;

            background.style.setProperty('--x', `${x}px`);
            background.style.setProperty('--y', `${y}px`);
        }
        
        form.addEventListener("submit", event => {
            event.preventDefault();
            const userTime = event.target.elements.usersTime.value.trim();
            
            !isNaN(userTime) ? this.startTimer(userTime) : null;            
        })

        return overlay;
    }

    createTimerTemplate(){                              //Функция сборки HTML-шаблона таймера
        const container = document.createElement('div');
        container.className = "timer_container";

        const circleOut = document.createElement('div');
        circleOut.className = "timer_circle-out";

        const stroke = document.createElement('div');
        stroke.classList.add("timer_stroke", "animation_stop");

        const circleIn = document.createElement('div');
        circleIn.classList.add("timer_circle-in", "animation_stop");

        const circleMini = document.createElement('div');
        circleMini.className = "timer_circle-mini";

        const time = document.createElement('h2');
        time.className = "timer_text";
        time.innerText = "Загрузка";

        circleOut.append(stroke);
        circleIn.append(circleMini);
        container.append(circleOut, circleIn, time);

        return container;
    }

    startTimer(milliseconds){
        const modal = document.querySelector('.timer-modal-overlay');
        modal.remove();
        const stoppedElements = document.querySelectorAll('.animation_stop');
        stoppedElements.forEach(element => element.classList.remove("animation_stop"));

        //Добавить обратный отсчет

        setTimeout(this.stopTimer, milliseconds);
    }

    stopTimer(){
        alert('Время вышло!');
        const timer = document.querySelector('.timer_container');
        timer.remove();
    }
}