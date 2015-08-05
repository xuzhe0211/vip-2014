/**
* @main
*/
seajs.use([
		"jdf/1.0.0/unit/globalInit/1.0.0/globalInit",
		"jdf/1.0.0/unit/login/1.0.0/login.js",//新登录
		"jdf/1.0.0/ui/switchable/1.0.0/switchable",//左右滚动
		"/app/js/vip.menu.js",
		"jdf/1.0.0/ui/lazyload/1.0.0/lazyload",
		"jdf/1.0.0/ui/tips/1.0.0/tips"
	], function (globalInit,login,switchable,menu,lazyload,tips){
		$(function(){
			$('body').lazyload({
				type:'img',
				source:'data-lazyload'
			});

			//礼包轮播
			var istep = 4;
			$('.gift-list').switchable({
				'type':'slider',
				'mainClass':'ui-switchable-panel',
				'contentClass':'ui-switchable-panel-main',
				'bodyClass':'ui-switchable-panel-body',
				'prevClass':'prev',
				'nextClass':'next',
				'pagCancelClass':'disabled',
				'seamlessLoop':false,
				'speed':600,
				'step':istep,
				'visible':istep,
				'hasPage':true,
				'autoLock':true,
				'width':219,
				'callback': function(i) {
					// console.log(i);
					var _$tip = this.el.next('.wrap-gift-tip');
					var _$msg = $('.gift-msg',this.main[i]);

					if(!this.el.next('.wrap-gift-tip').length){
						_$tip = $('<div class="wrap-gift-tip"></div>').insertAfter(this.el);
					}
					
					if(_$msg.length){
						_$tip.show().html('<div class="gift-tip"><div class="tip-box"><div class="tip-arr tip-arr-0"></div><div class="tip-cont"><div class="tip-txt">'+_$msg.html()+'</div></div></div></div>');
					}else{
						_$tip.hide();
					}
	            }
			});

			$('.gift-list .ui-switchable-panel').hover(function(){
				var _$msg = $('.gift-msg',this);
				var _$tip = $(this).parents('.gift-list').next('.wrap-gift-tip');
				$(this).addClass("hover");
				if(_$msg.length){
					_$tip.show().html('<div class="gift-tip"><div class="tip-box"><div class="tip-arr tip-arr-'+$(this).parent().find('.ui-switchable-panel').index(this)%istep+'"></div><div class="tip-cont"><div class="tip-txt">'+_$msg.html()+'</div></div></div></div>');
				}else{
					_$tip.hide();
				}
			},function(){
				$(this).removeClass("hover");
			})
			//领取
			$('.btn-receive-login').bind('click',function(){
				jdUser.login(function(){}, true);
			})
			$('.gift-list .ui-switchable-panel .btn-receive').bind("click",function(){
				if($(this).parent('li').hasClass('ui-switchable-panel-disable')) return false;

				var src = $(this).parents('.ui-switchable-panel').find('img').attr('opensrc'),
					rid = $(this).parents('.ui-switchable-panel').attr('rid'),
					$fid = $('#'+$(this).parents('.ui-switchable-panel').attr('fid')),
					gtype = $(this).parents('.ui-switchable-panel').attr('gtype');
 				$(this).parents('.ui-switchable-panel').find('img').attr('src', src);

				$.ajax({
 					type: "GET",
 					url:"http://vip.jd.com/index.php?mod=Vip.MemberGift&action=getVipClubGiftPresentList",
 					data:{'rid':rid},
 					dataType: "jsonp",
 					success:function(r){
 						if(r.success){
 							var _html = '';
 							$.each(r.result.list,function(j){
 								if(j>2){
 									_html+='<li class="li-item"><div class="p-img"><a target="_blank" href="'+((this.type==1)?this.link:"#none")+'"><img width="160" height="160" alt="'+this.name+'"  class="err-product" src="http://misc.360buyimg.com/lib/img/e/blank.gif" data-src="http://img30.360buyimg.com/n2/'+this.imgUrl+'" data-img="1" title="'+this.name+'"></a></div><div class="p-name"><a target="_blank" href="'+((this.type==1)?this.link:"#none")+'">'+this.name+'</a></div></li>';
 								}else{
 									_html+='<li class="li-item"><div class="p-img"><a target="_blank" href="'+((this.type==1)?this.link:"#none")+'"><img width="160" height="160" alt="'+this.name+'"  src="http://img30.360buyimg.com/n2/'+this.imgUrl+'" data-img="1" title="'+this.name+'"></a></div><div class="p-name"><a target="_blank" href="'+((this.type==1)?this.link:"#none")+'">'+this.name+'</a></div></li>';
 								}

 							});
 							$.closeDialog()
 							$('body').dialog({
 							    type: "text",/*也可以是text,html,image,ajax,json*/
 							    width: 636,
 								height: 304,
 							    source: '<div class="item">'
 									    +'<div class="tit">'+$fid.html()+'</div>'
 									    +'<div id="gifts-slider" class="list-h gift-thickbox">'
 									        +'<div class="op-btns vip-prev" id="prev"></div>'
 									        +'<div class="op-btns vip-next" id="next"></div>'
 									        +'<div class="list-wrap" id="gift-list">'
 									            +'<ul id="gift-d-con" class="gift-d-con clearfix">'+_html+'</ul>'
 									        +'</div>'
 									    +'</div>'
 									    +(($('#my-gift').attr('mobileflag')==0&&gtype==2)?('<div class="op-btns ac"><a target="_blank" class="alink" href="http://safe.jd.com/validate/verifyMobile">验证手机</a>后即可领取！</div>'):('<div class="op-btns ac"><a rid="'+rid+'" id="freeGetBtn" href="#none" class="btn-3">免费领取</a></div>'))
 									+'</div>',
 							    title: "领取礼包",
 							    _close_val: "×",
 							    _titleOn: true, 
 							    onReady:function(){
		    					    $('#gifts-slider').switchable({
		    			 				'type':'slider',
		    			 				'hasPage':true,
		    			 				//'navItem':'num-ctrl-item',
		    			 				'mainClass':'li-item',
		    			 				'contentClass':'gift-d-con',
		    			 				'bodyClass':'list-wrap',
		    			 				'prevClass':'vip-prev',
		    			 				'nextClass':'vip-next',
		    			 				'speed':600,
		    			 				'autoLock':true,
		    			 				//'autoPlay':true,
		    			 				'navSelectedClass':'curr',
		    			 				"step": 3,
		    			 				"visible": 3,
		    	 						'callback':function(i){
		    	 							for(var j = 0,l = this.main.length;j<3&&(i+j)<l;j++){
	 											$('img',this.main[i+j]).each(function(){
	 								                var _src = $(this).attr('data-src');
	 												$(this).addClass('err-product').attr('src',_src?_src:$(this).attr('data-lazyload'));
	 											});
		    	 							}
		    	 						}
		    			 			});
		    			 			$('#freeGetBtn').bind('click',function(){
		    			 				$.ajax({
		    			 					type: "GET",
		    			 					url: "http://vip.jd.com/index.php?mod=Vip.MemberGift&action=getGiftWard",
		    			 					data:{'rid':$(this).attr('rid')},
		    			 					dataType: "jsonp",
		    			 					success:function(r){
		    			 						$.closeDialog()
		    			 						if(r.success){
		    			 							var _lis = {
		    			 								'1':"<li>去<a href='http://quan.jd.com/user_quan.action'>我的京东>优惠券</a>查看收到的优惠券</li>",
		    			 								'2':"<li>去<a href='http://bean.jd.com/myJingBean/list'>我的京东>我的京豆</a>查看收到的京豆</li>",
		    			 								'3':"<li>去<a href='http://quan.jd.com/user_quan.action'>我的京东>优惠券</a>查看收到的优惠券</li><li>去<a href='http://bean.jd.com/myJingBean/list'>我的京东>我的京豆</a>查看收到的京豆</li>"
		    			 							};
		    			 							$('body').dialog({
		    			 							    type: "text",/*也可以是text,html,image,ajax,json*/
		    			 							    width: 480,
		    			 							    height: 160,
		    			 							    source: "<div class='tip-box succ-box'><h3 class='font-green'>领取成功</h3><div class='box-cont'><ul>"+_lis[r.result.selectType]+"</ul></div></div>",
		    			 							    title: "领取礼包",
		    			 							    _close_val: "×",
		    			 							    _titleOn: true
		    			 							});
		    			 							$('a[rid='+rid+']')
		    			 							.unbind('click')
		    			 							.parent().addClass('disabled');
		    			 							$('.ui-dialog .ui-dialog-close').click(function(){
															setTimeout(function(){
																location.reload()
															},1000)
													})
		    			 						}else{
		    			 							if(r.result.status==1||r.result.status==2){//等待发放,已经发放
		    			 								$('body').dialog({
		    			 								    type: "text",/*也可以是text,html,image,ajax,json*/
		    			 								    width: 420,
		    			 								    height: 120,
		    			 								    source: "<div class='tip-box warn-box'><h3 class='font-yellow'>领取失败</h3><div class='box-cont'><p>您已经领取过礼包了~ 不要贪心哦~</p></div></div>",
		    			 								    title: "领取礼包",
		    			 								    _close_val: "×",
		    			 								    _titleOn: true
		    			 								});
		    			 							}else{// 其它错误
		    			 								$('body').dialog({
		    			 								    type: "text",/*也可以是text,html,image,ajax,json*/
		    			 								    width: 420,
		    			 								    height: 120,
		    			 								    source: "<div class='tip-box warn-box'><h3 class='font-yellow'>领取失败</h3><div class='box-cont'><p>啊呀~您来晚了一步，该礼包已经领完了~下次一定要早点来哦~</p></div></div>",
		    			 								    title: "领取礼包",
		    			 								    _close_val: "×",
		    			 								    _titleOn: true
		    			 								});
		    			 							}
		    			 						}
		    			 					}
		    			 				})
		    			 			});

 							    }
 							});
 						}else{
 							
 						}
 					}
 				});
				return false;
			})

		});
});