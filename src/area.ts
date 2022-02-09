import {Circle, Rectangle, Triangle, Shape, ShapeType} from "./shape"

function getCircle({radius}:Circle):number{
    return Math.floor(Math.PI * Math.pow(radius,2));
}

function getRectangle({height,width}:Rectangle):number{
    return height * width;
}

function getTriangle({a,b,c}:Triangle):number{
    return a * b * c;
}

export function getArea(shape:Shape){
    switch(shape.type){
        case ShapeType.Rectangle:
            return getRectangle(shape);
        case ShapeType.Circle:
            return getCircle(shape);
        case ShapeType.Triangle:
            return getTriangle(shape);   
    }
}