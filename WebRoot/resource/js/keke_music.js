/*
 1：播放暂停
 2：时间的显示
 3：进度条的显示
 4：音乐的切换（上一首和下一首）
 5：静音
 6：随机播放，顺序播放，单曲循环
 7：歌词
 
 * */
//播放对象
function dom(id){
	return document.getElementById(id);
};

//播放器
var keAudio = {
	audioDom:null,
	init:function(callback){//播放器初始化
		this.audioDom = dom("audio");
		this.time(callback);
	},
	
	//播放
	play:function(){
		this.audioDom.play();
	},
	
	//暂停
	stop:function(){
		this.audioDom.pause();
	},
	
	time:function(callback){//时间
		var $this = this;
		//加载完毕的函数 
		this.audioDom.addEventListener("canplaythrough",function(){
			if(callback)callback.call(this,true,$this.format(this.duration));
		});
		//播放中的函数 timeupdate
		this.audioDom.addEventListener("timeupdate",function(){
			var ctime = this.currentTime;
			var percent =Math.floor((ctime / this.duration) * 100);
			if(callback)callback.call(this,false,$this.format(ctime),percent);
		});
	},
	
	format:function(time){//日期格式化
		var m=Math.floor(time/60);
		var s =Math.floor(time%60);
		if(m<10)m="0"+m;
		if(s<10)s="0"+s;
		return m+":"+s;
	},
	
	mute:function(){//静音
		
	},
	
	next:function(){//下一首
		
	},
	
	prev:function(){//上一首
		
	},
	
	randomMusic:function(){//随机播放
		
	},
	
	loadLrc:function(){//加载歌词
		
	}
};