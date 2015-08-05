$(function(){
	if($('#da-top').length){
		var _long = 10;
		function closeTopWindow(str){
			
		};
		var _timer = setInterval(function(){
			if((_long--)>=2){
				$('#da-top .da-top-bar b').text(_long);
			}else{
				clearInterval(_timer);
				$('#da-top').slideUp();
			}
		},1000);
		$('#da-top .da-x').bind('click',function(){
			clearInterval(_timer);
			$('#da-top').slideUp();
			var _str = $(this).attr('data-step');
			if(_str){
				$.ajax({
					'url':'http://vip.jd.com/index.php',
					'data':{
						'mod':'Vip.MemberIndex',
						'action':'closeWindowAd',
						'closedate' :_str
					},
					'type':'get',
					'dataType':'json',
					'success':function(d){
					}
				});
			}
		});
	}
});