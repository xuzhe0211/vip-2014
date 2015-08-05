seajs.use(['jdf/1.0.0/ui/switchable/1.0.0/switchable'],function(switchable){
	$('#slider').switchable({
		type:'slider',
		hasPage:true,
		navItem:'ui-switchable-item',
		navSelectedClass:'curr',
		mainClass:'ui-switchable-panel',
		contentClass:'ui-switchable-panel-main',
		bodyClass:'ui-switchable-panel-body',
		speed:600
		// autoPlay:true
	});
});