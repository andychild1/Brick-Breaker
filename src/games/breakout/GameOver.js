export function GameOver(ctx, canvas) {
    //game over
        ctx.font = "40px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Game Over", canvas.width / 2.25, canvas.height / 2);
}

export const TryAgain = (ctx, canvas) => {
    ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Press Enter to try again", canvas.width / 2.25, canvas.height / 1.8);
}