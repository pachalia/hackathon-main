import {Module} from '../core/module';
import { random } from '../utils';
import { getRandomColor as randomColor} from '../utils';

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.shapesList = [];
    }

    trigger() {
        const myCanvas = document.createElement("canvas");
        myCanvas.id = Date.now();
        this.shapesList.push({canvas: myCanvas, id: myCanvas.id});
        console.log(this.shapesList);
        myCanvas.width = 150;
        myCanvas.height = 150;
        myCanvas.style.position = 'absolute';
        myCanvas.style.left = `${random(1, window.innerWidth-150)}px`;
        myCanvas.style.top = `${random(1, window.innerHeight-150)}px`;
        document.body.append(myCanvas);
        const ctx = myCanvas.getContext("2d");

        myCanvas.addEventListener('contextmenu',(event) => {
            event.preventDefault();
            this.removeShape(event.target.id);
            event.stopPropagation();
        });
        
        this.renderRandomShape(myCanvas, ctx);

    }
    removeShape(shapeId) {
        const shapeIndex = this.shapesList.findIndex((shape) => {
            return shape.id === shapeId;
        });
        document.body.querySelector(`[id="${shapeId}"]`).remove();
        this.shapesList.splice(shapeIndex, 1);
    };

    renderRandomShape(canvas, ctx) {
        switch(random(1, 4)) {
            case 1:
                canvas.dataset.shape = "star";
                this.renderStar(ctx);
                break;
            case 2:
                canvas.dataset.shape = "circle";
                this.renderCircle(ctx);
                break;
            case 3:
                canvas.dataset.shape = "square";
                this.renderSquare(ctx);
                break;
            case 4:
                canvas.dataset.shape = "triangle";
                this.renderTriangle(ctx);
                break;
        }
    }

    renderStar(canvas,
        randScale = random(20, 150),
        randColor = randomColor(),
        randRotate = random(0, 360)) {
            canvas.scale(randScale/ 150, randScale / 150);
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
    renderCircle(canvas,
        randScale = random(20, 150),
        randColor = randomColor()) {
            canvas.scale(randScale/ 150, randScale / 150);
            canvas.translate(75,75);
            canvas.beginPath();
            canvas.arc(0, 0, 70 , 0, 2 * Math.PI);
            canvas.strokeStyle = randColor;
            canvas.stroke();
            canvas.fillStyle = randColor;
            canvas.fill();
    }
    renderSquare(canvas,
        randScale = random(20, 150),
        randColor = randomColor(),
        randRotate = random(0, 360)) {
            canvas.scale(randScale/ 150, randScale / 150);
            canvas.translate(75, 75);
            canvas.rotate(randRotate * Math.PI / 180);
            canvas.fillStyle = randColor;
            canvas.fillRect(-53, -53, 106, 106);
    }
    renderTriangle(canvas,
        randScale = random(20, 150),
        randColor = randomColor(),
        randRotate = random(0, 360)) {
            canvas.scale(randScale/ 150, randScale / 150);
            canvas.translate(75, 75);
            canvas.rotate(randRotate * Math.PI / 180);
            canvas.beginPath();
            canvas.moveTo(-65, -37);
            canvas.lineTo(0, 74);
            canvas.lineTo(65, -37);
            canvas.lineTo(-65, -37);
            canvas.strokeStyle = randColor;
            canvas.stroke();
            canvas.fillStyle = randColor;
            canvas.fill();
    }

}