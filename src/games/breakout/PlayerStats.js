import Heart from '../../assets/heart.png';
export default function PlayerStats(ctx, player, canvas) {
    //name
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Brick Breaker`, 20, 30);

    //lives
    const heart = new Image();
    heart.src = Heart;
    let gap = 0;
    for (let i = 0; i < player.lives; i++) {
        ctx.drawImage(heart, canvas.width / 2 + gap, 10);
        gap += 40;
    }

    //scores
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}