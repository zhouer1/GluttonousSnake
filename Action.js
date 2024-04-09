import Food from './Food.js'
import Snake from './Snake.js'

class Action {
    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.timer = null;
        this.count = 0;
    }

    start(mode) {
        let speed;
        switch (mode) {
            case 'easy':
                speed = 400;
                break;
            case 'simple':
                speed = 200;
                break;
            case 'hard':
                speed = 100;
                break;
            case 'ultimate':
                speed = 50;
                break;
            case 'final':
                speed = 30;
                break;
        }
        clearInterval(this.timer);
        this.timer = setInterval(
            () => {
                if (this.snake.isDead()) {
                    this.dead();
                    clearInterval(this.timer);
                } else {
                    console.log(1);
                    this.snake.move();
                    //如果吃到了
                    if (this.snake.isEat(this.food.x, this.food.y)) {
                        //更新蛇
                        this.snake.createSnakeBody();
                        //更新食物
                        this.food.changeFoodPosition();
                        //积1分
                        this.count++;
                    }
                }
            }, speed
        )

    }

    pause() {
        clearInterval(this.timer);
    }

    restart() {
        this.count=0;
        window.location.reload();
    }

    changeDirection(direction) {
        this.snake.direction = direction;
    }

    dead() {
        let deadDialog = document.querySelector('.deadDialog');

        if (!deadDialog.classList.contains('dialog--active')) {
            deadDialog.classList.add('dialog--active')
        }

        let score=document.getElementById("score");
        score.innerHTML=`你的得分是：${this.count}`;
        let closeBtn = document.querySelector('.dead__dialog__close')

        //这里如果不用箭头函数的话会出现丢失this的情况
        closeBtn.addEventListener('click', () => {
            let deadDialog = document.querySelector('.deadDialog');
            if (deadDialog.classList.contains('dialog--active')) {
                deadDialog.classList.remove('dialog--active')
            }
            this.restart();
        })
    }

}

export default Action;