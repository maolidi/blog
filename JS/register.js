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
	
	var text_2="<h1 class='text-center Form_title'>注册</h1><div class='form-group'>	<label class='col-md-2 control-label' for='username'>用户名</label><div class='col-md-10'><input type='text' class='form-control' name='username' id='username' maxlength='9' placeholder='不超过9位'></div></div><div class='form-group'><label for='password' class='col-md-2 control-label'>密码</label><div class='col-md-10'> <input type='password' class='form-control' name='password' id='password' minlength='6' placeholder='包含字母数字'></div></div><div class='form-group'><label for='rpassword' class='col-md-2 control-label'>重复密码</label><div class='col-md-10'> <input type='password' class='form-control' name='rpassword' id='rpassword' minlength='6' placeholder='再次输入密码'></div></div><div class='form-group'><label for='email' class='col-md-2 control-label'>电子邮件</label><div class='col-md-10'><input type='email' name='email' class='form-control' id='email' placeholder='输入常用邮箱'></div></div><div class='Btn_gruop'><input type='button' id='reg-btn' name='log-reg-btn' class='btn btn-primary btn-block' value='注册'><a href='logoin.html?q=1' class='btn btn-default btn-block'>直接登录</a></div>";
	
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

	$("input").change(function(){
		check_reg();
	});
	$("#reg-btn").click(function(){
		check_reg();
		reg_sub()
	});
	var reg_stat="0";
	function check_reg(){
	//注册检查用户名
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
		
	//注册检查密码
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
		
	//注册检查二次密码
		var k="0";
		var rpassword=$("#rpassword").val().trim();
		if(!$(".rpassword-err").html()){
			$("#rpassword").parent().append("<div class='rpassword-err text-danger'></div>");
		}
		if(rpassword.length==0){
			$(".rpassword-err").removeClass("text-success").addClass("text-danger").html("请重复密码");
		}else{
			if(rpassword!=password){
				$(".rpassword-err").removeClass("text-success").addClass("text-danger").html("密码不一致");

			}else{
				$(".rpassword-err").removeClass("text-danger").addClass("text-success").html("OK");
				k="1";
			}
		}
		
		var l="0";
		var email=$("#email").val().trim();
		var x=$("#email").val();
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if(!$(".email-err").html()){
			$("#email").parent().append("<div class='email-err text-danger'></div>");
		}
		if(email.length==0){
			$(".email-err").removeClass("text-success").addClass("text-danger").html("请输入邮箱");
		}else{
			if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
				$(".email-err").removeClass("text-success").addClass("text-danger").html("不是有效的e-mail格式");
			}else{
				$(".email-err").removeClass("text-danger").addClass("text-success").html("OK");
				l="1";
			}
		}
		if(i=="0"){
			$("#username").focus();
		}else if(j=="0"){
			$("#password").focus();
		}else if(k=="0"){
			$("#rpassword").focus();
		}else if(l=="0"){
			$("#email").focus();
		}

		if(i=="1" && j=="1" && k=="1" && l=="1"){
			reg_stat="1";
		}else{
			reg_stat="0";
		}
	}

	function reg_sub(){
		if(reg_stat=="1"){
			$("#myform").submit();
		}
	}

})