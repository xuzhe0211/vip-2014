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
		if($('.xzshow').length){
		     $('body').dialog({
		        type: "text",/*也可以是text,html,image,ajax,json*/
		        width: 610,
		        height: 220,
		        source: $('.xzshow').html(),
		        title: "勋章详情",
		        _close_val: "×",
		         _titleOn: true
		    })
		}
		$("a[xzid]").bind('click',function(){
		    var xzid=$(this).attr('xzid');
		    $('body').dialog({
		        type: "text",/*也可以是text,html,image,ajax,json*/
		        width: 610,
		        height: 220,
		        source: $('#'+xzid).html(),
		        title: "勋章详情",
		        _close_val: "×",
		         _titleOn: true
		    })
		});
});