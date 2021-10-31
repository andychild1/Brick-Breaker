import { useEffect, useRef } from 'react'
import { BallMovement } from './BallMovement';
import WallCollision from './utils/WallCollision';
import data from '../../data';
import Paddle from './Paddle';
import Brick from './Brick';
import BrickCollision from './utils/BrickCollision';
import PaddleHit from './utils/PaddleHit';
import PlayerStats from './PlayerStats';
import AllBroken from './utils/AllBroke';
import ResetBall from './utils/ResetBall';
import { GameManager } from './GameManager';

let bricks = [];

let { ballObj, paddleProps, brickObj, player } = data;

export default function Board() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            paddleProps.y = canvas.height - 30;
            
            //assign briks
           let newBrickSet = Brick(player.level, bricks, canvas, brickObj);
           if (newBrickSet && newBrickSet.length > 0) {
               bricks = newBrickSet;
           }


            ctx.clearRect(0, 0, canvas.width, canvas.height);

            //display stats
            PlayerStats(ctx, player, canvas);

            if (player.lives === 0) {
                bricks.length = 0;
                player.score = 0;
                ResetBall(ballObj, canvas, paddleProps);
                player.level = 1;
                brickObj.y = 50;
                GameManager(ctx, canvas);
                alert("Game over");
            }

            //display bricks
            bricks.map((brick) => {
                return brick.draw(ctx);
            });
           //handle ball movement
            BallMovement(ctx, ballObj);

            //check all broken
            AllBroken(bricks, player, canvas, ballObj);
            
           //handle wall collision
            WallCollision(ballObj, canvas, player, paddleProps);

            //brick collision
            let brickCollision;
            for (let i = 0; i < bricks.length; i++) {
                brickCollision = BrickCollision(ballObj, bricks[i]);

                if (brickCollision.hit && !bricks[i].broke) {

                    if (brickCollision.axis === "X") {
                        ballObj.dx *= -1;
                        bricks[i].broke = true;
                    } else if (brickCollision.axis === "Y") {
                        ballObj.dy *= -1;
                        bricks[i].broke = true;
                    }
                    player.score += 10;
                }
            }

            Paddle(ctx, canvas, paddleProps);

            //paddle + ball collision
            PaddleHit(ballObj, paddleProps);

            requestAnimationFrame(render)
        }
        render();
    }, []);

    return (
         <canvas 
         id="canvas" 
         ref={canvasRef} 
         height="600px" 
         width={window.innerWidth -20}
         onMouseMove={(e) => (paddleProps.x = e.clientX - paddleProps.width / 2 -10)}
         ></canvas>
    )
}
