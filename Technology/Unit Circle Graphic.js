let canvas = document.getElementById('myUnitCircle')
let ctx = canvas.getContext('2d')
function draw(angle){
    canvas.width = 512;
    canvas.height = 512;

    ctx.beginPath();

    // The Vertical line to create quadrants
    ctx.moveTo((canvas.width/2),0);
    ctx.lineTo(canvas.width/2, canvas.height);


    // The Horizontal Line to create quadrants
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo((canvas.width), canvas.height/2);

    // The circle contained in my canvas
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2, 0, 2 * Math.PI);


    ctx.stroke(); // Make line visible, otherwise for shapes use stroke


    //Angle in Radians
    let angleToRad = toRadians(angle)
    //Changes the color to red
    ctx.strokeStyle = 'red'
    //Starts a new line
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2); //Center point
    ctx.lineTo((canvas.width/2) + (Math.cos(angleToRad) * canvas.height / 2), (canvas.height/2) - (Math.sin(angleToRad) * canvas.height / 2)); 
    ctx.stroke();
}
draw(52);

function drawAngle(){
    var angle = document.getElementById("angle").value;
    draw(angle);
}
//Degrees to radians
function toRadians(degrees) {
    return (degrees * Math.PI)/180
}