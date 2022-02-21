var index = 0; //当前显示图片的索引
var a2 = byId("a2");
var a3 = byId("a3");
var pics = byId("banner").getElementsByTagName("div"),
  size = pics.length;
// console.log(size);

var li = byId("ul2").getElementsByTagName("li"),
  size1 = li.length;
console.log(size1);

//搜索框
var input = byId("input1");

var times = null; //定时器

var bx = byId("bx_a w");

//获得焦点
input.onfocus = function () {
  if (this.value === "小米10") {
    this.value = "";
  }
  this.style.color = "#333";
};

//失去焦点
input.onblur = function () {
  if (this.value === "") {
    this.value = "小米10";
  }
  this.style.color = "#ccc";
};

//封装getelementbyid（）
function byId(id) {
  return typeof id === "string" ? document.getElementById(id) : id;
}

//封装通用事件绑定方法
function addHandler(element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, true);
    //IE浏览器支持DOM2级
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
    //IE浏览器不支持DOM2级
  } else {
    element["on" + type] = handler;
  }
}
//清除自动轮播
function stoptAtuoPlay() {
  if (times) {
    clearInterval(times);
  }
}

//开启自动轮播
function startAtuoPlay() {
  times = setInterval(function () {
    index++;
    if (index >= size) index = 0;
    changImg();
  }, 10000);
}

//切换图片
function changImg() {
  //遍历所有图片，将所有图片隐藏，将图片上的小圆点隐藏
  for (var i = 0; i < size; i++) {
    pics[i].style.display = "none";
    li[i].className = "";
  }
  //显示当前图片
  pics[index].style.display = "block";
  //显示小圆点
  li[index].className = "a4";
}

//点击上一张按钮显示上一张图片
addHandler(a2, "click", function () {
  index--;
  if (index < 0) index = size - 1;
  for (var i = 0; i < size; i++) {
    pics[i].style.display = "none";
    pics[index].style.display = "block";
    li[i].className = "";
    li[index].className = "a4";
  }
});
//点击下一张按钮显示下一张图片
addHandler(a3, "click", function () {
  index++;
  if (index >= size) index = 0;
  for (var i = 0; i < size; i++) {
    pics[i].style.display = "none";
    pics[index].style.display = "block";
    li[i].className = "";
    li[index].className = "a4";
  }
});
//小圆点效果
for (var i = 0; i < li.length; i++) {
  addHandler(li[i], "click", function () {
    var liindex = this.getAttribute("data-index");
    index = liindex;
    changImg();
  });
}

//当鼠标移入结束自动轮播
addHandler(bx, "mouseover", stoptAtuoPlay);
//当鼠标离开开启自动轮播
addHandler(bx, "mouseout", startAtuoPlay);
//自动轮播
startAtuoPlay();

//秒杀盒子

var hour = document.querySelector(".hour"),
  points = document.querySelector(".points"),
  second = document.querySelector(".second");

var nextDate = new Date(
  new Date().getTime() +
    86400000 -
    (new Date().getHours() * 60 * 60 +
      new Date().getMinutes() * 60 +
      new Date().getSeconds()) *
      1000
); //后一天

countDown();
setInterval(countDown, 1000);

function countDown() {
  var nowTime = +new Date(); //返回的是当时时间总的秒数
  var times = (nextDate - nowTime) / 1000; //times 是剩余时间总的秒数
  var h = parseInt((times / 60 / 60) % 24); //时
  h = h < 10 ? "0" + h : h;
  hour.innerHTML = h;

  var m = parseInt((times / 60) % 60); //分
  m = m < 10 ? "0" + m : m;
  points.innerHTML = m;

  var s = parseInt(times % 60); //当前秒
  s = s < 10 ? "0" + s : s;
  second.innerHTML = s;
}
