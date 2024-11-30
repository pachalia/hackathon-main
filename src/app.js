import './styles.css'
import {ShapeModule} from "@/modules/shape.module";
const myShapeModule = new ShapeModule('Shape', 'Создать фигуру');

console.log('trigger next');
myShapeModule.trigger();
console.log('trigger previous');
