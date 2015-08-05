<!-- list-activity-->
	<div class="list-act-wrap">
		<ul class="clearfix">
			#foreach( $act in $allActivity )
			<li>
				<div class="item">
					<div class="l-col">
						<div class="act-img">
							<a href="$act.act-link"><img src="$act.act-img" alt="$act.act-name"></a>
						</div>
					</div>
					<div class="r-col">
						<div class="act-tag ftx-04">[评测试用]</div>
						<div class="act-name"><a href="$act.act-link">$act.act-name</a></div>
						<div class="act-join ftx-03"><strong class="ftx-04">$act.act-joinnum</strong>人参与</div>
						<div class="act-op">
							<a href="#none" class="btn-9">查看详情</a>
						</div>
					</div>
				</div>
			</li>
			#end
		</ul>
	</div>
<!-- /list-activity -->