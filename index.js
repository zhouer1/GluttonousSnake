
import Action from './Action.js'


const action=new Action(".map");

const pause=document.getElementById("pause");
const restart=document.getElementById("restart");

const music=document.getElementById("music")


pause.addEventListener('click',()=>{
    action.pause();
    music.pause();
})
restart.addEventListener('click',()=>{
    action.restart();
})

//左37 上38 右39 下40
document.addEventListener('keydown',(e)=>{
    switch(e.keyCode){
        case 65:
            action.changeDirection("left");
            break;
        case 87:
            action.changeDirection("top");
            break;
        case 68:
            action.changeDirection("right");
            break;
        case 83:
            action.changeDirection("bottom");
            break;
        default:
            break;
    }
})


// 打开对话框
var trigger = document.querySelector('.modeTrigger');
trigger.addEventListener('click', function() {
  var dialog = document.querySelector('.modeDialog');
  if (!dialog.classList.contains('dialog--active')) {
    dialog.classList.add('dialog--active')
  }
})

// 关闭对话框
var closeBtns = document.querySelectorAll('.mode__dialog__close')

for(let i=0;i<closeBtns.length;i++){
    closeBtns[i].addEventListener('click', function () {
        var dialog = document.querySelector('.modeDialog');
        if (dialog.classList.contains('dialog--active')) {
          dialog.classList.remove('dialog--active')
        }
        console.log(this.id);
        action.start(this.id);
        music.play();
      })
}



