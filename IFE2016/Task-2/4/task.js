/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {},
	aqi_city=document.getElementById("aqi-city-input"),
	aqi_value=document.getElementById("aqi-value-input");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
//trim()去除空格
	var city=aqi_city.value.trim();
	var value=aqi_value.value.trim();
//开始判断输入格式,若为空则提醒并获取焦点
	if(city.length==0){
		alert("城市名不能为空");
		aqi_city.focus();
		return
	}else if(!city.match(/^[A-Za-z\u4e00-\u9fa5]+$/)){
		alert("城市名必须为中英文");
		aqi_city.focus();
		return
	}

	if(value.length==0){
		alert("空气质量指数不能为空");
		aqi_value.focus();
		return
	}else if(!value.match(/^\+?[0-9]+$/)){
		alert("空气质量指数必须为整数");
		aqi_value.focus();
		return
	}
	aqiData[city]=value;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var text="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for(var i in aqiData){
		text+="<tr><td>"+i+"</td><td>"+aqiData[i]+"</td><td><button onclick=delBtnHandle(this)>删除</botton></td></tr>";
	}
	document.getElementById("aqi-table").innerHTML=i?text:"";
}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();

}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(obj) {
  // 根据点击的按钮找到父元素的父元素tr，并获取tr下的第一个子元素td里面的city
  var city_1=obj.parentNode.parentNode.getElementsByTagName('td')[0].innerHTML;
  // 再根据获取到的city删除aqiData里的相关数据
  delete aqiData[city_1];

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").onclick=function(){addBtnHandle()}
 
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  
}

init();
