/**
* @main
*/
seajs.use([
		"jdf/1.0.0/unit/globalInit/1.0.0/globalInit",
		//"jdf/1.0.0/unit/lib/1.0.0/lib",//新lib
		"jdf/1.0.0/unit/login/1.0.0/login.js",//新登录
		"jdf/1.0.0/ui/switchable/1.0.0/switchable",//左右滚动
		//"lib/js/2012/lib-v1.js",//旧lib
		"/app/js/vip.menu.js"
	], function (globalInit,lib,login,switchable,menu){
		window.dialogClose = function() {$.closeDialog()};
		$("li[xzid]").bind('click',function(){
		    var xzid=$(this).attr('xzid');
		    $('body').dialog({
		        type: "text",/*也可以是text,html,image,ajax,json*/
		        width: 500,
		        height: 230,
		        source: $('#'+xzid).html(),
		        title: "勋章详情",
		        _close_val: "×",
		         _titleOn: true
		    })
		});
		$("#btn-get").live('click',function(){
			dialogClose();
			$('body').dialog({
		        type: "text",/*也可以是text,html,image,ajax,json*/
		        width: 380,
		        height: 150,
		        source: $('#win').html(),
		        title: "勋章详情",
		        _close_val: "×",
		         _titleOn: true
		    })
		});
		$('.medal-operate .close').live('click',function(){
			dialogClose();
			return false;
		})
		$('.medal_tab span').live('click',function(){
			var index = $(this).index();
			$(this).addClass('curr').siblings().removeClass('curr');
			$(this).parent().parent().find('.medal-items-list').eq(index).show().siblings('.medal-items-list').hide();
		})
		//分享
	var share = {
		shareTpl: 
			'分享到：\
			<a id="site-sina" class="share_sina" href="javascript:;"></a>\
			<a id="qqweibo" class="share_twb" href="javascript:;"></a>\
			<a id="site-renren" class="share_rr" href="javascript:;"></a>\
			<a id="qzone" class="share_zone" href="javascript:;"></a>\
			<a id="site-douban" class="share_quan" href="javascript:;"></a>\
			',
		bindEvent : function() {
			var that = this;
			var ihtml = that.shareTpl.process();	
			// $('.share').hover(function(){$(this).toggleClass('hover');}).html(ihtml);
			$('.medal-share').html(ihtml);
			$('.medal-share a').live('click', function() {
				var type = $(this).attr('id');
				var $list = $(this).parents('.info-box');
				var msg= {
					title : '京东会员俱乐部，玩拼图，得京豆！ 我的成绩是秒！来挑战我吧~',
					content : '京东会员俱乐部，玩拼图，得京豆！ 我的成绩是秒！来挑战我吧~',
					img : $('.g_jigsaw').attr('data-img'),
					productUrl : 'http://vip.jd.com/?pt=1'
				}
				that.commond(type,msg);
			});
			//qq分享单独处理
			var t = [], i = window.location.href;
			t.push('<div class="model-prompt model-partake"><div class="form"><label>\u5546\u54c1\u94fe\u63a5\uff1a</label><input type="text" class="text" value=' + i +'></div>'), 
			$.browser.msie ? (t.push('<div class="ac"><input type="button" class="btn-copy" value="\u590d\u5236\u5e76\u53d1\u7ed9\u6211\u7684\u597d\u53cb" onclick="window.clipboardData.setData(\'Text\',\'' + i + "');$('.model-partake').html('\u5546\u54c1\u94fe\u63a5\u5730\u5740\u5df2\u7ecf\u590d\u5236\uff0c\u60a8\u53ef\u4ee5\u7c98\u8d34\u5230QQ\u3001MSN\u6216\u90ae\u4ef6\u4e2d\u53d1\u9001\u7ed9\u597d\u53cb\u4e86!')\"></div>"), e = 90) :(t.push('<div class="i-con">\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u81ea\u52a8\u590d\u5236\u529f\u80fd\u3002\u60a8\u53ef\u4ee5\u6309\u4f4fCtrl+C\uff0c\u5c06\u5546\u54c1\u94fe\u63a5\u5730\u5740\u590d\u5236\u4e0b\u6765\u3002</div>'), e = 110), t.push("</div>"), t = t.join("");
			//$("#site-qq").jdThickBox({type: "text",width: 400,height: e,source: t,_fastClose: !0});
			$('#site-qq').dialog({
				title: '提示',
				width:  400,
				height: 80,
				type: 'text',
				hasButton:true,
				source: t
			});
		},
		commond : function(type,msg) {
			switch (type) {
				case 'site-sina':
					this.jdPshowRecommend('http://v.t.sina.com.cn/share/share.php?appkey=2445336821','sina',msg);
					break
				case 'qqweibo':
					this.jdPshowRecommend('http://v.t.qq.com/share/share.php?source=1000002&site=http://www.jd.com','qzone',msg);
					break
				case 'site-renren':
					this.jdPshowRecommend('http://share.renren.com/share/buttonshare/post/1004?','renren',msg);
					break
				case 'qzone':
					this.jdPshowRecommend('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?','kaixing',msg);
					break
				case 'site-douban':
					this.jdPshowRecommend('http://www.douban.com/recommend/?','douban',msg);
					break
				case 'site-msn':
					this.jdPshowRecommend('http://profile.live.com/badge/?','MSN',msg);
					break
			}
		},
		jdPshowRecommend : function(url, stype, msg) {
			var pin = readCookie("pin") || "";

			if (stype == "qzone") {
				url = url + "&title=" + msg.content + "&pic=" + msg.img + "&url=" + msg.productUrl;
			}
			if (stype == "sina") {
				url = url + "&title=" + encodeURIComponent(msg.content) + "&pic=" + encodeURIComponent(msg.img) + "&url=" + encodeURIComponent(msg.productUrl);
				window.open(url, "", "height=500, width=600");
			}
			if (stype == "renren") {
				url = url + "title=" + msg.title + "&content=" + msg.content + "&pic=" + msg.img + "&url=" + msg.productUrl;
			}
			if (stype == "kaixing") {
				url = url + "rtitle=" + msg.title + "&rcontent=" + msg.content + "&rurl=" + msg.productUrl;
			}
			if (stype == "douban") {
				url = url + "title=" + msg.title + "&comment=" + msg.content + "&url=" + msg.productUrl;
			}
			if (stype == "MSN") {
				url = url + "url=" + msg.productUrl + "&title=" + msg.title + "&description=" + msg.content + "&screenshot=" + msg.img;
			}
			if (stype != "sina") {
				window.open(encodeURI(url), "", "height=500, width=600");
			}
		}
	};
	share.bindEvent();
});