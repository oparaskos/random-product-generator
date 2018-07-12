

var BACKGROUND_SHAPES = {
    "square": {
        /**
         * @param ctx {CanvasRenderingContext2D}
         */
        draw: function(ctx, params, x, y) {
            ctx.fillStyle = 'green';
            if(params.shapeAngle === "random") {
                ctx.rotate(Math.random() * Math.PI * Math.PI)
            }
            ctx.fillRect(x, y, 100, 100);
        }
    },
    "star": {
        /**
         * @param ctx {CanvasRenderingContext2D}
         */
        draw: function(ctx, params, x, y) {
            ctx.fillStyle = 'red';
            if(params.shapeAngle === "random") {
                ctx.rotate(Math.random() * Math.PI * Math.PI)
            }
            ctx.beginPath()
            ctx.moveTo(x, y);
            ctx.lineTo(x+(160.511-137), y+(169.361-157));
            ctx.lineTo(x+(156.021-137), y+(143.180-157));
            ctx.lineTo(x+(175.042-137), y+(124.639-157));
            ctx.lineTo(x+(148.756-137), y+(120.820-157));
            ctx.lineTo(x+(137.000-137), y+(97.000-157));
            ctx.lineTo(x+(125.244-137), y+(120.820-157));
            ctx.lineTo(x+(98.958-137), y+(124.639-157));
            ctx.lineTo(x+(117.979-137), y+(143.180-157));
            ctx.lineTo(x+(113.489-137), y+(169.361-157));
            ctx.lineTo(x+(137.000-137), y+(157.000-157));
            ctx.fill()
        }
    }
}

function randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[Math.floor(Math.random() * keys.length)]];
}

function drawBackground(background) {
    /**
     * @type {HTMLCanvasElement}
     */
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');


    background.shape.draw(ctx, background, 100, 100)
    window.requestAnimationFrame(drawBackground.bind(null, backgroundData))
}

function resizeCanvas() {
    /**
     * @type {HTMLCanvasElement}
     */
    var canvas = document.getElementById('canvas');
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
}



backgroundData = {
    shape: randomProperty(BACKGROUND_SHAPES),
    shapeAngle: "random"
}

var doDraw = drawBackground.bind(null, backgroundData);

setTimeout(doDraw, 10)
resizeCanvas()
window.addEventListener("resize", resizeCanvas);