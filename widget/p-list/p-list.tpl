<!-- list-wrap-->
	<div class="p-list-wrap">
		<ul class="clearfix">
			#foreach( $product in $allProducts )
				#if($itemnum==2)
				<li>
					<div class="item">
						<div class="p-img">
							<a target="_blank" href="$product[0].p-link"><img width="220" height="220" alt="$product[0].p-name" src="$product[0].p-img" data-img="1" title="$product[0].p-name"/></a>
						</div>
						<div class="r-top">
						<!-- <div class="txt">最后疯抢</div> -->
							<div class="txt txt-e">NEW</div>
						</div>
						<div class="p-name">
							<a target="_blank" href="$product[0].p-link" title="$product[0].p-name">$product[0].p-name</a>
						</div>
						<div class="p-price">
							<div class="ftx-03">京东价：<del>$product[0].p-del</del></div>
							<strong>$product[0].p-price</strong>
							#if($beantag)
							<b>+10京东</b>
							#end
						</div>
						#if($rank)
						<div class="rank r4 ftx-03"><s></s>金牌及以上会员专享价</div>
						#end
						<div class="btns"><a href="" class="btn-9">加入购物车</a></div>

					</div>
					<div class="item">
						<div class="p-img">
							<a target="_blank" href="$product[1].p-link"><img width="220" height="220" alt="$product[1].p-name" src="$product[1].p-img" data-img="1" title="$product[1].p-name"/></a>
						</div>
						<div class="p-name">
							<a target="_blank" href="$product[1].p-link" title="$product[1].p-name">$product[1].p-name</a>
						</div>
						<div class="p-price">
							<div class="ftx-03">京东价：<del>$product[1].p-del</del></div>
							<strong>$product[1].p-price</strong>
							#if($beantag)
							<b>+10京豆</b>
							#end
						</div>
						#if($rank)
						<div class="rank r4 ftx-03"><s></s>金牌及以上会员专享价</div>
						#end
						<div class="btns"><a href="" class="btn-9">加入购物车</a></div>
					</div>
				</li>
				#else
				<li>
					<div class="item">
						<div class="p-img">
							<a target="_blank" href="$product[0].p-link"><img width="220" height="220" alt="$product[0].p-name" src="$product[0].p-img" data-img="1" title="$product[0].p-name"/></a>
						</div>
						<div class="p-name">
							<a target="_blank" href="$product[0].p-link" title="$product[0].p-name">$product[0].p-name</a>
						</div>
						<div class="p-price">
							<div class="ftx-03">京东价：<del>$product[0].p-del</del></div>
							<strong>$product[0].p-price</strong>
							#if($beantag)
							<b>+10京东</b>
							#end
						</div>
						#if($rank)
						<div class="rank r4 ftx-03"><s></s>金牌及以上会员专享价</div>
						#end
						#if($product[0].exc-r-top)
						<div class="r-top">
							<!-- <div class="txt">最后疯抢</div> -->
							<div class="txt">$product[0].exc-r-top</div>
						</div>
						#end
						#if($product[0].exc-r-top-2)
						<div class="r-top-2">
							<img height="32" width="88" src="http://img11.360buyimg.com/da/jfs/t481/132/148890517/4164/18446f2/5451dedfN78f54fd6.jpg" alt="">
						</div>
						#end
						#if($product[0].exc-r-top-3)
						<div class="r-top">
							<img height="69" width="69" src="http://img14.360buyimg.com/da/jfs/t667/350/1261623344/19229/289cbb17/54c87660N89a12819.png" alt="">
						</div>
						#end
						<div class="btns"><a href="" class="btn-9">加入购物车</a></div>
					</div>
				</li>
				#end
			#end
		</ul>
	</div>
<!-- /list-wrap -->