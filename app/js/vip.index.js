/**
* @main
*/
seajs.use([
		"jdf/1.0.0/unit/globalInit/1.0.0/globalInit",
		//"jdf/1.0.0/unit/lib/1.0.0/lib",//新lib
		"jdf/1.0.0/unit/login/1.0.0/login.js",//新登录
		"jdf/1.0.0/ui/switchable/1.0.0/switchable",//左右滚动
		//"lib/js/2012/lib-v1.js",//旧lib
		"/app/js/vip.menu.js",
		"jdf/1.0.0/ui/ceilinglamp/1.0.0/ceilinglamp",
		"jdf/1.0.0/ui/lazyload/1.0.0/lazyload"
	], function (globalInit,login,switchable,menu,ceilinglamp,lazyload){
		$(function(){
			var setTimer = function(isBreak, func) {
				var timer = setInterval(function() {
					isBreak() && (clearInterval(timer), func());
				}, 500);

			};
			$('body').lazyload({
				type:'img',
				source:'data-lazyload'
			});
			var ad = $('.tab-con .da-l:first');
			
			$('#gb-tab').switchable({
				'event':'click',
				'navItem':'tab-item',
				'navSelectedClass':'curr',
				'mainClass':'tab-con',
				'callback':function(i){
					$('#gb-tab').addClass('ui-switchable-tab');
					setTimer(function () {
						return typeof vipRefresh == "function";
					}, function () {
						vipRefresh();
					});
				
					$(this.main[i]).lazyload({
						type:'img',
						source:'data-src'
					});
					// $('img',this.main[i]).each(function(){
		   			//		var _src = $(this).attr('data-src');
					// 	// $(this).addClass('err-product').attr('src',_src?_src:$(this).attr('data-lazyload'));
					// 	$(this).addClass('err-product').attr('src',_src);
					// });

					$('#gb-tab .ui-switchable-panel-selected .floor-m:last').before(ad);
					if(i==1){
						for(var j=1;j<4;j++){
							var _url = $(this.nav[i]).attr('data-ajaxf'+j);
							if(_url){
								var img = new Image();
								var src = _url + "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random();
								img.setAttribute('src', src);
							}
						}
					}
				}
			});
			$('#gb-nav .tab-item').bind('click',function(){
				var _top = $('#gb-tab').offset().top;
				if($(document).scrollTop()>_top){
					$(document).scrollTop(_top);
				}
			});
			$('#gb-nav').ceilinglamp({
				zIndex:10,
				top:0
			});

			$('#box2 a[data-ajax]').bind('click',function(){
				var _url = $(this).attr('data-ajax');
				if(_url){
					var img = new Image();
					var src = _url + "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer) + "&random=" + Math.random();
					img.setAttribute('src', src);
				}
			});

		});
});