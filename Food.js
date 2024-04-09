const map = document.querySelector(".map");

//定义食物类
class Food {
    constructor() {
        //食物具有自己的坐标
        this.x = 0;
        this.y = 0;
        //食物具有自己的实体，实体是一个HTML元素
        this.entity = document.createElement("div");
        //食物具有自己的样式
        this.className = "food";
        //在地图中的随机位置生成一个食物
        this.initFood();
        this.changeFoodPosition();
    }

    initFood() {
        this.entity.className = this.className;
        map.appendChild(this.entity);
    }

    changeFoodPosition() {
        const width = map.clientWidth;
        const height = map.clientHeight;
        const w_num = width / 20;
        const h_num = height / 20;

        let n1 = Math.floor(Math.random() * w_num);
        let n2 = Math.floor(Math.random() * h_num);

        this.x = n1 * 20;
        this.y = n2 * 20;
        console.log(this.x, this.y);

        this.entity.style.left = this.x + "px";
        this.entity.style.top = this.y + "px";
    }
}

export default Food;