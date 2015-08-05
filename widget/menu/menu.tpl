<!-- user-info-->
#if($nologin)
	<div id="user-info">
		<div class="u-pic">
			<div class="mask offline"></div>
		</div>

		<div class="no-txt"><a href="#none">立即登陆</a>，查看我的会员特权及相关信息~</div>

		<div class="cols-list">
			<div id="my-power" class="cols-item fore1">
				<div class="mt">我的特权</div>
				<div class="no-date">会员级别越高，享受的特权就越多~</div>
			</div>
			<div id="my-gift" class="cols-item fore2">
				<div class="mt">我的礼品</div>
				<div class="no-date">会员惊喜大放送~</div>
			</div>
			<div id="my-medal" class="cols-item fore3">
				<div class="mt">我的勋章</div>
				<div class="no-date">有勋章有地位</div>
			</div>
		</div>
	</div>
#else
	#if($loading)
		<div id="user-info">
			<div class="u-pic">
				<div class="mask offline"></div>
				<div class="face-link-box" style="opacity: 0.7; display: none;"></div>
				<a class="face-link" href="#" style="display: none;">修改头像</a>
			</div>
			<div class="info-m">
				 <div class="loading"></div>
			</div>

			<ul class="acco-info">
				<li class="fore1">
					<div class="mt">我的京豆</div>
					<div class="loading"></div>
				</li>  
				<li class="fore2">
					<div class="mt">优惠券</div>
					<div class="loading"></div>
				</li>
			</ul>
			<div class="cols-list">
				<div id="my-power" class="cols-item fore1">
					<div class="mt">我的特权</div>
					<div class="loading"></div>
				</div>
				<div id="my-gift" class="cols-item fore2">
					<div class="mt">我的礼品</div>
					<div class="loading"></div>
				</div>
				<div id="my-medal" class="cols-item fore3">
					<div class="mt">我的勋章</div>
					<div class="loading"></div>
				</div>
			</div>
		</div>
	#else
		<div id="user-info">
			<div class="u-pic">
				<img src="http://jss.jd.com/outLinkServicePoint/4ffe3126-10d3-47cc-affc-9dfcba38e4af.jpg" alt="用户头像">
				<div class="mask"></div>
				<div class="face-link-box" style="opacity: 0.7; display: none;"></div>
				<a class="face-link" href="#" style="display: none;">修改头像</a>
			</div>
			<div class="info-m">
				<div class="u-name"><a href="">昵称真的可以这么长吗</a></div>
				<div class="u-level">
					<div class="rank r4 ftx-03"><a target="_blank" href="http://usergrade.jd.com/user/grade"><s></s>金牌及以上会员专享价</a></div>
				</div>
				<div class="u-growth">
					<div class="exper">
						<div class="percent" style="width:30%;"></div><span class="val">10000/30000</span>
					</div>
					<div class="txt">还差2000成长值可升级为钻石会员</div>
				</div>
			</div>

			<ul class="acco-info">
				<li class="fore1">
					<div class="mt">我的京豆</div>
					<div class="mc"><a href="">12323123</a></div>
					<div class="mb">京豆有效期一年</div>
					<div class="gift-tip">
						<div class="tip-box">
							<div style="left:19px" class="tip-arr"></div>
							<div onclick="$('.menu-tip').remove()" class="tip-close">×</div>
							<div class="tip-cont">
								<div class="tip-txt">
									您有100京豆将在2014年8月30日24分60秒过期，请您尽快消费哦！
								</div>
							</div>
						</div>
					</div>
				</li>  
				<li class="fore2">
					<div class="mt">优惠券</div>
					<div class="mc"><a href="">8</a></div>
				</li>
			</ul>
			<div class="cols-list">
				<div id="my-power" class="cols-item fore1">
					<div class="mt">我的特权</div>
					<div class="my-power mc">
						<ul class="power-con">
							<li class="li-item"><a href="#none" ftit="生日礼包生日礼包" target="_blank" class="i12">生日<s></s></a></li>
							<li class="li-item"><a href="#none" ftit="升级礼包升级礼包" target="_blank" class="i13">升级<s></s></a></li>
							<li class="li-item"><a href="#none" ftit="新人礼包新人礼包" target="_blank" class="i14">新人<s></s></a></li>

							<li class="li-item"><a href="#none" ftit="享受自营商品满39元免运费" target="_blank" class="i1">运费<s></s></a></li>
							<li class="li-item"><a href="#none" ftit="享受售后运费优惠" target="_blank" class="i2">售后<s></s></a></li>
							<li class="li-item"><a href="#none" ftit="XXXXXXXXXXXXXXXX" target="_blank" class="i3">XXX<s></s></a></li>				
							<li class="li-item"><a href="#none" ftit="享受贵宾服务专线" target="_blank" class="i4" >贵宾<s></s><em class="new"></em></a></li>
							<li class="li-item"><a href="#none" ftit="享受电话预约服务" target="_blank" class="i5">预约<s></s></a></li>
							<li class="li-item"><a href="#none" ftit="享受钻石会员可购买的特价商品" target="_blank" class="i6">特价<s></s></a></li>
							<li class="li-item"><a href="#none" ftit="享受66元DIY装机服务" target="_blank" class="i7">装机<s></s></a></li>
							<li class="li-item"><a href="#none" ftit="每月月中为京东会员狂欢节，每月18日全场购物京豆翻倍" target="_blank" class="i8">会员节<s></s></a></li>
							<li class="li-item"><a href="#none" ftit="评价商品可获得京豆" target="_blank" class="i9">评论<s></s></a></li>
							<li class="li-item"><a href="#none" ftit="小小京豆用途很大哦" target="_blank" class="i10">京豆<s></s></a></li>
						</ul>
					</div>
					<div class="arr-l">&nbsp;</div>
					<div class="arr-r">&nbsp;</div>
				</div>
				<div id="my-gift" class="cols-item fore2">
					<div class="mt">我的礼包</div>
					<div class="my-gift mc">
						<ul class="gift-con">
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sj-gift-open.gif" src="/widget/menu/images/sj-gift.gif"></a>
								<div class="gift-name">升级礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sr-gift-open.gif" src="/widget/menu/images/sr-gift.gif"></a>
								<div class="gift-name">生日礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/xr-gift-open.gif" src="/widget/menu/images/xr-gift.gif"></a>
								<div class="gift-name">新人礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sj-gift-open.gif" src="/widget/menu/images/sj-gift.gif"></a>
								<div class="gift-name">升级礼包2</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sr-gift-open.gif" src="/widget/menu/images/sr-gift.gif"></a>
								<div class="gift-name">生日礼包2</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/xr-gift-open.gif" src="/widget/menu/images/xr-gift.gif"></a>
								<div class="gift-name">新人礼包2</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sj-gift-open.gif" src="/widget/menu/images/sj-gift.gif"></a>
								<div class="gift-name">升级礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sr-gift-open.gif" src="/widget/menu/images/sr-gift.gif"></a>
								<div class="gift-name">生日礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/xr-gift-open.gif" src="/widget/menu/images/xr-gift.gif"></a>
								<div class="gift-name">新人礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sj-gift-open.gif" src="/widget/menu/images/sj-gift.gif"></a>
								<div class="gift-name">升级礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sr-gift-open.gif" src="/widget/menu/images/sr-gift.gif"></a>
								<div class="gift-name">生日礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/xr-gift-open.gif" src="/widget/menu/images/xr-gift.gif"></a>
								<div class="gift-name">新人礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sj-gift-open.gif" src="/widget/menu/images/sj-gift.gif"></a>
								<div class="gift-name">升级礼包2</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sr-gift-open.gif" src="/widget/menu/images/sr-gift.gif"></a>
								<div class="gift-name">生日礼包2</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/xr-gift-open.gif" src="/widget/menu/images/xr-gift.gif"></a>
								<div class="gift-name">新人礼包2</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sj-gift-open.gif" src="/widget/menu/images/sj-gift.gif"></a>
								<div class="gift-name">升级礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sr-gift-open.gif" src="/widget/menu/images/sr-gift.gif"></a>
								<div class="gift-name">生日礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/xr-gift-open.gif" src="/widget/menu/images/xr-gift.gif"></a>
								<div class="gift-name">新人礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sj-gift-open.gif" src="/widget/menu/images/sj-gift.gif"></a>
								<div class="gift-name">升级礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sr-gift-open.gif" src="/widget/menu/images/sr-gift.gif"></a>
								<div class="gift-name">生日礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/xr-gift-open.gif" src="/widget/menu/images/xr-gift.gif"></a>
								<div class="gift-name">新人礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sj-gift-open.gif" src="/widget/menu/images/sj-gift.gif"></a>
								<div class="gift-name">升级礼包2</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sr-gift-open.gif" src="/widget/menu/images/sr-gift.gif"></a>
								<div class="gift-name">生日礼包2</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/xr-gift-open.gif" src="/widget/menu/images/xr-gift.gif"></a>
								<div class="gift-name">新人礼包2</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sj-gift-open.gif" src="/widget/menu/images/sj-gift.gif"></a>
								<div class="gift-name">升级礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/sr-gift-open.gif" src="/widget/menu/images/sr-gift.gif"></a>
								<div class="gift-name">生日礼包</div>
							</li>
							<li class="li-item">
								<a href="javascript:;"><img alt="" opensrc="/widget/menu/images/xr-gift-open.gif" src="/widget/menu/images/xr-gift.gif"></a>
								<div class="gift-name">新人礼包</div>
							</li>
						</ul>
					</div>
					<div class="gift-tip">
						<div class="tip-box">
							<div style="left:19px" class="tip-arr"></div>
							<div onclick="$('.menu-tip').remove()" class="tip-close">×</div>
							<div class="tip-cont">
								<div class="tip-txt">
									填写/确认生日信息且验证手机后~您生日时将会受到一份生日惊喜~ 确认生日后记得要点击“提交”按钮哦~
								</div>
								<div class="btn-con">
									<a class="btn-9 mr10" href="">去确认我的生日</a>
									<a class="btn-9" href="">去验证手机</a>
								</div>
							</div>
						</div>
					</div>
					<div class="gift-lihua"></div>
					<div class="arr-l">&nbsp;</div>
					<div class="arr-r">&nbsp;</div>
				</div>
				<div id="my-medal" class="cols-item fore3">
					<div class="mt">我的勋章</div>
					<div class="my-medal mc">
						<ul class="medal-con">
							<li class="li-item"><a class="KPSZ1" xzid="KPSZ1" ftit="XXXXXXXX" href="#none"><s></s></a></li>
							<li class="li-item"><a class="NBYNZ1" xzid="NBYNZ1" ftit="XXXXXXXX" href="#none"><s></s></a></li>
							<li class="li-item"><a class="i1" xzid="i1" ftit="XXXXXXXX" href="#none"><s></s></a></li>
							<li class="li-item"><a class="i2" xzid="i2" ftit="XXXXXXXX" href="#none"><s></s></a></li>
							<li class="li-item"><a class="i3" xzid="i3" ftit="XXXXXXXX" href="#none"><s></s></a></li>
							<li class="li-item"><a class="i4" xzid="i4" ftit="XXXXXXXX" href="#none"><s></s></a></li>
							<li class="li-item"><a class="ibaitiao" xzid="ibaitiao" ftit="XXXXXXXX" href="#none"><s></s></a></li>
						</ul>
					</div>
					<div class="arr-l">&nbsp;</div>
					<div class="arr-r">&nbsp;</div>
				</div>
			</div>
		</div>
	#end
#end

<!-- /user-info -->