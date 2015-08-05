seajs.use(['jdf/1.0.0/ui/switchable/1.0.0/switchable'],function(switchable){
	$('.slider').switchable({
		type:'focus',
		navItem:'ui-slider-trigger',
		navSelectedClass:'curr',
		mainClass:'.ui-wrap ul li',
		autoPlay:true,
		stayTime:5000
	})
}); 