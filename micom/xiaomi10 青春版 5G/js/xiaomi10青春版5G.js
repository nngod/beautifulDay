var index=0;
var img_tt = document.querySelector('.img_tt');
var a=img_tt.children.length;
var next = document.querySelector('.next');
var prior = document.querySelector('.prior');
var ul1 =document.querySelector('.ul1');
var l_banxin = document.querySelector('.l_banxin')
var times=null;//定时器


// //价格模块
// var peizhi2 = document.getElementById('peizhi2');
// var price = document.getElementById('span1');
// var del = document.getElementById('del');


//
 var shop_pz =document.getElementById('shop_pz'),
 shop_co = document.getElementById('shop_co'),
 del1 = document.getElementById('del1'),
 jg = document.getElementById('jg'),
 jg1 = document.getElementById('jg1');












//开启轮播
function startAtuoPlay(){
	times = setInterval(function(){
		index++;
		if(index>=a) index=0;
		changImg();
	
	},7000)
	

}


//清除自动轮播
function stoptAtuoPlay(){
	if(times){
		clearInterval(times);
	}
}




//切换图片 
function changImg(){
	for(var i=0;i<a;i++){
		img_tt.children[i].style.display='none';
		ul1.children[i].className = '';
	}
	img_tt.children[index].style.display='block';
	ul1.children[index].className = 'li';
}

//下一张图片
next.addEventListener('click',function(){
	index++;
	if(index>=a){
		index=0;
	}
	for(var i=0; i<a;i++){
		img_tt.children[i].style.display='none';
		ul1.children[i].className = '';
	}
	img_tt.children[index].style.display='block';
	ul1.children[index].className = 'li';
})

//上一张图片
prior.addEventListener('click',function(){
	index--;
	if(index<0){
		index=a-1;
	}
	for(var i=0; i<a;i++){
		img_tt.children[i].style.display='none';
		ul1.children[i].className = '';
	}
	img_tt.children[index].style.display='block';
	ul1.children[index].className = 'li';
})

//点击切换图片

for (var i=0;i<a; i++){
	ul1.children[i].addEventListener('click',function(){
		for (var i=0;i<a;i++){
		img_tt.children[i].style.display='none';
		ul1.children[i].className = '';
	}
	index=this.getAttribute('data-index');
	img_tt.children[index].style.display='block';
	ul1.children[index].className = 'li';
	})
	
}

//当鼠标移入结束自动轮播
l_banxin.addEventListener('mouseover',stoptAtuoPlay);
//当鼠标离开开启自动轮播
l_banxin.addEventListener('mouseout',startAtuoPlay);
//自动轮播
startAtuoPlay();


//价格模块
var peizhi2 = document.getElementById('peizhi2');
var peizhi1 = document.getElementById('peizhi1');
var peizhi3 = document.getElementById('peizhi3');
var price = document.getElementById('span1');
var del = document.getElementById('del');


peizhi2.addEventListener('click',function(){
	peizhi2.style.border='1px solid #FF6700';
	peizhi2.style.color='#FF6700';
	
	peizhi3.style.border='1px solid #ccc';
	peizhi3.style.color='black';
	
	peizhi1.style.border='1px solid #ccc';
	peizhi1.style.color='black';
	
	price.innerHTML = '2299 元';
	del.innerHTML = '2499 元';
	
	shop_pz.innerHTML='8G+128G';
	del1.innerHTML = del.innerHTML;
	jg.innerHTML =price.innerHTML;
	jg1.innerHTML = '总价: 2299 元' ;
})

peizhi1.addEventListener('click',function(){
	
	peizhi1.style.border='1px solid #FF6700';
	peizhi1.style.color='#FF6700';
	
	
	peizhi2.style.border='1px solid #ccc';
	peizhi2.style.color='black';
	
	peizhi3.style.border='1px solid #ccc';
	peizhi3.style.color='black';
	
	
	price.innerHTML = '1999 元';
	del.innerHTML = '2299 元';
	
	shop_pz.innerHTML='6G+128G';
	del1.innerHTML = del.innerHTML;
	jg.innerHTML =price.innerHTML;
	jg1.innerHTML = '总价: 1999 元' ;
})

peizhi3.addEventListener('click',function(){
	peizhi3.style.border='1px solid #FF6700';
	peizhi3.style.color='#FF6700';
	
	
	peizhi2.style.border='1px solid #ccc';
	peizhi2.style.color='black';
	
	peizhi1.style.border='1px solid #ccc';
	peizhi1.style.color='black';
	
	
	price.innerHTML = '2599 元';
	del.innerHTML = '2799 元';
	
	shop_pz.innerHTML='8G+256G';
	del1.innerHTML = del.innerHTML;
	jg.innerHTML =price.innerHTML;
	jg1.innerHTML = '总价: 2599 元' ;
})


//切换颜色
var color2 = document.getElementById('color2');
var color1 = document.getElementById('color1');
var color3 = document.getElementById('color3');


var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');






color2.addEventListener('click',function(){
	ul1.children[0].click();
    color2.style.border='1px solid #FF6700';
	color2.style.color='#FF6700';
	
	color1.style.border='1px solid #ccc';
	color1.style.color='black';
	
	color3.style.border='1px solid #ccc';
	color3.style.color='black';
	
	

	img1.src = 'img/img6-1.jpg';
	img2.src = 'img/img7.jpg';
	img3.src = 'img/img8.jpg';
	img4.src = 'img/ing9.jpg';
	img5.src = 'img/img10.jpg';
	
	
	shop_co.innerHTML = '蓝莓薄荷';
	
})

color1.addEventListener('click',function(){
	ul1.children[0].click();
	color1.style.border='1px solid #FF6700';
	color1.style.color='#FF6700';
	
	
	color2.style.border='1px solid #ccc';
	color2.style.color='black';
	
	color3.style.border='1px solid #ccc';
	color3.style.color='black';
	
	
	img1.src = 'img/img1.jpg';
	img2.src = 'img/img2.jpg';
	img3.src = 'img/img3.jpg';
	img4.src = 'img/img4.jpg';
	img5.src = 'img/img5.jpg';
	
    shop_co.innerHTML = '白桃乌龙';
	
})


color3.addEventListener('click',function(){
	ul1.children[0].click();
	color3.style.border='1px solid #FF6700';
	color3.style.color='#FF6700';
	
	
	color2.style.border='1px solid #ccc';
	color2.style.color='black';
	
	
	color1.style.border='1px solid #ccc';
	color1.style.color='black';
	
	img1.src = 'img/img11.jpg';
	img2.src = 'img/img12.jpg';
	img3.src = 'img/img13.jpg';
	img4.src = 'img/img14.jpg';
	img5.src = 'img/img15.jpg';
	
    shop_co.innerHTML = '黑巧风暴';
	
})
