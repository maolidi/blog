var div_1;
var	div_2;
var	st=1;
var	t=10;
var	ck=1;
function ad(){
	div_1=document.getElementById("div_1");
	div_2=document.getElementById("div_2");

	if(div_1.scrollLeft==3150){
		st=(-10);
		t=1;
	}
	if(div_1.scrollLeft==0){
		st=1;
		t=10;
	}
	if((div_1.scrollLeft%630)==0 && div_1.scrollLeft!=0 && ck==1){
		ck=0;
		setTimeout(ad,3000);
	}
	else{
		ck=1;
		div_1.scrollLeft=div_1.scrollLeft+st;
		setTimeout(ad,t);
	}
}
function totop(){
	var x=document.body.scrollTop;
	if(x!=0){
		document.body.scrollTop=document.body.scrollTop-20;
		var y=setTimeout(totop,10)
	}
	else{
		clearTimeOut(y)
	}
}