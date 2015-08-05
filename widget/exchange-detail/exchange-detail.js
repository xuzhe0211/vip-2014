$(function(){
	var targetHeight = $('.exc-detail .item .limit .coupon-info').height();
	if(targetHeight > 152){
		$('.exc-detail .item .limit .coupon-info').css({'height':'152px','overflow':'hidden'})
		$('.exc-detail .item .limit .coupon-info').after('<div class="limit_ellipsis">...</div>')
	}
})