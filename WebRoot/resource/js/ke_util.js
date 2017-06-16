//获取dom对象--byid
function dom(id){
	return document.getElementById(id);
};

//随机颜色,op透明度，不写就1
function randDomColor(op){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgba("+r+","+g+","+b+","+(op||1)+")";
};

//给元素添加样式列表 
function css(dom,opts){
	for(var key in opts){
		var val = opts[key];
		if(typeof val=="number"){
		val+="px";
	}
	dom["style"][key] = val;
	}
};
