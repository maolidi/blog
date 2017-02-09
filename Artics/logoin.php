<?php
	$name=$_POST["username"];
	$password=$_POST["password"];
	if(empty($name) || empty($password)){
		echo("没有获取到用户名和密码");
		exit();
	}
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
	$result=mysql_fetch_array(mysql_query($sql,$con));
	mysql_close($con);
	if(!$result || $result[2]!=$password){
		echo("用户名或密码错误");
	}else{
		echo($result[3]);
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

	echo("<div style='margin:0 auto;margin-top:100px;text-align:center;'>功能完善中，感谢你的注册！<br>你注册的用户名:".$name."<br>你注册的密码:".$password."<br>邮箱:".$email."<br>你要提交的事件：".$sel."</div>");
*/
?>