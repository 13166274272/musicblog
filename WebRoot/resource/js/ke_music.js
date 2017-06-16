

var tzBar = {
	arr:[],//定义一个容器，装载每一个bar对象
	mw:11,/*每个一个元素的宽度*/
	init:function(){
		//获取盒子对象
		var boxDom = dom("wrapbox");
		//获取盒子对象宽度
		var bwidth = boxDom.clientWidth;
		var cells = Math.floor(bwidth / this.mw);
		boxDom.style.width = (cells+1) * this.mw+"px";
		for(var i=0;i<=cells;i++){
			var spanDom = document.createElement("span");
			spanDom["className"] = "items";
			css(spanDom,{left:i*tzBar.mw,width:tzBar.mw-1});
			boxDom.appendChild(spanDom);
			tzBar.arr.push(spanDom);
		}
	}
};


var KeKeMusic = {
	mark:false,
	
	init:function(){//ie11以上的浏览器才支持 
		//1:音频上下文===html5+ajax+audioContext   html5+audio+audioContext  
		window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
		/*动画执行的兼容写法*/
		window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
		//2:初始化音轨对象
		var audioContext = new window.AudioContext();
		return audioContext;
	},
	
	parse:function(audioContext,audioDom,callback){
		try{
			//拿到播放器去解析你音乐文件
			var audioBufferSouceNode = audioContext.createMediaElementSource(audioDom);
			//创建解析对象
			var analyser = audioContext.createAnalyser();
			//将source与分析器连接
			audioBufferSouceNode.connect(analyser); 
			//将分析器与destination连接，这样才能形成到达扬声器的通路
			analyser.connect(audioContext.destination);
			//调用解析音频的方法
			KeKeMusic.data(analyser,callback);
		}catch(e){
			
		}
	},
	
	data:function(analyser,callback){
		if(KeKeMusic.mark){
			//讲音频转换一个数组
			var array = new Uint8Array(analyser.frequencyBinCount);
			analyser.getByteFrequencyData(array);
			//通过回调函数返回
			if(callback)callback(array);
			requestAnimationFrame(function(){
			 	KeKeMusic.data(analyser,callback);
			});
		}
	}
};

window.onload = function(){
	tzBar.init();
	//点击音乐播放后触发函数
	var audioDom = dom("audio");
	var audioContext = KeKeMusic.init();
	audioDom.onplay = function(){
		KeKeMusic.mark = true;
		//获取音轨解析对象
		var len = tzBar.arr.length;
		KeKeMusic.parse(audioContext,audioDom,function(dataArr){//1024
			for(var i=0;i<len;i++){
				tzBar.arr[i].style.height = dataArr[i]+"px";
				tzBar.arr[i].style.background = "linear-gradient("+randDomColor()+"5%,green 60%,#fff 100%)";
			}
		});
	};
	
};