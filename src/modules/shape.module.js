import {Module} from '../core/module'
import { random } from '../utils';

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.shapesList = {};// надо ли тут хранить формы?
    }

    trigger() {
        // document.body.style.background = '#555';
        /// #создаю канвас
        const myCanvas = document.createElement("canvas");
        myCanvas.id = this.shapesList.length + 1;//надо ли?
        myCanvas.width = 200;
        myCanvas.height = 200;
        myCanvas.style.position = absolute;
        myCanvas.style.left = random(1, window.innerWidth)
        myCanvas.style.top = random(1, window.innerHeight)
        document.body.append(myCanvas);
        const ctx = myCanvas.getContext("2d");

        this.renderStar(ctx);//this.renderRandomShape(ctx);


    }

    renderStar(canvas, randScale = 1, randColor = 'blue', randRotate = 0) {
        canvas.scale(randScale, randScale);
        canvas.translate(70,70);
        canvas.rotate(randRotate * Math.PI / 180);
        canvas.beginPath();
        canvas.moveTo(0 - 60, 40 - 60);
        canvas.lineTo(120 - 60, 40 - 60);
        canvas.lineTo(20 - 60, 120 - 60);
        canvas.lineTo(60 - 60, 0 - 60);
        canvas.lineTo(100 - 60, 120 - 60);
        canvas.lineTo(0 - 60, 40 - 60);
        canvas.strokeStyle = randColor;
        canvas.stroke();
        canvas.fillStyle = randColor;
        canvas.fill();
    }
    renderCircle() {

    }
    renderSquare() {

    }
    renderTriangle() {

    }

}

// circle
// ctx2.beginPath();
// ctx2.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx2.translate(0,0)
// ctx2.stroke();