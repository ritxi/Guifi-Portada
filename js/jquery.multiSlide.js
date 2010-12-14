$.fn.multiSlide = function(settings){
    settings = $.extend({
            images:'.images',
            texts:'.texts',
            view:'.view',
            elements:'li',
            navigators:'.left,.right',
            start:0,
            duration:'slow'
            },settings);
    var container = $(settings.texts)[0];
    var elements = $(container).find(settings.elements);
    var current = settings.start;
    var navigators = new Array();
    navigators = settings.navigators.split(',');
    function goTo(n) {
        $(container).animate({marginLeft:(-910*n)+'-910px'},settings.duration);
    }
    if(navigators) {
        if(navigators[0]) {
            this.find(navigators[0]).click(function(){
                if(current <= 0) current = elements.length - 1;
                else current--;
                goTo(current);
            });
        }
        if(navigators[1]) {
            this.find(navigators[1]).click(function(){
                if(current >= elements.length - 1) current = 0;
                else current++;
                goTo(current);
            });
        }
    }
};
