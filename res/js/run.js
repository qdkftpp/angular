(function($) {
	
	$.ajax({
		url: 'http://wxpay.medlive.cn/api.php?c=user&action=getSignPackage&domain=test',
		dataType: 'jsonp',
		success: function(o) {
			console.log(o.data);
			var jsApiList = [
				//所有要调用的 API 都要加到这个列表中
				"onMenuShareTimeline",//分享到朋友圈接口
				"onMenuShareAppMessage",//分享给朋友接口
				"onMenuShareQQ",//分享到qq接口
				//"onMenuShareWeibo",//分享到腾讯微博
				"onMenuShareQZone"//分享到QQ空间
			                 ];
			wx.config({
				debug: false,
				appId: o.data.appId,
				timestamp: o.data.timestamp,
				nonceStr: o.data.nonceStr,
				signature: o.data.signature,
				rawString: o.data.rawString,
				jsApiList: jsApiList
			});
			
		    wx.error(function(res){
		    });
		    
		},
		error: function(xhr,e,t) {
			alert(e);
		}
	});
	
	wx.ready(function(){
		var shareconfig = {
			title: '默博士2.0重装上线',
			imgUrl: 'http://drm.medlive.cn/wx_drm/res/images/sharelogo.jpg',
			desc:'为医生提供科研服务的学术平台'
		}
	   //分享到朋友圈
	   wx.onMenuShareTimeline(shareconfig);
	   
	   //分享给朋友
	   wx.onMenuShareAppMessage(shareconfig);
	   
	   //分享到QQ
	   wx.onMenuShareQQ(shareconfig);
	   
	   //分享到QQ空间
	   wx.onMenuShareQZone(shareconfig);
	});
		// 预加载
		function loadSource(hash,callback) {
			var totalLen = imgHash.length,
				doneLen = 0,
				per = 0;
			for (var i = 0; i < imgHash.length; i++) {
				(function() {
					var img = new Image();
					img.src = imgHash[i];
					img.onload = function() {
						doneLen++;
						per = parseInt(doneLen / totalLen * 100);
						$('.loading .per').html(per + '%');
						if (doneLen >= totalLen) callback();
					}
					img.onerror = function() {
						doneLen++;
						per = parseInt(doneLen / totalLen * 100);
						$('.loading .per').html(per + '%');
						if (doneLen >= totalLen) callback();
					}
				})();
			}
		}
	
		loadSource(imgHash,run);
		})(jQuery);
		function run(){
			//loading
			$('.loading').animate({
				opacity: 0
			}, 1000, function() {
				$(this).remove();
			});
			var winW = $('body').width();
			var winH = $('body').height();
			//music	
			music.play();			
			var musicFlag = true;
			$('.music_box').click(function(){
				$('.music_icon').toggleClass("off");
				if(musicFlag){music.pause();}
				else(music.play())
				musicFlag = !musicFlag;
			});
			//s2
			var h=winH-(winW*(145+0.17*750)/750+60);
			$('.s2_con').height(h);
			//s5
			$('.s5_icon').height(winW*745/750);
			//s6
			$('.s6_txt img').width(winW);
			var mySwiper = new Swiper('.swiper-container', {
				slideActiveClass: 'active',
				nextButton: '#arrow',
				direction: 'vertical',
				autoplayDisableOnInteraction:false,
				autoplayStopOnLast:true,
				observer:true,
				observeParents:true,
				initialSlide :0,
				onSlideChangeStart: function(swiper){
					$('.slide1.active .s1_circle').removeClass("fRotate")
				}
			});
		}