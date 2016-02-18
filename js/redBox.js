jQuery(function(){
	$('#bone').on('click',function(){
		$(this).addClass('act');
		$('#btwo').removeClass('act');
		$('#tone').show();
		$('#ttwo').hide();	
	})
	$('#btwo').on('click',function(){
		$(this).addClass('act');
		$('#bone').removeClass('act');
		$('#tone').hide();
		$('#ttwo').show();	
	});
})
$.fn.extend({
	//起名字要用json
	showBox:function(options){
		var defaults = {
			iH :$(document).height(),
			fn : null 
		}
		var options = $.extend(defaults,options);
		return this.each(function(){
			var o = options;
			var obj = $(this);
			var colose = obj.children('img');
			var prevDiv = obj.prev();
			prevDiv.css('height',o.iH).show();
			obj.slideDown()
			colose.unbind('click');
			colose.click(function(){
				obj.hide()&&prevDiv.hide();
				o.fn && o.fn();
			});
		});
	}
});