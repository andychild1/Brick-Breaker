export default function ResetBall(ballObj, canvas, paddleProps) {
    ballObj.x = paddleProps.x + paddleProps.width / 2;
    ballObj.y = paddleProps.y - 10;
    ballObj.dx = 6 * (Math.random() * 2 -1);
    ballObj.dy = 6;
    ballObj.dy *= -1;
}