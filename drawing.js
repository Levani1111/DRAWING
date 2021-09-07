var drawing = false;
var context;

window.onload=function()
{
    //Clear Button
    document.getElementById('btnClear').addEventListener('click', function(){
            context.clearRect(0,0, context.canvas.width, context.canvas.height);       
        }, false);
    
    //Back Button
    document.getElementById('btnBack').addEventListener('click', function(){
            document.getElementById('myCanvas').style.display = "block";
            document.getElementById('saveArea').style.display = "none";
            document.getElementById('tools').style.display = "block";
            
        }, false);
    
    //Width Scale
    document.getElementById('lineWidth').addEventListener('change', function(){
            context.lineWidth = document.getElementById('lineWidth').value;
        }, false);
    
    //Color
    document.getElementById('colorChange').addEventListener('change', function(){
            context.strokeStyle = document.getElementById('colorChange').value;
        }, false);
    
    //Save
    document.getElementById('btnSave').addEventListener('click', function(){
            document.getElementById('myCanvas').style.display = "none";
            document.getElementById('saveArea').style.display = "block";
            document.getElementById('tools').style.display = "none";
            
            var dataURL = document.getElementById('myCanvas').toDataURL();
            document.getElementById('canvasImg').src = dataURL;
        }, false);

        function touchstart(event) { drawstart(event.touches[0]) }
        function touchmove(event) { drawmove(event.touches[0]); event.preventDefault(); }
        function touchend(event) { drawend(event.changedTouches[0]) }

        canvas.addEventListener('touchstart', touchstart, false);
        canvas.addEventListener('touchmove', touchmove, false);
        canvas.addEventListener('touchend', touchend, false); 
    
    //Size Canvas
    context = document.getElementById('myCanvas').getContext("2d");
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight-130;
    
    //Mouse movement
    document.onmousemove = handleMouseMove;
    document.onmousedown = handleDown;
    document.onmouseup = handleUp;

    
    //Style line
    context.strokeStyle = "#000";
    context.lineJoin = "round";
    context.lineWidth = 5;
    
    //Hide Save Area
    document.getElementById('saveArea').style.display = "none";
}

function handleMouseMove(e)
{
    console.log(e.clientX);
    console.log(e.clientY);
    if(drawing)
    {
       
        context.lineTo(e.clientX, e.clientY);
        context.closePath();
        context.stroke();
        context.moveTo(e.clientX, e.clientY);
    } else
    {
        context.moveTo(e.clientX, e.clientY);
    }
    
}

function handleDown(e)
{
    drawing = !drawing; 
    console.log(drawing);
    context.moveTo(e.clientX, e.clientY);
    context.beginPath();
     
}

function handleUp()
{
    drawing = !drawing;
    console.log(drawing);
}

