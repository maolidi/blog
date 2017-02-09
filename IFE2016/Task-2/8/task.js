var temparr=[];
var showarr=[];
var text=document.getElementById("text_in");
var search=document.getElementById("text_search");
var show=document.getElementById("show");
//输出函数
function showa(){
	var show_text="";
	for(var i=0;i<showarr.length;i++){
		show_text+="<div class='show'>"+showarr[i]+"</div>";
	}
	show.innerHTML=show_text;
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
	if(event.keyCode==13){
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
	}
}
//查询文本按回车函数
function searchout(){
	if(event.keyCode==13){
		btn_search();
	}
}