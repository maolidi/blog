var temparr=[];
var showarr=[];
var text=document.getElementById("text_in");
var search=document.getElementById("text_search");
var show=document.getElementById("show");
//输出函数
function showa(){
	show.innerHTML="";
	var show_text="";
	for(var i=0;i<showarr.length;i++){
			show_text+="<div class='show' onclick='del(this)' onmouseover='changetxt(this)' onmouseout='recoverytxt(this)' >"+showarr[i]+"</div>";
	}
	show.innerHTML=show_text;
	for(var i=0;i<show.childNodes.length;i++){
		show.childNodes[i].style.index=i;
	}
}
//插入函数
function btn_in(){
	if(text.value.length==0){
		alert("请输入TAG,以标点符号隔开");
		text.focus();
	}else{
		temparr=text.value.split(/[,\\|，、\s\n]/g);
//剔除空数组
		var j=showarr.length;
		for(var i=0;i<temparr.length;i++){
			if(temparr[i].length!=0){
				showarr[j]=temparr[i];
				j++;
			}
		}
		showa();
		text.value="";
	}
}
//文本域按回车函数
function enter(){
	if(event.keyCode==13||event.keyCode==188||event.keyCode==32){
		btn_in();
	}
}
//查询主函数
function btn_search(){
	if(showarr.length==0){
		alert("请输入TAG,以标点符号隔开");
		text.focus();
	}else if(search.value.length==0){
		alert("请输入关键词");
		search.focus();
	}else{
		var temp=[];
		txt=search.value;
		var reg=new RegExp(txt,"g");
		for(var i=0;i<showarr.length;i++){
			temp[i]=showarr[i].replace(reg,"<span class='color'>"+txt+"</span>");
		}
		showarr=temp;
		showa();
		search.value="";
		console.log(showarr[i].match(reg));
	}
}
//查询文本按回车函数
function searchout(){
	if(event.keyCode==13){
		btn_search();
	}
}
//鼠标移上去文字改变
var o_txt="";
function changetxt(obj){
	o_txt=showarr[obj.style.index];
	obj.innerHTML="删除-"+showarr[obj.style.index];
}

//鼠标移除恢复文字
function recoverytxt(obj){
	obj.innerHTML=o_txt;

}

function del(obj){
	showarr.splice(obj.style.index,1);
	showa();
}