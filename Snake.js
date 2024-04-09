const map=document.querySelector(".map");

class Snake {
    constructor() {
        //蛇有自己的运动方向
        this.direction = 'right';
        //蛇有自己的身体
        this.snakeList = [];
        this.initSnake();
    }

    createSnakeBody() {
        const head=this.snakeList[0];
    
        const pos = {
            x: 0,
            y: 0,
        }
        if (head) {
            switch (this.direction) {
                case "left":
                    pos.x = head.offsetLeft - 20;
                    pos.y = head.offsetTop;
                    break;
                case "right":
                    pos.x = head.offsetLeft + 20;
                    pos.y = head.offsetTop;
                    break;
                case "top":
                    pos.x = head.offsetLeft;
                    pos.y = head.offsetTop-20;
                    break;
                case "bottom":
                    pos.x = head.offsetLeft;
                    pos.y = head.offsetTop+20;
                    break;
                default:
                    break;
            }
            //把现有的蛇头变成身体，然后下面的操作会新增一个蛇头
            head.className='body';
        }
        const div = document.createElement("div");
        div.className = "head";

        this.snakeList.unshift(div);

        div.style.left = pos.x + 'px';
        div.style.top = pos.y + 'px';

        map.appendChild(div);
    }

    initSnake() {
        for (let i = 0; i < 4; i++) {
            this.createSnakeBody();
        }
    }

    move(){
        //把蛇尾去掉，创建一个新头，造成视觉上的移动
        const body=this.snakeList.pop();
        body.remove();
        this.createSnakeBody();
    }

    isEat(foodX,foodY){
        const head=this.snakeList[0];
        const headX=head.offsetLeft;
        const headY=head.offsetTop;

        if(headX===foodX&&headY===foodY){
            return true;
        }else{
            return false;
        }
    }

    isDead(){
        const head=this.snakeList[0];
        const headX=head.offsetLeft;
        const headY=head.offsetTop;

        if(headX<0||headX>=map.clientWidth||headY<0||headY>=map.clientHeight){
            return true
        }else{
            return false;
        }
    }
}

export default Snake;