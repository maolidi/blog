$(function(){
//时间显示
	show();
//文字滚动
	scr();
	
//登录注册
	

//导航搜索
	$("#search").click(function(){
		
		alert("搜索功能还没有上线");
	});

//返回顶部
top();
//
	$(".totop").hover(function(){
		$(".totop").css("background-position","0px -34px");
	},function(){
		$(".totop").css("background-position","0px 0px");
	})

	$(".totop").click(function(){
		totop();
	})

	function totop(){
		var x=document.body.scrollTop;
		if(x!=0){
			document.body.scrollTop=document.body.scrollTop-20;
			var y=setTimeout(totop,10)
		}
	}
	function top(){
		var x=document.body.scrollTop;
		if(x<=50){
			$(".totop").css("display","none");
		}else{
			$(".totop").css("display","block");
		}
		setTimeout(top,10);
	}

//三栏高度
	hei();
	function hei(){
		var main_h=parseInt($(".main").css("height"));
		var left_h=parseInt($(".aside_l").css("height"));
		var right_h=parseInt($(".aside_r").css("height"));
		console.log(main_h);
		var hei=Math.max(main_h,left_h,right_h)+"px";
		$(".main").css("height",hei);
		$(".aside_l").css("height",hei);
		$(".aside_r").css("height",hei);
	}

})

//时间事件
function show(){
	var now=new Date();
	var y=now.getFullYear();
	var mo=now.getMonth()+1;
	var d=now.getDate();
	var h=now.getHours();
	var m=now.getMinutes();
	var s=now.getSeconds();
	var w=now.getDay();

	function chick(value){
		if(value<10){
			value="0"+value;
		}
		return value;
	}
			
	switch(w){
		case 0:w="星期日";
			break;
		case 1:w="星期一";
			break;
		case 2:w="星期二";
			break;
		case 3:w="星期三";
			break;
		case 4:w="星期四";
			break;
		case 5:w="星期五";
			break;
		case 6:w="星期六";
			break;
		}

	d=chick(d);
	m=chick(m);
	s=chick(s);
	var time=document.getElementById("time");
	time.innerHTML="今天是"+y+"-"+mo+"-"+d+"<br>"+w+" "+h+":"+m+":"+s;
	setTimeout(show,10);
}
/*
//鼠标悬浮事件
$(function(){
	$(".md").hover(function(){
		$(this).css("background","rgba(11,18,44,0.8)")
	},function(){
		$(this).css("background","rgba(11,18,44,0)")
	})
})
*/
//文字滚动事件
var div,span,wd,wd_1,t,ts;
function scr(){
	div=document.getElementById("div_1").clientWidth;
    span=document.getElementById("span_1");
	wd=span.offsetWidth;
	wd_1=parseInt(wd);
	span.style.right=(-wd_1)+"px";
	ac();
}
function ac(){
	ts=parseInt(span.style.right);
	if(ts>=div){
		span.style.right=(-wd_1)+"px";
	} else{
		span.style.right=(ts+=1)+"px";
	}
	var t=setTimeout(ac,10);
	span.onmouseover=function(){clearTimeout(t);};
	span.onmouseout=function(){t=setTimeout(ac,10);};
}
