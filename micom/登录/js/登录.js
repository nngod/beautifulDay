var zhdl=document.getElementById('zhdl');
var smdl = document.getElementById('smdl');
var banxin = document.querySelector('.denglujiemian_banxin');
var smdl1 = document.querySelector('.smdl1');
smdl.onclick = function (){
	banxin.style.display='none';
	smdl1.style.display='block';
	smdl.style.color=' #FF6700';
	// zhdl.#ccc
	zhdl.style.color='black';
}
zhdl.onclick = function (){
	banxin.style.display='block';
	smdl1.style.display='none';
	smdl.style.color='black';
	// zhdl.#ccc
	zhdl.style.color='#FF6700';
}
