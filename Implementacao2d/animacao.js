document.addEventListener( 'DOMContentLoader', function(){
    /** @type { HTMLCanvasElement } */
    const canvas = document.getElementById( 'canvas' );
    const ctx = canvas.getContext( '2d');

    ctx.fillStyle = 'red';
    let x =0;
    const y = 200;

    function draw() {
        if( x>500){
            return;
        }
        ctx.fillRect( 0, 0, canvas.width, canvas. height );
        ctx.fillRect( x, y, 100, 100 );
        x +=5;
        requestAnimationFrame( draw );
    }
    requestAnimationFrame( draw );
} );