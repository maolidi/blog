<?php
	$name=$_POST["username"];
	$password=$_POST["password"];
	$email=$_POST["email"];
	if(empty($name) || empty($password) || empty($email)){
		echo("没有获取到用户名和密码");
		exit();
	}


/*	//获取按钮值
	$sel=$_POST["log-reg-btn"];
	if($sel=="登录"){
		$email="无";
	}
	elseif($sel=="注册"){
		if(empty($_POST["email"])){
			echo("没有获取到邮箱");
			exit();
		}else{
			$email=$_POST["email"];
		}
	}

	//获取是否保存账户
	if(!empty($_POST["save"])){
		setcookie("name",$name,time()+3600*24*7);
		setcookie("password",$password,time()+3600*24*3);
	}else{
		setcookie("name");
		setcookie("password");
	}
*/
function con_sql($url,$name,$password,$dbname){
		//在最前面加上@只不提醒该行
		$conn=mysql_connect($url,$name,$password)or die("error");
		//连接数据库
		mysql_select_db($dbname,$conn);
		//设定字符集utf8
		mysql_query("set names 'utf8'");
		mysql_query("set character_set_client=utf8");
		mysql_query("set character_set_results=utf8");
		return $conn;
	}
	$con=con_sql("localhost","myweb","root","maolidiblog");
	$sql="select * from userdate where logname='$name'";
	$query=mysql_query($sql,$con);
	if($query){
		echo("用户名不能重复");
		exit();
	}


	$sql="insert into userdate (logname,password,email) values ('$name','$password','$email')";
	$query=mysql_query($sql,$con);	
	mysql_close($con);
	if(!$query){
		echo("err");
	}else{
		echo("ok");
	}

?>