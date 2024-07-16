//using the result statement to return a value

let area;
let width;
let height, result;


width = window.prompt("enter the value of width:");
height = window.prompt("enter the value of height:");
area = getArea(width,height)

console.log("The area of your circle is: ", area);
function getArea(){
    result = width * height;
    return result;
}
// window.alert("The result of the area is ", area);
