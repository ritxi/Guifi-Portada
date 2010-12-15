$.fn.multiSlide = function(settings){
    settings = $.extend({
            images:'.images',
            texts:'.texts',
            view:'.view',
            elements:'li',
            navigators:'.left,.right',
            start:0,
            textDuration:'slow',
            imageDuration:'slow'
            },settings);
    var images = $($(this).find(settings.images)[0]).find("img");
    var texts = $(settings.texts)[0];
    var n_elements = $(texts).find(settings.elements).length;
    var current = settings.start;
    var navigators = new Array();
    navigators = settings.navigators.split(',');
    function goTo(target) {
        $(texts).animate({marginLeft:(-910*target)+'-910px'},settings.textDuration);
        var current_image =images[current];
        var target_image = images[target];
        $(target_image).css({"opacity":1,"z-index":2});
        $(current_image).animate({opacity:0},settings.imageDuration,function(){
            $(target_image).css("z-index",3);
            $(current_image).css("z-index",2);
        });
        current = target;
    }
    if(navigators) {
        if(navigators[0]) {
            this.find(navigators[0]).click(function(){
                if(current <= 0) goTo(n_elements - 1);
                else goTo(current - 1);
            });
        }
        if(navigators[1]) {
            this.find(navigators[1]).click(function(){
                    if(current >= n_elements - 1) goTo(0);
                else goTo(current + 1);
            });
        }
    }
};
