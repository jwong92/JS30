window.onload = loadpage;

function loadpage() {
    const canvas = document.getElementById("draw");
    // Define the context of the canvas as 2d vs 3d
    const ctx = canvas.getContext('2d');
    
    // make the canvas the size of the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = '50';

    // Only draws when the cursor is down. So this is a flag.
    let isDrawing = false;

    // To draw a line, need a starting (x.y) and ending (x,y)
    let lastX = 0;
    let lastY = 0;
    let hue = 1;

    // will be called whenever you move the mouse - listen for the mouse move event on the canvas
    function draw(e) {
        // Only want this to run when the person has lclicked, so stop from running if the mouse is clicked down
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        if(!isDrawing) return;
        console.log(e);
        // start a path - ctx is where all the drawing is. 
        // Start with x and y then end with it
        ctx.beginPath();
        // start from
        ctx.moveTo(lastX, lastY);
        // go to
        ctx.lineTo(e.offsetX, e.offsetY);
        // stroke is what calles the actual drawing of the path
        // Once drawing is complete, update the lastX and lastY
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];

        hue++;
        if(hue >= 360) {
            hue = 1;
        }
    }

    canvas.addEventListener('mousedown',(e)  => {
        isDrawing = true;
        // Update the lastX and lastY as soon as the mousdown occurs
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup',() => isDrawing = false);
    canvas.addEventListener('mouseout',() => isDrawing = false);
}