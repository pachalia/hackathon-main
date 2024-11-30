import {Module} from '../core/module'

export class TimerModule extends Module {
    constructor(type, text){
        super(type, text);
    }

    trigger(){
        const body = document.body;
        body.append(this.getTimer());
    }

    getTimer(time){                              //Создание Таймера
        const timer = this.createTimerTemplate();
        return timer;
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
}