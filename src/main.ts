import {getArea} from "./area";
import {Rectangle, Circle, Triangle} from "./shape"

const rectangle: Rectangle = new Rectangle(100,50);

const circle: Circle = new Circle(25);
const triangle: Triangle = new Triangle(3,4,5)



const rectangleArea = getArea(rectangle);
const circleArea = getArea(circle);
const triangleArea = getArea(triangle);