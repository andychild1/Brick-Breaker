import ResetBall from "./ResetBall";

export default function WallCollision(ballObj, canvas, player, paddleProps) {
    if (ballObj.y + ballObj.rad >= canvas.height) {
        player.lives--;
        ResetBall(ballObj, canvas, paddleProps);
    }
    if (ballObj.y - ballObj.rad <= 0) {
        ballObj.dy *= -1;
    }
    if (ballObj.x + ballObj.rad >= canvas.width || ballObj.x - ballObj.rad <= 0) {
        ballObj.dx *= -1;
    }
}