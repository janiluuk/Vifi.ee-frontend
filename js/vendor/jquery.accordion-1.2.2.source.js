(function($){ 
     $.fn.extend({  
         accordion: function() {       
            return this.each(function() {
				if($(this).data('accordiated'))
					return false;									
				$.each($(this).find('ul, li>div'), function(){
					$(this).data('accordiated', true);
					$(this).hide();
				});
				$.each($(this).find('a:not(.foo)'), function(){
					$(this).click(function(e){
						activate(e.target);
						return void(0);
					});
				});
				
				var active = false;
				if($(this).find('li.current'))
					active = $(this).find('li.current a')[0]; 
				
				if(active){
					activate(active, 'toggle','parents');
					$(active).parents().show();
				}
				
				function activate(el,effect,parents){
					$(el)[(parents || 'parent')]('li').toggleClass('active').siblings().removeClass('active').children('ul, div').slideUp('fast');
					$(el).siblings('ul, div')[(effect || 'slideToggle')]((!effect)?'fast':null);
				}
				
            });
        } 
    }); 
})(jQuery);