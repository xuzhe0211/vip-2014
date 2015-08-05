seajs.config({  
	alias: {
		'login':'jdf/1.0.0/unit/login/1.0.0/login.js',
		'switchable':'jdf/1.0.0/ui/switchable/1.0.0/switchable'
	}  
}); 

define(function(require, exports){
	 seajs.use(['login', 'switchable'],function(login, switchable){
		/**
		 * [jdUser Class 用户登陆状态]
		 */
		var jdUser = {};

		// 初始化
		jdUser.init = function(){

			this.isLogin = false;
			this.checkLogin();

		};

		// 检查登陆
		jdUser.checkLogin = function(){

			var _this = this;

			$.getJSON('http://passport.jd.com/loginservice.aspx?method=Login&callback=?', function(r) {

				if ( r.Identity.IsAuthenticated ) {
					_this.isLogin = true;
				}else{
					_this.isLogin = false;
				}
			});

		}

		// 登陆
		jdUser.login = function(fuc, isRefresh){

			var _this = this;
			var cb = fuc;

			if (cb === undefined) {
				cb = function(){};
			};

			// 登陆弹框
			login({
				modal: true,//false跳转,true显示登录注册弹层
				complete: function() {

					_this.isLogin = true;
					
					//isRefresh 判断登录成功后是否刷新页面，默认不刷新
					isRefresh && !+$('#content').attr('userlogin') ? location.reload() : cb();
				}
			});

		};

		// 用户登陆状态 初始化
		jdUser.init();
		
		window.jdUser = jdUser;


 		function menuUI(){
 			var _step1 = (pageConfig.wideVersion&&pageConfig.compatible)?5:3;
 			var _step2 = (pageConfig.wideVersion&&pageConfig.compatible)?3:2;
 			
 			if($('#my-power .li-item').length > _step1){
 				$('#my-power')
 				.switchable({
 					'type':'slider',
 					'hasPage':true,
 					//'navItem':'num-ctrl-item',
 					'mainClass':'li-item',
 					'contentClass':'power-con',
 					'bodyClass':'my-power',
 					'prevClass':'arr-l',
 					'nextClass':'arr-r',
 					'speed':600,
 					'autoLock':true,
 					//'autoPlay':true,
 					'navSelectedClass':'curr',
 					"step": _step1,
 					"visible": _step1,
 					'callback':function(a,b){
 					}
 				});
 				$('#my-power')
 				.bind('mouseenter',function(){
 					$(this).addClass('hover');
 				})
 				.bind('mouseleave',function(){
 					$(this).removeClass('hover');
 				});
 			}

 			if($('#my-gift .li-item').length > _step2){
 				$('#my-gift')
 				.switchable({
 					'type':'slider',
 					'hasPage':true,
 					//'navItem':'num-ctrl-item',
 					'mainClass':'li-item',
 					'contentClass':'gift-con',
 					'bodyClass':'my-gift',
 					'prevClass':'arr-l',
 					'nextClass':'arr-r',
 					'speed':600,
 					'autoLock':true,
 					//'autoPlay':true,
 					'navSelectedClass':'curr',
 					"step": _step2,
 					"visible": _step2,
 					'callback':function(a,b){
 					}
 				});
 				$('#my-gift')
 				.bind('mouseenter',function(){
 					$(this).addClass('hover on');
 				})
 				.bind('mouseleave',function(){
 					$(this).removeClass('hover on');
 				});
 			}else{
 				$('#my-gift')
 				.bind('mouseenter',function(){
 					$(this).addClass('on');
 				})
 				.bind('mouseleave',function(){
 					$(this).removeClass('on');
 				});
 			}

 			if($('#my-medal .li-item').length > _step1){
 				$('#my-medal')
 				.switchable({
 					'type':'slider',
 					'hasPage':true,
 					//'navItem':'num-ctrl-item',
 					'mainClass':'li-item',
 					'contentClass':'medal-con',
 					'bodyClass':'my-medal',
 					'prevClass':'arr-l',
 					'nextClass':'arr-r',
 					'speed':600,
 					'autoLock':true,
 					//'autoPlay':true,
 					'navSelectedClass':'curr',
 					"step": _step1,
 					"visible": _step1,
 					'callback':function(a,b){
 					}
 				});
 				$('#my-medal')
 				.bind('mouseenter',function(){
 					$(this).addClass('hover');
 				})
 				.bind('mouseleave',function(){
 					$(this).removeClass('hover');
 				});
 			}

 			$('#user-info a[ftit]')
 			.bind('mouseover',function(){
 				var $item = $(this).parents('.cols-item'),
 				$jTip = $('.menu-tip',$item),
 				_t=100, 
 				_ol = 5,
 				_ul = $(this).parent().parent().position().left,
 				_l = $(this).position().left+14+_ul;
 				if($jTip.length){
 					$jTip.css({'top':_t,'left':_ol}).find('.tip-arr').css('left',_l).next().next().text($(this).attr('ftit'));
 					clearTimeout(_timer);
 				}else{
 					$('<div style="top:'+_t+'px;left:'+_ol+'px" class="menu-tip"><div class="tip-box"><div class="tip-arr" style="left:'+_l+'px"></div><div class="tip-close" onClick="$(\'.menu-tip\').remove()">×</div><div class="tip-cont">'+$(this).attr('ftit')+'</div></div></div>').appendTo($item);
 				}
 			})
 			.bind('mouseout',function(){
 				var $jTip = $('.menu-tip',$(this).parents('.cols-item'));
 				_timer = setTimeout(function(){
 					$jTip.remove();
 				},360);
 			});

 			//会员礼包-s
 			
 			$('.gift-con .li-item a').click(function() {
 				var src = $('img',this).attr('opensrc'),
 					rid = $(this).attr('rid'),
					$fid = $('#'+$(this).attr('fid')),
					gtype = $(this).attr('gtype');
 				$('img',this).attr('src', src);
 				//tofix:处理ie6下新地址会被abort的问题
 				$.ajax({
 					type: "GET",
 					url:"http://vip.jd.com/index.php?mod=Vip.MemberGift&action=getVipClubGiftPresentList",
 					data:{'rid':rid},
 					dataType: "jsonp",
 					success:function(r){
 						if(r.success){
 							var _html = '';
 							var len = (r.result.list).length;
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
 									    	+((len>3)?'<div class="op-btns vip-prev" id="prev"></div>':'')
 									    	+((len>3)?'<div class="op-btns vip-next" id="next"></div>':'')
 									        // +'<div class="op-btns vip-prev" id="prev"></div>'
 									        // +'<div class="op-btns vip-next" id="next"></div>'
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
 			});
 			//会员礼包-e
 		}
 		window.menuUI = menuUI;

		$(function() {	
 		
			if($('#content').attr('userlogin')==0){//未登陆

	 			$('#noLogin')
	 			.bind('click',function(){
	 				jdUser.login('', true);
	 			}).removeAttr('href');
	 			menuUI();
	 			
	 		}else{//已登陆
		 		$.ajax({ 
		 			'url': "http://vip.jd.com/index.php?mod=Vip.MemberIndex&action=getUserInfo", 
		 			'type':"get",
		 			'dataType':"json",
		 			'success': function(r){
		 				//console.log(r);
		 				var res = r.result;
		 				//$('#user-info .u-name').html
		 				try{
			 				var str='<div clstag="homepage|keycount|julebu|touxiang" class="u-pic">\
										<img alt="<%=userInfo.nickname%>" src="<%=userInfo.imgUrl%>">\
										<a target="_blank" href="http://me.jd.com/<%=userInfo.uid%>.html" class="mask"></a>\
										<div style="opacity: 0.7; display: none;" class="face-link-box"></div>\
										<a style="display: none;" href="#none" class="face-link">修改头像</a>\
									</div>\
									<div class="info-m">\
										<div clstag="homepage|keycount|julebu|uid" class="u-name"><a target="_blank" href="http://me.jd.com/<%=userInfo.uid%>.html"><%=userInfo.nickname%></a></div>\
										<div clstag="homepage|keycount|julebu|huiyuanjibie" class="u-level">\
											<div class="rank r<%=userInfo.userLevelInfo.sort%> ftx-03"><a target="_blank" href="http://usergrade.jd.com/user/grade"><s></s><%=userInfo.userLevelInfo.topVal%></a></div>\
										</div>\
										<div class="u-growth"><%=userInfo.userJoyInfo.str%>\
										</div>\
									</div>\
									<ul class="acco-info">\
										<li class="fore1">\
											<div class="mt">我的京豆</div>\
											<div class="mc"><a clstag="homepage|keycount|julebu|jingdou" target="_blank" href="http://bean.jd.com/myJingBean/list"><%=userInfo.userJingBeanBalance%></a></div>\
											<div class="mb"><a class="alink" href="http://vip.jd.com/help_beansIntroduction.html" target="_blank">京豆有效期一年</a></div>\
											<%if (userInfo.userExpireJingBeans>0&&IshowBeans>0){%>\
												<div id="overdue-bean" class="gift-tip">\
													<div class="tip-box">\
														<div style="left:19px" class="tip-arr"></div>\
														<div class="tip-close">×</div>\
														<div class="tip-cont">\
															<div class="tip-txt" style="text-align: left;">\
																您有<%=userInfo.userExpireJingBeans%>京豆将在'+(new Date()).getFullYear()+'年12月31日24时过期，请您尽快消费哦！\
															</div>\
														</div>\
													</div>\
												</div>\
											<%}%>\
										</li>\
										<li class="fore2">\
											<div class="mt">优惠券</div>\
											<div class="mc"><a clstag="homepage|keycount|julebu|youhuiquan" target="_blank" href="http://quan.jd.com/user_quan.action"><%=userInfo.couponCount%></a></div>\
										</li>\
									</ul>\
									<div class="cols-list">\
										<div class="cols-item fore1" id="my-power">\
											<div class="mt"><a href="http://vip.jd.com/help_privilegeIntroduction.html" target="_blank">我的特权</a></div>\
											<%if (permissionStr){%>\
												<div clstag="homepage|keycount|julebu|wodetequan" class="my-power mc">\
													<ul class="power-con">\
														<%=permissionStr%>\
													</ul>\
												</div>\
												<div class="arr-l">&nbsp;</div>\
												<div class="arr-r">&nbsp;</div>\
											<%}else{%>\
												<div class="no-date">会员级别越高，享受的特权就越多~</div>\
											<%}%>\
										</div>\
										<div mobileflag="<%=userInfo.mobileFlag%>" class="cols-item fore2" id="my-gift">\
											<div class="mt"><a href="http://vip.jd.com/mygift" target="_blank">我的礼包</a></div>\
											<%if (userInfo.giftOfUser.length){%>\
												<div class="my-gift mc">\
													<ul class="gift-con">\
														<%for(var i = 0;i<userInfo.giftOfUser.length;i++){%>\
														<li class="li-item">\
															<a title="<%=userInfo.giftOfUser[i].name%>" gtype="<%=userInfo.giftOfUser[i].type%>" fid="pack_<%=userInfo.giftOfUser[i].id%>" rid="<%=userInfo.giftOfUser[i].id%>" href="javascript:;"><img width="66" height="66" src="http://img12.360buyimg.com/vip/<%=userInfo.giftOfUser[i].defaultImgUrl%>" alt="" opensrc="http://img12.360buyimg.com/vip/<%=userInfo.giftOfUser[i].openImgUrl%>"></a>\
															<div class="gift-name"><%=userInfo.giftOfUser[i].name%></div>\
															<div class="hide" id="pack_<%=userInfo.giftOfUser[i].id%>"><%=userInfo.giftOfUser[i].content%></div>\
														</li>\
														<%}%>\
													</ul>\
												</div>\
												<div class="arr-l">&nbsp;</div>\
												<div class="arr-r">&nbsp;</div>\
												<div class="gift-lihua"></div>\
											<%}else{%>\
												<div class="no-date">好礼不在，尚需等待</div>\
											<%}%>\
											<%if (IshowBrithdayWindow>0){%>\
												<div class="gift-tip">\
													<div class="tip-box">\
														<div style="left:19px" class="tip-arr"></div>\
														<div id="gift-x" class="tip-close">×</div>\
														<div class="tip-cont">\
															<%if (IshowBrithdayWindow>1){%>\
																<div class="tip-txt">\
																	填写/确认生日信息且验证手机后，您生日时将会收到生日惊喜。（确认生日后记得要点击“提交”按钮哦）\
																</div>\
																<div class="btn-con">\
																	<a target="_blank" class="btn-9 mr10" href="http://i.jd.com/user/info">去确认我的生日</a>\
																	<a target="_blank" class="btn-9" href="http://safe.jd.com/validate/verifyMobile">去验证手机</a>\
																</div>\
															<%}else{%>\
																<div class="tip-txt">\
																	填写/确认生日信息后，您生日时将会收到生日惊喜。（确认生日后记得要点击“提交”按钮哦）\
																</div>\
																<div class="btn-con">\
																	<a target="_blank" class="btn-9" href="http://i.jd.com/user/info">去确认我的生日</a>\
																</div>\
															<%}%>\
														</div>\
													</div>\
												</div>\
											<%}else{%>\
											<%}%>\
										</div>\
										<div class="cols-item fore3" id="my-medal">\
											<div class="mt"><a href="http://vip.jd.com/madal.html" target="_blank">我的勋章</a></div>\
											<%if (userInfo.medalList.level){%>\
												<div clstag="homepage|keycount|julebu|xunzhang" class="my-medal mc">\
													<ul class="medal-con">\
														<%for(var i = 0;i<userInfo.medalList.level.length;i++){%>\
															<li class="li-item"><a target="_blank" href="http://vip.jd.com/madal.html?show=<%=userInfo.medalList.level[i]["class"]%>" ftit="<%=userInfo.medalList.level[i].text%>" xzid="<%=userInfo.medalList.level[i]["class"]%>" class="<%=userInfo.medalList.level[i]["class"]%>"><s></s></a></li>\
														<%}%>\
													</ul>\
												</div>\
												<div class="arr-l">&nbsp;</div>\
												<div class="arr-r">&nbsp;</div>\
											<%}else{%>\
												<div class="no-date">未获勋章，尚需努力</div>\
											<%}%>\
										</div>\
									</div>'; 
							$('#user-info').html($.tpl(str, res));
							// <div class="no-date"><a href="http://vip.jd.com/madal.html" target="_blank">未获勋章，尚需努力</a></div>\

							$('#gift-x').bind('click',function(){
								$('.gift-tip').remove();
								$.ajax({
									'url':"http://vip.jd.com/index.php?mod=Vip.MemberIndex&action=closeWindowBrithdayWindow&closedate=1 ",//正式
									'type':'get',
									'dataType':'jsonp',
									'success':function(b){}
								})
							});
							$('#overdue-bean .tip-close').bind('click',function(){
								$('#overdue-bean').remove();
								$.ajax({
									'url':"http://vip.jd.com/index.php?mod=Vip.MemberIndex&action=closeWindowWithType&closeType=3",//正式
									'type':'get',
									'dataType':'jsonp',
									'success':function(b){}
								})
							});
							//白条
							$.ajax({	
								'url':"http://baitiao.jd.com/account/query",//正式
								//'url':"http://credit.user.pay.jd.com/account/query",//测试
								'type':'get',
								'dataType':'jsonp',
								'contentType':'application/x-www-form-urlencoded;charset=utf-8',
								'success':function(b){
									if((b.status==2||b.status==3)){
										$('<li class="li-item"><a ftit="京东白条勋章" xzid="ibaitiao" class="ibaitiao" target="_blank" href="http://vip.jd.com/madal.html"><s></s></a></li>')
										.appendTo('#my-medal .medal-con');

										$('<li><a href="#none" class="medal-icon" id="baitiao" xzid="ibaitiao"></a></li>').appendTo('#madal_list');
										$('#baitiao').bind('click',function(){
											$('body').dialog({
										        type: "text",/*也可以是text,html,image,ajax,json*/
										        width: 610,
										        height: 220,
										        source: $('#ibaitiao').html(),
										        title: "勋章详情",
										        _close_val: "×",
										        _titleOn: true
										    });
										});
									};
									menuUI();
								},
								'error':function(){
									menuUI();
								}
							});
							
						}
						catch(e){
							alert('用户信息接口返回错误');
							alert(e);
						}
		 		      },
		 		    'error':function(r){
		 		    }
		 		});
	 		}

		})	
	});
	 
	 
	 //回到顶部
	 
	function Toppanel() {};
	
	Toppanel.prototype = {
		constructor : Toppanel,
		init : function() {
			if(!$("#toppanel").length){
			    $(document.body).prepend("<div class=\"w ld\" id=\"toppanel\"></div>");
			}
			$("#toppanel").append("<div id=\"sidepanel\" class=\"hide\"></div>");
			this.obj=$("#sidepanel");
		},
		scroll : function(){
		    var _this=this;
		    $(window).bind("scroll",function(){
		        var top=document.body.scrollTop||document.documentElement.scrollTop;
		        if(top==0){
		            _this.obj.hide()
		        }else{
		            _this.obj.show()
		        }
		    });
		    _this.initCss();
		    $(window).bind("resize",function(){
		        _this.initCss();
		    });
		},
		initCss : function(){
		    var css,
		    	width=$('#toppanel').width(),
		    	cwidth = document.documentElement.clientWidth;
		    if(cwidth>1024){
		    	if($.browser.msie&&$.browser.version<=6){
		    	    css={"right":"-26px"}
		    	}else{
		    	    css={
		    	        "right":(cwidth-width)/2-26+"px"
		    	    }
		    	}
		    }else{
		    	css={"right":"0"}
		    }
	        
	        this.obj.css(css)

		},
		addCss : function(a){
		    this.obj.css(a)
		},
		addItem : function(a){
		    this.obj.append(a)
		},
		setTop : function(){
		    this.addItem("<a href='#' class='gotop' title='使用快捷键T也可返回顶部哦！'><b></b>返回顶部</a>");
		}
	};
	
	var sidePanle = new Toppanel;
	sidePanle.init();
	sidePanle.addItem("<a class='research' target='_blank' href='http://surveys.jd.com/index.php?r=survey/index/sid/422183/lang/zh-Hans'><b></b>调查问卷</a><a title='使用快捷键T也可返回顶部哦！' class='gotop' href='#'><b></b>返回顶部</a>")
    sidePanle.scroll();
})