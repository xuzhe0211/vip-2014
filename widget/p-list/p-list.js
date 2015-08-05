seajs.use(['jdf/1.0.0/ui/tips/1.0.0/tips'],function(tips){

	//已将会员优惠购和会员特价合并
	var vipFN = {};
	
	//判断是否是会员特价模块
	vipFN.isPrice = function(ele) {
		return ele.hasClass('j-price');
	};
	
	vipFN.setTimer = function(isBreak, func) {

		var timer = setInterval(function() {
			isBreak() && (clearInterval(timer), func());
		}, 500);

	};
	
	vipFN.coupon = function(ele){
		var ao=[],idstr;
		$.each(ele.find('.item'),function(k,v){  
		   $(v).attr('fsid') && $(v).attr('fpid') && ao.push($(v).attr('fsid')+"_"+$(v).attr('fpid') );
		});
		idstr = ao.join(',');  
		if(idstr.length>0){

			if(this.isPrice(ele)) {//会员特价
				$.ajax({
					type: "GET",
					url:"http://vip.jd.com/jprice/"+idstr+"-1-1.html",
					dataType: "jsonp",
					success:function(data){
						for( var key in data ){   
							try{
								if(data[key]['op'] && parseFloat(data[key]['op'])>=0) { 
									var _$item = $('[fsid='+data[key]['sid']+'][fpid='+data[key]['pid']+']', ele);
									$('.p-price',_$item).html('<div class="ftx-03">京东价：'
										+(data[key]['op']>0?("<del>￥"+data[key]['op']+"</del>"):"暂无报价")
										+'</div><strong>'
										+(data[key]['pp']>=0?("￥"+data[key]['pp']):"暂无报价")
										+'</strong>');
								}   
						   }catch( e){
							
						   }    
						}
					},
					error:function(r){
					}
				});
			} else {//京豆优惠购
				$.ajax({
					type:"GET",
					url:"http://vip.jd.com/jprice/"+idstr+"-1-1.html",
					data:{ 
						skuids:idstr , 
						type:1        
					},
					dataType:'jsonp',
					success:function(data){     
						for( var key in data ){   
							try{
								if(data[key]['op'] && parseFloat(data[key]['op'])>=0) { 
									var _$item = $('[fsid='+data[key]['sid']+'][fpid='+data[key]['pid']+']', ele);
									$('.p-price',_$item).html('<div class="ftx-03">京东价：'
										+(data[key]['op']>0?("<del>￥"+data[key]['op']+"</del>"):"暂无报价")
										+'</div><strong>'
										+(data[key]['pp']>=0?("￥"+data[key]['pp']):"暂无报价")
										+'</strong><b>+'+(data[key]['jbn']!=undefined?data[key]['jbn']:0)+'京豆</b>');
									_$item.attr('fneeds',data[key]['jbn']!=undefined?data[key]['jbn']:0);
								}   
						   }catch( e){
							
						   }    
						}
					}
				});
			}
		}
	}

	vipFN.couponUI = function(ele){
		var ao=[],idstr;
		$.each(ele.find('.item'),function(k,v){  
		   $(v).attr('fsid') && $(v).attr('fpid') && ao.push($(v).attr('fsid')+"_"+$(v).attr('fpid') );
		});
		idstr = ao.join(',');  
		if(idstr.length>0){ 
			if(this.isPrice(ele)) {
				ele.find('.item').each(function(i){
					var _lev = $('#content').attr('userLevel'), _plev= $(this).attr('leveNum');
					if(_lev<90&&_lev*1<_plev*1){
						$(this).find('.pur-gate').attr('data-tips', "您的会员级别不够！您可以用京东价购买").tips({
							marginTop: -63
						});
					}
				});
			} else {
				$.ajax({
					type:"GET",
					url:"http://vip.jd.com/jprice/"+idstr+"-1-1.html",
					dataType:'jsonp',
					success:function(data){
					
						vipFN.setTimer(function() {
							var isLogin = $('#content').attr('userlogin');
							var isLoding = $('#user-info .acco-info .fore1').hasClass('loading');
							
							if(isLogin) {
								return isLoding ? false : true;
							}
						}, function() {
						
							var _beans = $('.acco-info li.fore1>div.mc a').text()||0;        
							for( var key in data ){ 
								var _needs = data[key]['jbn']!=undefined?data[key]['jbn']:0;
								if(data[key]['op'] && parseFloat(data[key]['op'])>=0){//京东价格合法 
									var _$item = $('[fsid='+data[key]['sid']+'][fpid='+data[key]['pid']+']', ele);
									
								   if(_beans*1<_needs){//京豆不足
										$('.p-price',_$item).html('<div class="ftx-03">京东价：'
											+(data[key]['op']>0?("<del>￥"+data[key]['op']+"</del>"):"暂无报价")
											+'</div><strong>'
											+(data[key]['pp']>=0?("￥"+data[key]['pp']):"暂无报价")
											+'</strong><b>+'+_needs+'京豆</b>');
									
										$('.pur-gate', _$item).attr('data-tips', "您的京豆不够哦！可以用京东价购买").tips({
											marginTop: -63
										});
									}else{//京豆足够
										$('.p-price',_$item).html('<div class="ftx-03">京东价：'
											+(data[key]['op']>0?("<del>￥"+data[key]['op']+"</del>"):"暂无报价")
											+'</div><strong>'
											+(data[key]['pp']>=0?("￥"+data[key]['pp']):"暂无报价")
											+'</strong><b>+'+_needs+'京豆</b>');
									}

								}   
							}
						
						})
						
					}
				});
			}
		}
	}
	
	$('.filter a[data-tips]').tips({marginTop: -1});

	$('#purchase_fr .reset').click(function(){  
		$('#purchase_fr input[type=text]').val("");
	});
	
	$('#isCheckUser').bind('click',function(){
		if(!$(this).prop('checked')){
			$('.itxt', '#purchase_fr').removeAttr('disabled');
			window.open ($('.filter .curr').attr('href').replace('?isCheckUser=1',''), "_self");
		}else{
			$('.itxt', '#purchase_fr').attr('disabled','disabled');
			window.open ($('.filter .curr').attr('href')+"?isCheckUser=1", "_self");
		}
	});
	
	var initBtn = function() {
		$('.pur-gate').each(function(k,v){
			var _href = $(v).attr("skid");
			if(_href!=""){  
				$(v)
				.attr("href","http://cart.jd.com/cart/dynamic/gate.action?pid="+_href+"&pcount=1&ptype=1")
				.attr('target','_blank');
			}
		});
	}
	
	var vipRefresh = function() {
		var getContext = function () {
			// return $('#gb-tab #gb-nav').length>0 ? $('#gb-tab .ui-switchable-panel-selected') : $('body')
			return $('#gb-tab').hasClass('ui-switchable-tab') ? $('#gb-tab .ui-switchable-panel-selected') : $('body')
		}
		$('.j-price').size() && !!+$('#content').attr('userlogin') && (vipFN.couponUI($('.j-price', getContext())), initBtn());
		$('.j-purchase').size() && !!+$('#content').attr('userlogin') && (vipFN.couponUI($('.j-purchase', getContext())), initBtn());
		
		$('.j-purchase').size() && vipFN.coupon($('.j-purchase', getContext()));
		$('.j-price').size() && vipFN.coupon($('.j-price', getContext()));
	}
	
	$(".pur-gate").click(function() {
		jdUser.login(initBtn, true);
	});
	
	window.vipRefresh = vipRefresh;
	
	$(function() {!$('#gb-tab .ui-switchable-panel-selected, #gb-tab .tab-con:first').size() && vipRefresh();});

});