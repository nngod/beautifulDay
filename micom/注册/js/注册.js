
var id2 = document.getElementById('id2'),
id3 = document.getElementById('id3'),
id1 = document.getElementById('id1'),
li1 = document.getElementById('li1'),
id4 = document.getElementById('id4');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var btn =document.querySelector('button');
id1.addEventListener('blur',function(){
	if(id1.value != ''){
		img1.style.display='block';
	}
	
})
id4.onfocus = function() {
	img2.style.display='none';
}

id1.onfocus = function() {
	img1.style.display='none';
}

id4.onblur = function() {
	if(id4.value != ''){
 		img2.style.display='block';
	}
	}
id3.onblur = function() {

	if (id3.value !=id2.value) {
		
		id2.value = '';
		id3.value = '';
		
		li1.style.display='block';
		} else {
			li1.style.display='none';
		}
	
}


btn.addEventListener('click',function(){
	if (id1.value!=''&&id2.value!=''&&id3.value!=''&&id4.value!='') {
		alert('注册成功！')
		}
	
})