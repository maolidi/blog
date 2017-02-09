var showarr=[];
var text=document.getElementById("txt");
var show=document.getElementById("show");
//输出函数
function showa(){
	var show_text="";
	for(var i=0;i<showarr.length;i++){
		show_text+="<div class='show'>"+showarr[i]+"</div>";
	}
	show.innerHTML=show_text;
}
//左侧入主函数
function left_in(){
	var val=text.value;
	if(val.length==0){
		alert("请先输入数字");
		text.focus();
	}else{
		if(parseInt(val)){
			showarr.unshift(val);
			showa();
		}else{
			alert("只能输入数字");
			text.value="";
			text.focus();
		}
	}		
}
//右侧入函数
function right_in(){
	var val=text.value;
	if(val.length==0){
		alert("请先输入数字");
		text.focus();
	}else{
		if(parseInt(val)){
			showarr.push(val);
			showa();
		}else{
			alert("只能输入数字");
			text.value="";
			text.focus();
		}
	}
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