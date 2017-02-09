$(function(){
/*	var strs;
	function GetRequest() {   
	   var url = location.search; //获取url中'?'符后的字串   
	   var theRequest = new Object();   
	   if (url.indexOf("?") != -1) {   
		  var str = url.substr(1);   
		  strs = str.split("&");   
		  for(var i = 0; i < strs.length; i ++) {   
			 theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
		  }   
	   }   
	   return theRequest;   
	}   
	var Request = new Object();
	Request = GetRequest();
    var q=Request["q"];
	var text_1="<h1 class='text-center Form_title'>登录</h1><div class='form-group'><label class='col-md-2 control-label' for='username'>用户名</label><div class='col-md-10'><input type='text' class='form-control' name='username' id='username' maxlength='9' placeholder='不超过9位'></div></div><div class='form-group'><label for='password' class='col-md-2 control-label'>密码</label><div class='col-md-10'><input type='password' class='form-control' name='password' id='password' minlength='6' placeholder='包含字母数字'></div></div><div class='checkbox text-center'><label> <input type='checkbox' value='1' id='save' name='save' checked>请记住我</label></div><div class='Btn_gruop'><input type='button' id='log-btn' name='log-reg-btn' class='btn btn-primary btn-block' value='登录'><a href='logoin.html?q=2' class='btn btn-default btn-block'>我要注册</a></div>";
	
	var text_2="<h1 class='text-center Form_title'>注册</h1><div class='form-group'><label class='col-md-2 control-label' for='username'>用户名</label><div class='col-md-10'><input type='text' class='form-control' name='username' id='username' maxlength='9' placeholder='不超过9位'></div></div><div class='form-group'><label for='password' class='col-md-2 control-label'>密码</label><div class='col-md-10'> <input type='password' class='form-control' name='password' id='password' minlength='6' placeholder='包含字母数字'></div></div><div class='form-group'><label for='rpassword' class='col-md-2 control-label'>重复密码</label><div class='col-md-10'> <input type='password' class='form-control' name='rpassword' id='rpassword' minlength='6' placeholder='再次输入密码'></div></div><div class='form-group'><label for='email' class='col-md-2 control-label'>电子邮件</label><div class='col-md-10'><input type='email' name='email' class='form-control' id='email' placeholder='输入常用邮箱'></div></div><div class='Btn_gruop'><input type='button' id='reg-btn' name='log-reg-btn' class='btn btn-primary btn-block' value='注册'><a href='logoin.html?q=1' class='btn btn-default btn-block'>直接登录</a></div>";
	
	if(q=="1"){
		$("#li_reg").removeClass("active");
		$("#li_log").addClass("active");
		$(".main").html(text_1);
	}else if(q=="2"){
		$("#li_log").removeClass("active");
		$("#li_reg").addClass("active");
		$(".main").html(text_2);
	}
*/
	//记住密码
	save();
	function save(){
		var stat=$("#save");
		if(stat.is(":checked")==true){
			$("#username").attr("autocomplete","on");
			$("#password").attr("autocomplete","on");
		}else{
			$("#username").attr("autocomplete","off");
			$("#password").attr("autocomplete","off");
		}
		setTimeout(save,10);
	}


	//注册登录检查
	$("input").change(function(){
		check_log();
	});
	$("#log-btn").click(function(){
		check_log();
		log_sub()
	});
	var log_stat="0";
	function check_log(){
	//登录检查用户名
		var i="0";
		var name=$("#username").val().trim();
		if(!$(".name-err").html()){
			$("#username").parent().append("<div class='name-err text-danger'></div>");
		}
		if(name.length==0){
			$(".name-err").removeClass("text-success").addClass("text-danger").html("请输入用户名");
		}else{ 
			if(name.length<6){
				$(".name-err").removeClass("text-success").addClass("text-danger").html("至少输入6位");
			}else{
				$(".name-err").removeClass("text-danger").addClass("text-success").html("OK");
				i="1";
			}
		}
	//登录检查密码
		var j="0";
		var password=$("#password").val().trim();
		if(!$(".password-err").html()){
			$("#password").parent().append("<div class='password-err text-danger'></div>");
		}
		if(password.length==0){
			$(".password-err").removeClass("text-success").addClass("text-danger").html("请输入密码");
		}else{ 
			if(password.length<6){
				$(".password-err").removeClass("text-success").addClass("text-danger").html("至少输入6位");
			}else{
				$(".password-err").removeClass("text-danger").addClass("text-success").html("OK");
				j="1";
			}
		}

		if(i=="0"){
			$("#username").focus();
		}else if(j=="0"){
			$("#password").focus();
		}

		if(i=="1" && j=="1"){
			log_stat="1";
		}else{
			log_stat="0";
		}
	}

	function log_sub(){
		if(log_stat=="1"){
			$("#myform").submit();
		}
	}

})