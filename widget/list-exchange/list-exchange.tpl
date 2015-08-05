<!-- list-exchange -->
<div class="list-exchange-wrap">
	<ul class="clearfix">
		#foreach( $exchage in $allExchange )
		<li>
			<div class="item">
				<div class="l-col">
					<div class="exc-txt1">$exchage.exc-txt1</div>
					<div class="exc-txt2 ftx-03">$exchage.exc-txt2</div>
					<div class="exc-img">
						<a href="$exchage.exc-link"><img src="$exchage.exc-img" alt=""></a>
					</div>
				</div>
				<div class="r-col">
					<div class="limit">
						#if($exchage.exc-tit)
							<div class="p-tit">$exchage.exc-tit</div>
						#else
							<div class="worth"><span class="sign">￥</span>$exchage.exc-worth</div>
						#end
						#if(!$exchage.exc-tit)<div class="ftx-04 mb10">满500元可用</div>#end
						<div class="ftx-03">有效期至2015-01-01</div>
						<span class="exc-jag"></span>
					</div>
					<div class="p-change">
						<span class="num">$exchage.exc-bean </span>京豆
						<span class="ext-num ftx-03 ml5"><span class="num">$exchage.exc-num</span>人兑换</span>
						<span class="exc-jag"></span>
					</div>
					<div class="p-change-op">
						<a href="#none" class="btn-3 btn-disabled">立即兑换</a>
						<span class="exc-jag"></span>
					</div>
					#if($exchage.exc-r-top)
					<div class="r-top">
						<!-- <div class="txt">最后疯抢</div> -->
						<div class="txt txt-e">$exchage.exc-r-top</div>
					</div>
					#end
					#if($exchage.exc-r-top-2)
					<div class="r-top-2">
						<img height="32" width="88" src="http://img11.360buyimg.com/da/jfs/t481/132/148890517/4164/18446f2/5451dedfN78f54fd6.jpg" alt="">
					</div>
					#end
					#if($exchage.exc-r-top-3)
					<div class="r-top">
						<img height="69" width="69" src="http://img14.360buyimg.com/da/jfs/t667/350/1261623344/19229/289cbb17/54c87660N89a12819.png" alt="">
					</div>
					#end
				</div>
				<div class="top-icon"></div>
			</div>
			#if($itemnum==2)
			<div class="item">
				<div class="l-col">
					<div class="exc-txt1">$exchage.exc-txt1</div>
					<div class="exc-txt2 ftx-03">$exchage.exc-txt2</div>
					<div class="exc-img">
						<a href="$exchage.exc-link"><img src="$exchage.exc-img" alt=""></a>
					</div>
				</div>
				<div class="r-col">
					<div class="limit">
						<div class="worth"><span class="sign">￥</span>$exchage.exc-worth</div>
						<div class="ftx-04 mb10">满500元可用</div>
						<div class="ftx-03">有效期至2015-01-01</div>
						<span class="exc-jag"></span>
					</div>
					<div class="p-change">
						<span class="num">$exchage.exc-bean </span>京豆
						<span class="ext-num ftx-03 ml5"><span class="num">$exchage.exc-num</span>人兑换</span>
						<span class="exc-jag"></span>
					</div>
					<div class="p-change-op">
						<a href="#none" class="btn-3">立即兑换</a>
						<span class="exc-jag"></span>
					</div>
					<div class="r-top">
						<!-- <div class="txt">最后疯抢</div> -->
						<div class="txt txt-e">NEW</div>
					</div>
				</div>
				<div class="top-icon"></div>
			</div>
			#end
		</li>
		#end
	</ul>
</div>	
<!-- /list-exchange  -->