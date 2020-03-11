import { STAGE_WIDTH, STAGE_HEIGHT, TETROMINOS} from './constants';

export const createStage = () => {
    return Array.from(
        Array(STAGE_HEIGHT),
        () => new Array(STAGE_WIDTH).fill([0, 'clear'])
    );
}

export const randomTetromino = () => {
    const tetrominos = "IJLOSTZ";
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)]
    return TETROMINOS[randTetromino];
}

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
    for (let y = 0; y < player.tetromino.length; y++) {
        for (let x = 0; x < player.tetromino[y].length; x++) {
            //1. check that we're on an actual tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if(
                    //2. check that our move is inside the game areas height (y)
                    //we shouldn't go thraugh the bottom of the play area
                    !stage[y +player.pos.y + moveY] ||

                    //3. check that our move is inside the game areas width (x)
                    !stage[y +player.pos.y + moveY][x +player.pos.x + moveX] ||

                    //4.check the cell we're movoing to isn't set to clear
                    stage[y +player.pos.y + moveY][x +player.pos.x + moveX][1] !== 'clear'
                ) { return true; }
            }
            
        }
    }
}