(function(e){e(".entry").each(function(t){e(this).find("img").each(function(){var n=this.alt;n&&e(this).after('<span class="caption">'+n+"</span>"),e(this).wrap('<a href="'+this.src+'" title="'+n+'" class="fancybox" rel="gallery'+t+'" />')})});var t=function(e,t,n){var i=e.width();t.imagesLoaded(function(){var t=this[0],o=t.naturalWidth,a=t.naturalHeight;n(),this.animate({opacity:1},500),e.animate({height:i*a/o},500)})};e(".gallery").each(function(){var n=e(this),i=0,o=n.children(".photoset").children(),a=o.length,r=!0;t(n,o.eq(0),function(){r=!1}),n.on("click",".prev",function(){if(!r){var e=(i-1)%a;r=!0,t(n,o.eq(e),function(){o.eq(i).animate({opacity:0},500),r=!1,i=e})}}).on("click",".next",function(){if(!r){var e=(i+1)%a;r=!0,t(n,o.eq(e),function(){o.eq(i).animate({opacity:0},500),r=!1,i=e})}})})})(jQuery);