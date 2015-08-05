seajs.use(['jdf/1.0.0/ui/tips/1.0.0/tips','jdf/1.0.0/ui/countdown/1.0.0/countdown'],function(tips,countdown){
	if($('#submitExchangeBotton').attr('timestart')){
		var countTime = $('#submitExchangeBotton').attr('timestart').replace(/-/g, "/");
		$('#submitExchangeBotton').countdown({
			//timestamp:1387688659033,
			isTwoDigits:true,
			endTime:countTime,
			onEnd:function() {
				this.el.attr('class','btn-1')
				.attr('cq',this.el.parent().attr('cq'))
				.attr('itid',this.el.parent().attr('itid'))
				.attr('cd',this.el.parent().attr('cd'))
				.removeAttr('timestart').html('兑换');
			},
			onChange:function(leaveTime){
				this.el.html("未开始，倒计时" + leaveTime.day + "天" + leaveTime.hour + "小时" + leaveTime.minute + "分" + leaveTime.second + "秒")
			}
		});
	}


	var TemplateEngine = function(html, options) {
        var re = /<%(.+?)%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}|;))(.*)?/g, code = 'var r=[];\n', cursor = 0, result;
        var add = function(line, js) {
            js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
                    (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
            return add;
        }
        while(match = re.exec(html)) {
            add(html.slice(cursor, match.index))(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(html.substr(cursor, html.length - cursor));
        code = (code + 'return r.join("");').replace(/[\r\t\n]/g, '');
        try { result = new Function(code).apply(options); }
        catch(err) { console && console.error("'" + err.message + "'", " in \n\nCode:\n", code, "\n"); }
        return result;
	}

	var BeanEvent = {
		alert: function(idstr, obj) {
			id = parseInt(idstr);
			if (id == 2) {
				$('body').dialog({
					type: "text",
					/*也可以是text,html,image,ajax,json*/
					width: 400,
					height: 110,
					source: "<div class='tip-box warn-box'><h3 class='font-yellow'>抱歉，该兑换项目不存在。</h3><div class='op-btns'><a href='javascript:;' class='btn-9' onclick='dialogClose()'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
					title: "提示"
				});
			} else if (id == 3) {
				$('body').dialog({
					type: "text",
					/*也可以是text,html,image,ajax,json*/
					width: 400,
					height: 128,
					source: "<div class='tip-box warn-box'><h3 class='font-yellow'>抱歉，该优惠券已兑换完，请选择其他优惠券兑换。</h3><div class='op-btns'><a href='javascript:;' class='btn-9' onclick='dialogClose()'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
					title: "提示"
				});
			} else if (id == 4 || id == 11) {
				$('body').dialog({
					type: "text",
					/*也可以是text,html,image,ajax,json*/
					width: 500,
					height: 110,
					source: "<div class='tip-box warn-box'><h3 class='font-yellow'>未抢到，下次再来吧~</h3><div class='op-btns'><a href='javascript:;' class='btn-9' onclick='dialogClose()'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
					//source: "<div class='tip-box warn-box'><h3 class='font-yellow'>哎呀~ 您晚了一步！该优惠券已经兑换完了。</h3><div class='op-btns'><a href='javascript:;' class='btn-9' onclick='dialogClose()'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
					title: "提示"
				});
			} else if (id == 6) {
				$('body').dialog({
					type: "text",
					/*也可以是text,html,image,ajax,json*/
					width: 480,
					height: 100,
					// source: "<div class='tip-box warn-box'><h3 class='font-yellow'>哎呀~ 您的京豆不足了（剩" + $('.my-beans .num').html() + "个），没办法兑换该优惠券哦。</h3><div class='op-btns'><a href='javascript:;' class='btn-9'>确定</a><a href='javascript:;' class='btn-9 ml10'>取消</a></div></div>",
					source: "<div class='tip-box warn-box'><h3 class='font-yellow'>哎呀~ 您的京豆不足了，没办法兑换该优惠券哦。</h3><div class='op-btns'><a href='javascript:;' class='btn-9' onclick='dialogClose()'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
					title: "提示"
				});

			} else if (id == 7) {
				$('body').dialog({
					type: "text",
					/*也可以是text,html,image,ajax,json*/
					width: 400,
					height: 110,
					source: "<div class='tip-box warn-box'><h3 class='font-yellow'>抱歉,该项目已过期。</h3><div class='op-btns'><a href='javascript:;' class='btn-9' onclick='dialogClose()'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
					title: "提示"
				});
			} else if (id == 8) {
				$('body').dialog({
					type: "text",
					/*也可以是text,html,image,ajax,json*/
					width: 600,
					height: 110,
					source: "<div class='tip-box warn-box'><h3 class='font-yellow'>抱歉，您已经兑换过此优惠券了，去看看别的优惠券吧~</h3><div class='op-btns'><a href='javascript:;' class='btn-9' onclick='dialogClose()'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
					title: "提示"
				});
			} else {
				$('body').dialog({
					type: "text",
					/*也可以是text,html,image,ajax,json*/
					width: 400,
					height: 110,
					source: "<div class='tip-box warn-box'><h3 class='font-yellow'>抱歉，系统异常，请稍后再试。</h3><div class='op-btns'><a href='javascript:;' class='btn-9' onclick='dialogClose()'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
					title: "提示"
				});
			}
		},

		exchange: function(link, id, obj) {
			dialogClose();
			var lookHtml = "";
			if (link) {
				lookHtml = "去<a href='" + link + "' target='_blank'>店铺看看</a></div></div>";
			}
			$.ajax({
				url: "http://vip.jd.com/index.php?mod=Vip.MemberBean&action=exchangeCoupon",
				data: {
					id: id
				},
				dateType: "jsonp",
				type: "POST",
				success: function(data) {
					//  try{
					//jsonObj = eval('(' + data + ')');
					if (data.success == true) {
						$('body').dialog({
							type: "text",
							/*也可以是text,html,image,ajax,json*/
							width: 410,
							height: 110,
							source: "<div class='tip-box succ-box'><h3 class='font-green'>恭喜您，优惠券兑换成功！</h3><div class='box-cont'>优惠券已经发放到您的账户中，请到<a target=\"_blank\" href='http://quan.jd.com/user_quan.action'>我的京东>优惠券</a>中查看。" + lookHtml,
							title: "领取优惠券"
						});
						//vipFN.beanFresh();
					} else {
						dialogClose();
						BeanEvent.alert(data.resultCode, obj);
					}
					//	}catch(e){
					//		alert("异常");
					//	}
				}
			});

		},
		init: function() {
			
			var self = this;
			
			$(function() {
			
				var getContext = function () {
					// return $('#gb-tab #gb-nav').length>0 ? $('#gb-tab .ui-switchable-panel-selected') : $('body');
					return $('#gb-tab').hasClass('ui-switchable-tab') ? $('#gb-tab .ui-switchable-panel-selected') : $('body');
				};
				$('.p-change-op .btn-3:not(.btn-disabled)').bind('click',function() {
					
					var _this = this, $this = $(this);
					
					jdUser.login(function() {
						var ele = $this.parent().prev().prev(),
							productInfoEle = ele.parent().prev();
						
						//京豆数量
						var jdNum = $.trim(ele.next().find('>span.num').text());
						//兑换面值
						var jdMoney = ele.find('.worth').text().match(/\d+/g).join('');
						//有效期
						// var jdDate = ele.find('.ftx-03').text().match(/\d+/g);
						var jdDate = ele.find('.ftx-03').text();
						//兑换限制数量
						var jdLimitNum = ele.find('.num').text();
						//使用的限额条件
						var jdUseMoney = ele.find('.ftx-04').text().match(/\d+/g) || [];
						//商品名称
						var productName = productInfoEle.find('.exc-txt1').text();
						//商品类型
						var productType = productInfoEle.find('.exc-txt2').text();
						//商品链接
						// var productLink = productInfoEle.find('.exc-img>a').attr('href');
						var productLink = !(productInfoEle.find('.exc-img>a').attr('isPop') && productInfoEle.find('.exc-img>a').attr('isPop')=='0');
						//商品id
						var productId = $this.attr('itid');
						//满减信息
						var tipInfo = function() {
							if(jdUseMoney.length > 0) {
								return '满' + jdUseMoney + '减' + jdMoney;
							} else {
								return $.trim(ele.find('.ftx-04').text());
							}
						}();

						dialogClose();
						
						$('body').dialog({
							type: "text",
							/*也可以是text,html,image,ajax,json*/
							width: 510,
							height: 220,
							source: "<div class='tip-box warn-box'><h3 class='ftx-04'>您正在使用<span class='ml15 mr5'>" + jdNum + "</span>个京豆 兑换<br>1张" + productName + "<span class='ml15'>" + jdMoney + "元优惠券</span><span class='ftx-16'>（" + tipInfo + "）</span></h3><div class='box-cont'><p class='ftx-03'>"+jdDate+"<br>每个ID限领" + jdLimitNum + "张<br>本活动为概率性事件，不能保证所有客户成功兑换优惠券</p></div><div class='op-btns'><a exid='" + $this.attr("itid") + "' href='javascript:;' class='comfexge btn-9'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
							title: "提示"
						});
						$('.comfexge').die('click').live('click', function() {
							BeanEvent.exchange(productLink, productId, _this);
						});
					}, true);
				});

				//京豆兑换特殊商品处理

				$('.p-change-op .btn-1:not(.btn-disabled)', getContext()).bind('click',function() {
					var _this = this,$this = $(this);
					
					jdUser.login(function() {
						var ele = $this.parent().parent().prev(),
							productInfoEle = $this.parent().prev().parent();
						
						//京豆数量
						var jdNum = $.trim(productInfoEle.end().find('>span.num').text());
						//兑换面值
						var jdMoney = ele.find('.worth').text().match(/\d+/g).join('');
						//有效期
						var jdDate = ele.find('.ftx-03').text().match(/\d+/g);
						//兑换限制数量
						var jdLimitNum = ele.find('.limit>.num').text();
						//使用的限额条件
						//var jdUseMoney = (ele.find('.exc-msg').text().match(/\d+/g) || []).join('') || ele.find('.exc-msg').text();
						var jdUseMoney =  ele.find('.exc-msg').text().match(/\d+/g) || [];
						//商品名称
						var productName = productInfoEle.find('.exc-txt1').text();
						//商品类型
						var productType = productInfoEle.find('.exc-txt2').text();
						//商品链接
						// var productLink = ele.find('.exc-img>a').attr('href');
						var productLink = !(productInfoEle.find('.exc-img>a').attr('isPop') && productInfoEle.find('.exc-img>a').attr('isPop')=='0');
						//商品id
						var productId = $this.attr('itid');
						
						//满减信息
						var tipInfo = function() {
							if(jdUseMoney.length > 0) {
								return '满' + jdUseMoney + '减' + jdMoney;
							} else {
								return $.trim(ele.find('.exc-msg').text());
							}
						}();

						dialogClose();
						
						$('body').dialog({
							type: "text",
							/*也可以是text,html,image,ajax,json*/
							width: 510,
							height: 220,
							source: "<div class='tip-box warn-box'><h3 class='ftx-04'>您正在使用<span class='ml15 mr5'>" + jdNum + "</span>个京豆 兑换<br>1张" + productName + productType + "<span class='ml15'>" + jdMoney + "元优惠券</span><span class='ftx-16'>（" + tipInfo + "）</span></h3><div class='box-cont'><p class='ftx-03'>"+jdDate+"<br>每个ID限领" + jdLimitNum + "张<br>本活动为概率性事件，不能保证所有客户成功兑换优惠券</p></div><div class='op-btns'><a exid='" + $this.attr("itid") + "' href='javascript:;' class='comfexge btn-9'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
							title: "提示"
						});
						$('.comfexge').die('click').live('click', function() {
							BeanEvent.exchange(productLink, productId, _this);
						});
					}, true);
				});
				
				$('#submitExchangeBotton').bind('click', function() {
					if($(this).hasClass('btn-disabled')) return;
					var _this = this,$this = $(this);
					
					jdUser.login(function() {
						var ele = $this.parent().parent().prev(),
							productInfoEle = $this.parent().prev().parent();
						
						//京豆数量
						var jdNum = $.trim(productInfoEle.end().find('>span.num').text());
						//兑换面值
						var jdMoney = ele.find('.worth').text().match(/\d+/g).join('');
						//有效期
						// var jdDate = ele.find('.ftx-03').text().match(/\d+/g);
						var jdDate = ele.find('.ftx-03').text();
						//兑换限制数量
						var jdLimitNum = ele.find('.limit>.num').text();
						//使用的限额条件
						//var jdUseMoney = (ele.find('.exc-msg').text().match(/\d+/g) || []).join('') || ele.find('.exc-msg').text();
						var jdUseMoney =  ele.find('.exc-msg').text().match(/\d+/g) || [];
						//商品名称
						var productName = productInfoEle.find('.exc-txt1').text();
						//商品类型
						var productType = productInfoEle.find('.exc-txt2').text();
						//商品链接
						// var productLink = ele.find('.exc-img>a').attr('href');
						var productLink = !(productInfoEle.find('.exc-img>a').attr('isPop') && productInfoEle.find('.exc-img>a').attr('isPop')=='0');
						//商品id
						var productId = $this.attr('itid');
						
						//满减信息
						var tipInfo = function() {
							if(jdUseMoney.length > 0) {
								return '满' + jdUseMoney + '减' + jdMoney;
							} else {
								return $.trim(ele.find('.exc-msg').text());
							}
						}();

						dialogClose();
						
						$('body').dialog({
							type: "text",
							/*也可以是text,html,image,ajax,json*/
							width: 510,
							height: 220,
							source: "<div class='tip-box warn-box'><h3 class='ftx-04'>您正在使用<span class='ml15 mr5'>" + jdNum + "</span>个京豆 兑换<br>1张" + productName + productType + "<span class='ml15'>" + jdMoney + "元优惠券</span><span class='ftx-16'>（" + tipInfo + "）</span></h3><div class='box-cont'><p class='ftx-03'>"+jdDate+"<br>每个ID限领" + jdLimitNum + "张<br>本活动为概率性事件，不能保证所有客户成功兑换优惠券</p></div><div class='op-btns'><a exid='" + $this.attr("itid") + "' href='javascript:;' class='comfexge btn-9'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
							title: "提示"
						});
						$('.comfexge').die('click').live('click', function() {
							BeanEvent.exchange(productLink, productId, _this);
						});
					}, true);
				});

				//焦点图领取京豆
				$('#g-scroll .j_btn_exchange').bind('click',function() {
					var _this = this,$this = $(this);
					var _html = $('.j_msg_txt',$this.parent()).html();

					jdUser.login(function() {
						//商品链接
						var productLink = $this.attr('fhref');
						//商品id
						var productId = $this.attr('itid');

						dialogClose();
						
						$('body').dialog({
							type: "text",
							/*也可以是text,html,image,ajax,json*/
							width: 510,
							height: 200,
							source:"<div class='tip-box warn-box'>"+ _html+"<div class='op-btns'><a exid='" + $this.attr("itid") + "' href='javascript:;' class='comfexge btn-9'>确定</a><a href='javascript:;' class='btn-9 ml10' onclick='dialogClose()'>取消</a></div></div>",
							title: "提示"
						});
						$('.comfexge').die('click').live('click', function() {
							BeanEvent.exchange(productLink, productId, _this);
						});
					}, true);
				});
				
				//外部服务领取京豆
				$('.oExchange .p-change-op .btn-3:not(.btn-disabled)', getContext()).unbind('click').bind('click', function() {
				
					var _this = this,$this = $(this);
					
					jdUser.login(function() {
					
						var ele = $this.parent().prev().prev(),
							productInfoEle = ele.parent().prev();
						
						//京豆数量
						var jdNum = $.trim(ele.next().find('>span.num').text());
						//商品名称
						var productName = ele.find('.p-tit').text();
						//有效期
						var jdDate = ele.find('.ftx-03').text().match(/\d+/g);
						//兑换限制数量
						var jdLimitNum = ele.next().find('.num.hide').text();
						//兑换查看链接
						var productLink = productInfoEle.find('.exc-img a').attr('href');
					
						//商品id
						var productId = $this.attr('itid');
						
						var itemid = $this.attr('itemid');
						var trackID = $('#TrackID').val();
						
						var dialogData = {
							jdNum: jdNum,
							jdLimitNum: jdLimitNum,
							productName: productName
						};
						
						dialogClose();
						
						$('.m-submit').die('click').live('click', function() {
							var payPwd = $.trim($('#payPwd').attr('value')),
								verifyCode = $.trim($('#verifyCode').attr('value')),
								isShowVerifyCode = $('#verifyCode').size() > 0;
								
							if(isShowVerifyCode) {
								$('#payPwd').keydown(function() {$('#j-payPwd-msg').hide()});
								$('#verifyCode').keydown(function() {$('#j-verifyCode-msg').hide()});
								
								if(payPwd.length == 0) {
									$('#j-payPwd-msg').show();
									return;
								}
								
								if(verifyCode.length == 0) {
									$('j-verifyCode-msg').show();
									return;
								}
							} else {					
								$('#payPwd').keydown(function() {$('.msg-error').hide()});
								
								if(payPwd.length == 0) {
									$('.msg-error').show();
									return;
								}
								
								delete self.verifyCodeKey;
							}

							BeanEvent.payAction(itemid, trackID, payPwd, productLink, dialogData, jdLimitNum, verifyCode, true);
						});
						
						var isLimit = $.trim($('#j-timesLimit').text());
						
						if(isLimit == 'true') {
							var data = {content: '您已经兑换过啦，每个ID只能兑换' + jdLimitNum + '次哦~'};	
							dialogClose();	
							$('body').dialog({
								type: "text",
								width: 300,
								height: 100,
								source: TemplateEngine(tpl.fail, data),
								title: "提示"
							});
							
							return;
						}
						
						BeanEvent.payAction(itemid, trackID, '', productLink, dialogData, jdLimitNum);
						
					}, true);
				
				})
			});
		},
		payAction:	function (_itemId, _TrackID, _payPwd, link, dialogData, jdLimitNum, verifyCode, isSubmit) {
			var self = this, url, sendData = {}, timer;
			
			if(isSubmit) {
				url =  'http://vip.jd.com/index.php?mod=Vip.MemberExchange&action=submitExchange';
				sendData = {itemId: _itemId, TrackID: _TrackID, payPwd: _payPwd, verifyCodeKey: this.verifyCodeKey, verifyCode: verifyCode};
			} else {
				url = 'http://vip.jd.com/index.php?mod=Vip.MemberExchange&action=checkExchange';
				sendData = {itemId: _itemId, TrackID: _TrackID};
			}
			
			//倒计时。。
			var countDown = function(time, callback, complete) {
				timer = setInterval(function() {
					if(time) {
						callback(time--);
					} else {
						clearInterval(timer);
						complete();
					}
				}, 1000);
			};
			
			$.ajax({
				url: url,
				data: sendData,
				type: 'get',
				dataType: "json",
				success: function(data) {
					var code = +data.resultCode;
					var info = '请输入手机号码';
					
					if(data.success) {
						switch(code) {
							//兑换成功
							case 200:
								var data = {code: data.result.exchangeCode, href: link, telphone: data.result.userMobile || ''};
								var exchangeCode = data.code;
								dialogClose();
								
								//倒计时操作
								var countDownAction = function() {
									var txt = $('#toTelphone').text();
											
									$('#telephoneNum').attr('disabled', true);
									$('#toTelphone').addClass('btn-disabled');
									
									countDown(120, function(t) {
										$('#toTelphone').text(txt + '（' + t + '）');
									}, function() {
										$('#toTelphone').text(txt);
										$('#telephoneNum').removeAttr('disabled');
										$('#toTelphone').removeClass('btn-disabled').next('span').html('').hide();
										toTelphoneAction();
									});
								}; 
								
								//发送到手机操作
								var toTelphoneAction = function() {
									$('#toTelphone').unbind('click').bind('click', function() {
										
										//按钮禁用时
										if($(this).hasClass('btn-disabled')) return;
										//手机号码为空时
										if(!$.trim($('#telephoneNum').val()).length) return;
										
										//验证手机号码格式
										var num = $.trim($('#telephoneNum').val());
										var reg = /^\d{3}(\*){4}(\d){4} || \d{11}$/;
										
										if(!reg.test(num)) {
											$(this).next('span').html('手机号码格式错误').show().end().addClass('btn-disabled');
											return;
										} else {
											$(this).next('span').html('').show().end().removeClass('btn-disabled');
										}
									
										var mobile = $('#telephoneNum').val();
										var pin = getCookie('pin') || '';
										var code = exchangeCode;
										var projectId = _itemId;
										
										$.ajax({
											url: 'http://vip.jd.com/index.php?mod=Vip.MemberExchange&action=sendExchangeCodeSms',
											data: {
												mobile: mobile,
												pin: pin,
												code: code,
												projectId: projectId
											},
											dataType: 'json',
											success: function(result) {
												var code = +result.resultCode;
												var data;
												
												switch(code) {
													case 200:
														data = {content: '已发送到您手机'};
														BeanEvent.time = 30;
														countDownAction();
														break;
													case 301:
														data = {content: '参数错误'};
														break;
													case 305:
														data = {content: '请求过于频繁'};
														break;
													case 500:
														data = {content: '服务器错误'};
														break;
													case 601:
														data = {content: '手机号码格式错误'};
														break;
													case 602:
														data = {content: '该手机已经发送过短信'};
														
														$('#telephoneNum').attr('disabled', true);
														$('#toTelphone').addClass('btn-disabled').unbind('click');
														break;
													case 603:
														data = {content: '您已发送过了'};
														
														$('#telephoneNum').attr('disabled', true);
														$('#toTelphone').addClass('btn-disabled').unbind('click');
														break;														
												}
												
												var fcolor = code == 200 ? '#666' : '#ff0000';
												$('#toTelphone').next('span').html(data.content).show().css('color', fcolor);
											},
											fail: $.noop
										});
										
									});
								};
								
								$('body').dialog({
									type: "text",
									width: 550,
									height: 150,
									source: TemplateEngine(tpl.actionSuccess, data),
									title: "提示",
									//发送兑换码到手机。。
									onReady: function() {
										
										//placeholder
										$('#telephoneNum').blur(function() {
											var num = $.trim($(this).val());
											
											if(!num.length) {$(this).val(info).css('color', '#9e9e9e');}
										}).focus(function() {
											var num = $.trim($(this).val());
											
											if(num == info) {$(this).val('').css('color', '#2e2e2e');}
											
											$('#toTelphone').removeClass('btn-disabled').next().html('').hide();
										});
										
										$('.ui-dialog-close').click(function() {
											timer && clearInterval(timer);
										});
									
										toTelphoneAction();
										
										$('#telephoneNum').blur();
									}
								});
								break;
						}
					} else {
						switch(code) {
							//系统异常
							case 0:
								var data = {content: '系统异常'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//未登录
							case 1:
								break;
							//需要支付密码
							case 2:
								dialogClose();
								$('body').dialog({
									type: "text",
									width: 510,
									height: 230,
									source: TemplateEngine(tpl.ComplexpayCode, dialogData),
									title: "提示"
								});
								break;
							//支付密码验证失败
							case 23:
								$('.ui-dialog .msg-error:first').show();
								$('#verifyImg').click();
								break;
							//开启支付密码
							case 25:
								dialogClose();
								$('body').dialog({
									type: "text",
									width: 450,
									height: 100,
									source: tpl.openPayCode,
									title: "提示"
								});
								break;
							//支付密码错误6次，锁定2小时
							case 26:
								var msg = '支付密码错误6次，锁定2小时';
								$('.ui-dialog .msg-error:first').text(msg).show();
								break;
							//---------------------------下面的code都是新版的---------------------------------------------------
							//参数
							case 301:
								var data = {content: '参数错误，请重试~'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//支付密码错误
							case 302:
								$('.ui-dialog .msg-error:first').show();
								$('#verifyImg').click();
								break;
							//支付密码错误6次，锁定2小时
							case 303:
								var msg = '支付密码错误6次，锁定2小时';
								$('.ui-dialog .msg-error:first').text(msg).show();
								$('#verifyImg').click();
								break;
							//验证码错误
							case 304:
								self.verifyCodeKey = data.result.verifyCodeKey;
								$('#verifyImg').click();
								$('#j-verifyCode-msg').show();
								break;
							//兑换失败
							case 500:
								var data = {content: '兑换失败，请稍后重试~'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//兑换的活动不存在
							case 501:
								var data = {content: '抱歉，您所兑换的活动不存在'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//你已兑换过
							case 502:
								var data = {content: '您已经兑换过啦，每个ID只能兑换' + jdLimitNum + '次哦~'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 370,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//京豆不足
							case 503:
								var data = {content: '哎呀~您的京豆不足了'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//已无兑换码
							case 504:
								var data = {content: '哎呀，您来晚了一步，已经兑换完啦~'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//兑换系统异常，修改兑换码状态失败
							case 505:
								var data = {content: '兑换系统异常，修改兑换码状态失败'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//修改用户兑换次数失败
							case 506:
								var data = {content: '修改用户兑换次数失败'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//用户不存在
							case 507:
								var data = {content: '用户不存在'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//用户请求频繁
							case 508:
								var data = {content: '您的操作过于频繁，请稍后重试~'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
							//开启支付密码
							case 509:
								dialogClose();
								$('body').dialog({
									type: "text",
									width: 450,
									height: 100,
									source: tpl.openPayCode,
									title: "提示"
								});
								break;
							//库存不足。。
							case 510:
								var data = {content: '未抢到，下次再来吧~'};	
								dialogClose();	
								$('body').dialog({
									type: "text",
									width: 300,
									height: 100,
									source: TemplateEngine(tpl.fail, data),
									title: "提示"
								});
								break;
						};
					}
					
					//是否显示验证码					
					if(data.result && data.result.isShowVerifyCode) {
						dialogClose();
						dialogData.verifyCodeKey = data.result.verifyCodeKey;
						$('body').dialog({
							type: "text",
							width: 510,
							height: 280,
							source: TemplateEngine(tpl.SimplePayCode, dialogData),
							title: "提示"
						});
						
						self.isShowVerifyCode = data.result.isShowVerifyCode;
						self.verifyCodeKey = data.result.verifyCodeKey;
					} else {
						delete dialogData.verifyCodeKey;
					}
					
					if(data.success && data.result && !data.result.isShowVerifyCode) {
						dialogClose();
						$('body').dialog({
							type: "text",
							width: 510,
							height: 230,
							source: TemplateEngine(tpl.ComplexpayCode, dialogData),
							title: "提示"
						});
					}

				},
				fail: function() {}
			});
		}
	};
	
	//对外京豆兑换模板
	var tpl = {
		//带有商品信息的支付密码验证
		ComplexpayCode:  '<div class="tip-box warn-box">\
							<h3 class="ftx-04">\
								您正使用<span class="ml5 mr5"><%this.jdNum%></span>个京豆 兑换<br/>\
								1张<%this.productName%>\
							</h3>\
							<div class="box-cont">\
								<div class="ftx-03"><%this.jdLimitNum == -1 ? "每个ID领取张数无限制" : "每个ID限领" + this.jdLimitNum + "张<br>本活动为概率性事件，不能保证所有客户成功兑换优惠券"%></div>\
								<div class="form mt10">\
									<div class="item">\
										<span class="label">请输入支付密码：</span>\
										<div class="fl">\
											<input type="password" class="itxt" id="payPwd">\
											<a href="http://safe.jd.com/validate/payPwd/updatePayPwd.action" class="link" target="_blank">忘记支付密码？</a>\
											<div class="msg-error">支付密码错误</div>\
										</div>\
										<div class="clr"></div>\
									</div> \
								</div>\
							</div>\
							<div class="op-btns">\
								<a href="#none" class="btn gray-btn m-btn m-submit">确定</a>\
								<a href="#none" class="btn gray-btn m-btn del-btn" onclick="dialogClose()">取消</a>\
							</div>\
						</div>\
					',
		//开启支付密码
		openPayCode: '<div class="tip-box warn-box">\
						<h3 class="ftx-04">为保障您的账号资金安全，兑换前请先</h3>\
						<a href="http://safe.jd.com/user/paymentpassword/safetyCenter.action" class="ftx-05 fl mt5 ml5" target="_blank">开启支付密码</a>\
						<div class="clr"></div>\
					</div>\
					',
		//验证码
		SimplePayCode: '<div class="tip-box warn-box">\
							<h3 class="ftx-04">\
								您正使用<span class="ml5 mr5"><%this.jdNum%></span>个京豆 兑换<br/>\
								1张<%this.productName%>\
							</h3>\
							<div class="box-cont">\
								<div class="ftx-03"><%this.jdLimitNum == -1 ? "每个ID领取张数无限制" : "每个ID限领" + this.jdLimitNum + "张<br>本活动为概率性事件，不能保证所有客户成功兑换优惠券"%></div>\
								<div class="form mt10">\
									<div class="item">\
										<span class="label mb10 ar">请输入支付密码：</span>\
										<div class="fl mb10">\
											<input type="password" class="itxt" id="payPwd">\
											<a href="http://safe.jd.com/validate/payPwd/updatePayPwd.action" class="link" target="_blank">忘记支付密码？</a>\
											<div class="msg-error" id="j-payPwd-msg">支付密码错误</div>\
										</div>\
										<span class="label ar">请输入验证码：</span>\
										<div class="fl">\
											<input type="text" class="itxt" id="verifyCode">\
											<img src="http://authcode.jd.com/verify/image?acid=<%this.verifyCodeKey%>" width="115" height="30" id="verifyImg" style="cursor:pointer;" title="更换验证码">\
											<a class="link" id="verifyImgLink" href="javascript:;" title="更换验证码">换一张</a>\
											<div class="msg-error" id="j-verifyCode-msg">验证码错误</div>\
										</div>\
										<div class="clr"></div>\
									</div> \
								</div>\
							</div>\
							<div class="op-btns">\
								<a href="#none" class="btn gray-btn m-btn m-submit">确定</a>\
								<a href="#none" class="btn gray-btn m-btn del-btn" onclick="dialogClose()">取消</a>\
							</div>\
						</div>\
					',
		//兑换成功
		actionSuccess: '<div class="tip-box succ-box">\
							<h3 class="font-green">恭喜您，兑换成功，请牢记兑换码：</h3>\
							<h3 class="font-green"><%this.code%></h3>\
							<div>\
								<input type="text" class="exchange-text" id="telephoneNum" value="<%this.telphone%>" maxlength=11>\
								<a href="javascript:;" class="btn gray-btn m-btn m-submit toTelphoneBtn" id="toTelphone">发送到手机</a>\
								<span class="msg-error hide"></span>\
							</div>\
							<div class="box-cont">\
								<ul>\
									<li>兑换码也可以到<a href="http://joycenter.jd.com/msgCenter/queryHistoryMessage.action" target="_blank">我的京东>消息精灵</a>中查看。</li>\
									<li>兑换码的使用方法<a href="<%this.href%>" target="_blank">请点击查看</a></li>\
								</ul>\
							</div>\
						</div>\
						',
		fail: 	'<div class="tip-box warn-box">\
					<h3 class="ftx-04">兑换失败</h3>\
					<div class="box-cont ftx-03">\
						<p><%this.content%></p>\
					</div>\
				</div>\
				'
	};

	window.dialogClose = function() {$.closeDialog()};

	var refreshCode = function() {
		var imgsrc = 'http://authcode.jd.com/verify/image?acid={verifyCodeKey}'.replace(/{verifyCodeKey}/g, BeanEvent.verifyCodeKey);
		verifyImg.src = imgsrc.split('&t').shift() + '&t=' + new Date().getTime();
		$('#verifyCode').val('');
	};

	BeanEvent.init();
	
	//更换验证码
	$('#verifyImg, #verifyImgLink').live('click', refreshCode);

	$('.filter dl>dd li>a, .p-change-op .btn-disabled').tips({
		marginTop:0
	});
});