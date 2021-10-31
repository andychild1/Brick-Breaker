export function GameManager(ctx, canvas) {
    //game over
        ctx.font = "40px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
}