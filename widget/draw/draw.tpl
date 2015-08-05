<div class="draw-box">
	<div class="clearfix d-list">
		<div class="fore" id="solt-item-1">
			<ul>
				<li><a href="#none"><img src="http://misc.360buyimg.com/vip/skin/2013/i/e-i2.png" alt="" /></a></li>
				<li><a href="#none"><img src="http://misc.360buyimg.com/vip/skin/2013/i/e-i2.png" alt="" /></a></li>
				<li><a href="#none"><img src="http://misc.360buyimg.com/vip/skin/2013/i/e-i2.png" alt="" /></a></li>
			</ul>
			<em></em>
		</div>
		<div class="fore" id="solt-item-2">
			<ul>
				<li><a href="#none"><img src="http://misc.360buyimg.com/vip/skin/2013/i/e-i2.png" alt="" /></a></li>
				<li><a href="#none"><img src="http://misc.360buyimg.com/vip/skin/2013/i/e-i2.png" alt="" /></a></li>
				<li><a href="#none"><img src="http://misc.360buyimg.com/vip/skin/2013/i/e-i2.png" alt="" /></a></li>
			</ul>
			<em></em>
		</div>
		<div class="fore" id="solt-item-3">
			<ul>
				<li><a href="#none"><img src="http://misc.360buyimg.com/vip/skin/2013/i/e-i2.png" alt="" /></a></li>
				<li><a href="#none"><img src="http://misc.360buyimg.com/vip/skin/2013/i/e-i2.png" alt="" /></a></li>
				<li><a href="#none"><img src="http://misc.360buyimg.com/vip/skin/2013/i/e-i2.png" alt="" /></a></li>
			</ul>
			<em></em>
		</div>
	</div>
	<a class="draw-btn" href="javascript:void(0)"></a>
	<span class="glint-l"></span><span class="glint-r"></span>
	<div class="draw-bean">
		20京豆/每次
	</div>
	<div class="no-draw"></div>
</div>

<!--抽奖区域 start-->
<script id="draw_box_content" type="text/template">
	{for p in list}
		<div class="fore" id="solt-item-${p_index}">
			<ul>
				{for m in p.content}
					<li id="${m.id}" title="${m.title}">
						<img width=100 height=100 src="${m.src}" alt="${m.title}" data-img="1" class="err-product"/>
					</li>
				{/for}
			</ul>
			<em></em>
		</div>
    {/for}
</script>
<!--抽奖区域 end-->
