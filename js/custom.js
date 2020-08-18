// Custom js

var ClassMain = '.main-bg', Main, MainBg;
// 聚光灯参数
var _sl_btn_isOpen;
var _sl_btn_isAuto;
var _sl_btn_isOpen_is = true;
var _sl_btn_isAuto_is = true

// main元素以外的上面的所有元素高度
var MainTopHeight = 64

var style = document.styleSheets[0];

window.onload = function () {


  // 设置聚光灯的执行对象
  _sl_btn_isAuto = document.querySelector('.floating-btn.isAuto') // 是否自动按钮
  _sl_btn_isOpen = document.querySelector('.floating-btn.isOpen') // 是否开启按钮


  // 获取聚光灯的元素
  MainBg = document.querySelector(ClassMain);

  // 监听  是否开启
  _sl_btn_isOpen.addEventListener('click', onToggleSLOpen)
  // 监听  是否自动按钮
  _sl_btn_isAuto.addEventListener('click', onToggleSLAuto)

  // 判断开启
  onOpen()
  // 判断执行自动还是手动
  onAuto()
}

// 开启 or 关闭切换
function onOpen () {
  MainBg.style['display'] = _sl_btn_isOpen_is ? 'block' : 'none'
  _sl_btn_isOpen.querySelector('span').innerText = _sl_btn_isOpen_is ? '开启' : '关闭'
}

// 自动 or 手动切换
function onAuto () {

  if (!_sl_btn_isOpen_is) return

  _sl_btn_isAuto.querySelector('span').innerText = _sl_btn_isAuto_is ? '自动' : '手动'

  if (!_sl_btn_isAuto_is) {
    MainBg.style['animation'] = ``
    Main = document.querySelector('.main');
    Main.addEventListener('mousemove', onMouseMove, true)
  } else {
    var clipp = `clip-path: ellipse(100px 100px at 0px 50%)`
    var animation = `5s spotlight infinite`
    MainBg.style['clip-path'] = clipp
    MainBg.style['animation'] = animation

    /*
    function getRandom(){
      return parseInt(Math.random() * 100)
    }
     setInterval(() => {
      console.log(style)
      style.insertRule(`
      @keyframes spotlight {
        0% {
          -webkit-clip-path: ellipse(100px 100px at 0% 50%);
          clip-path: ellipse(100px 100px at ${getRandom()}% ${getRandom()}%);
        }
        50% {
          -webkit-clip-path: ellipse(100px 100px at 100% 50%);
          clip-path: ellipse(100px 100px at ${getRandom()}% ${getRandom()}%);
        }
        100% {
          -webkit-clip-path: ellipse(100px 100px at 0% 50%);
          clip-path: ellipse(100px 100px at ${getRandom()}% ${getRandom()}%);
        }
      }
    `, 269);//写入样式
    }, 5000) */

  }
}

// 手动聚光灯  鼠标移动
function onMouseMove (e) {
  var clipp = `ellipse(100px 100px at ${e.pageX}px ${e.pageY - MainTopHeight}px)`
  MainBg.style['clip-path'] = clipp
}

// 切换聚光灯是否开启
function onToggleSLOpen () {
  _sl_btn_isOpen_is = !_sl_btn_isOpen_is
  onOpen()
}

// 切换聚光灯自动和手动
function onToggleSLAuto () {
  _sl_btn_isAuto_is = !_sl_btn_isAuto_is
  onAuto()
}