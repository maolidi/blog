$(function(){
	backchange();
	turnrun();
	imghov();

})
var preindex;
var curindex=0;
var times=2000;
var t;
function backchange(){
	var change=$(".backimg");
	var colors=["#e10013","#e8e8e8","#ae1217","#cc0023","#d3d4d9","#e8e8e8"];
	for(var i=0;i<6;i++){
		change.eq(i).css("backgroundColor",colors[i]);
	}
}

function turnrun(){
	var img=$(".backimg");
	var cor=$(".caret");
	t=setInterval(function(){
		if(curindex<6){
			img.eq(curindex-1).fadeOut();
			img.eq(curindex).fadeIn();
			$("#active_car").removeAttr("id");
			cor.eq(curindex).attr("id","active_car");
		}
		if(curindex==6){
			img.eq(curindex-1).fadeOut();
			img.eq(0).fadeIn();
			$("#active_car").removeAttr("id");
			cor.eq(0).attr("id","active_car");
			curindex=0;	
		}
		curindex++;
	},times);
	
}
function imghov(){
	$(".main_mid_a").hover(function(){clearInterval(t)},turnrun);
	$(".caret").on("mouseenter",corhov);//(function(){corhov();},turnrun);
}

function corhov(){
	//clearInterval(t);
	var img=$(".backimg");
	var cor=$(".caret");
	curindex=$(this).index();
	preindex=cor.filter("#active_car").index();
	img.eq(preindex).fadeOut();
	img.eq(curindex).fadeIn();
	//img.eq(i).fadeOut();
	//img.eq(j).fadeIn();
	$("#active_car").removeAttr("id");
	cor.eq(curindex).attr("id","active_car");
	//console.log(preindex);
}

function ahover(){
	//$(".ahover")
}