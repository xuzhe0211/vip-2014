$(function(){
	if(r_das){
		var root = (pageConfig.wideVersion&&pageConfig.compatible)?'root61':'root59';
		var wh = (pageConfig.wideVersion&&pageConfig.compatible)?'width="219" height="144"':'width="328" height="130"';
		var ul = '';
		for(var i = 0,l = r_das[root].length;i < l;i++){
			ul+='<li clstag="'+ r_das[root][i]["clstag"]+ '"><a target="'+(r_das[root][i]['target'] ? r_das[root][i]['target'] : "_blank")+'" href="'+r_das[root][i]['href']+'"'+(r_das[root][i]['onclick'] ? (' onclick="'+r_das[root][i]['onclick']+'"') : '')+'><img '+wh+' src="'+r_das[root][i]['imgUrl']+'" alt="'+r_das[root][i]['imgAlt']+'"></a></li>'
		}
		//ul+='</ul>';
		$('#r-da ul').prepend(ul);
	}

	seajs.use(['jdf/1.0.0/ui/switchable/1.0.0/switchable'],function(switchable){
			/*
			1、鼠标移动上不停止播放
			2、点击左右滚动和自动播放动画冲突
			*/
			if($('#g-scroll .silder-item').length>1){
				$('#g-scroll').switchable({
					'type':'slider',
					'hasPage':true,
					'navItem':'num-ctrl-item',
					'mainClass':'silder-item',
					'contentClass':'silder-panel',
					'bodyClass':'slider-con',
					'prevClass':'pre',
					'nextClass':'next',
					'width':768,
					'speed':500,
					'autoPlay':true,
					'navSelectedClass':'curr',
					'seamlessLoop':true,
					'callback': function(i, isLast) {
		            	var me = this;
		            	var lazyload = function (x){
			            	$('img',me.main[x]).each(function(){
				                 var _src = $(this).attr('data-src');
				                 $(this).addClass('err-product');
				                 if(_src && _src != 'done'){
				                 	$(this).attr('src', _src).attr('data-src', 'done');
				                 }
				 			});
		            	}
		            	lazyload(i);
			 			if(isLast){
				 			lazyload(0);
			 			}
		            }
				});
				$('#g-scroll')
				.bind('mouseenter',function(){
					$(this).addClass('hover');
				})
				.bind('mouseleave',function(){
					$(this).removeClass('hover');
				});
			}
			
			var _parem1 = $('#g-scroll').attr('paramstr')||'';
			var _parem2 = $('#m-da').attr('paramstr')||'';
			var _parem3 = ($('#g-scroll').attr('paramstr')&&$('#m-da').attr('paramstr'))?',':'';

			$.ajax({
		        type: "GET",
		        url:"http://vip.jd.com/jprice/"+(_parem1+_parem3+_parem2)+"-1-1.html",
		        dataType: "jsonp",
				success:function(r){
					$.each(r,function(i){
						var _$obj = $('#g-slider .j_da[fids='+this['sid']+'_'+this['pid']+']'),
							saveVal = +(this['op'] - this['pp']).toFixed(1),
							savaVal = /\d+[.]+/.test(saveVal) ? saveVal : parseInt(saveVal);
						$('.j_price',_$obj).html('￥'+this['pp']);
						$('.j_bean',_$obj).html('+'+(this['jbn']!=undefined?this['jbn']:0)+'京豆');
						$('.j_jd_price',_$obj).html('￥'+this['op']);
						$('.j_save',_$obj).html(savaVal+'元');
					});
				},
				error:function(r){
				}
			});
	});
});


