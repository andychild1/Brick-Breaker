
export default function Brick(level, briks, canvas, brick) {

    brick.width = canvas.width / 12 -1;

    let newBricks = [];
    if (!briks) {
        return [];
    }
    //if all levels are filled
    if (briks.length >= 12 * level) {
        return;
    }

    //brick info here
    for (let i = 0; i < 12 * level; i++) {
        let newBrick = new SingleBrick(
            brick.x + brick.width,
            brick.y,
            brick.width,
            brick.height,
            brick.colors
        );
        newBricks.push(newBrick);
        //draw new brick
        brick.x += brick.width + 1;
        if (brick.x + brick.width >= canvas.width) {
            brick.x = 0.5;
            brick.y += brick.height + 1;
        }
    }
    return newBricks;
}

class SingleBrick {
    constructor(x, y, w, h, c) {
        this.x = x - w;
        this.y = y;
        this.width = w;
        this.height = h;
        this.colors = c;
        this.broke = false;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.broke ? "#2b2832" : this.colors[1];
        ctx.strokeStyle = this.broke ? "#2b2832" : "#2b2832";
        ctx.lineWidth = 5;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "#2b2832";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}
