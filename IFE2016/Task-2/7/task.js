var showarr=[20,10,40,30,50,20,40,70,10,20];
var text=document.getElementById("txt");
var show=document.getElementById("show");
//输出函数
showa();
function showa(){
	var show_text="";
//循环输出
	for(var i=0;i<showarr.length;i++){
		var hei=showarr[i];
		if(showarr[i].length!=0){
			show_text+="<div class='show' onclick='arr_select(this)' style='height:"+hei+"px;index:"+i+";'><span class='num'>"+hei+"</span></div>";
		}	
	}
	show.innerHTML=show_text;
//根据输入值设置高度
	for(var i=0;i<showarr.length;i++){
		show.childNodes[i].style.index=i;
	}

}
//左侧入主函数
function left_in(){
	var val=text.value;
	var num=parseInt(val);
	if(val.length==0){
		alert("请输入10-100的整数");
		text.focus();
	}else{
		if(num%10==0&&num>=10&&num<=100){
			showarr.unshift(val);
			showa();
		}else{
			alert("只能输入10-100的整数");
			text.value="";
			text.focus();
		}
	}	
	text.value=" ";
	text.focus();
}
//右侧入函数
function right_in(){
	var val=text.value;
	var num=parseInt(val);
	if(val.length==0){
		alert("请输入10-100的整数");
		text.focus();
	}else{
		if(num%10==0&&num>=10&&num<=100){
			showarr.push(val);
			showa();
		}else{
			alert("只能输入10-100的整数");
			text.value="";
			text.focus();
		}
	}
	text.value=" ";
	text.focus();
}
//左侧出主函数
function left_out(){
	if(showarr.length==0){
		alert("还没有输入数字");
		text.focus();
	}else{
		var del="你删除的数字是"+showarr.shift();
		alert(del);
		showa();
	}
}
//右侧出主函数
function right_out(){
	if(showarr.length==0){
		alert("还没有输入数字");
		text.focus();
	}else{
		var del="你删除的数字是"+showarr.pop();
		alert(del);
		showa();
	}
}
//排序
function arr_sort(){
	showarr.sort(function(a,b){
		return a-b;
	});
	showa();
}
//选择函数
function arr_select(obj){
	var init=obj.style.index;
	var del=confirm("确定要删除"+showarr[init]+"吗");
	if(del){showarr.splice(init,1);showa();}
}
function enter(){
	if(event.keyCode==13){
		right_in();
	}
}
