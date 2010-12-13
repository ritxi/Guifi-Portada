$.fn.multiSlide = function(settings){
    settings = $.extend({
            images:'.images',
            texts:'.texts',
            view:'.view',
            elements:'li',
            navigators:'.left,.right',
            start:0
            },settings);
    var container = $(settings.texts);
    var elements = container.find(settings.elements);
    var current = settings.start;
    var navigators = new Array();
    var settings2 = new Array();
    this.scrollTo(elements[current],settings);
    if(navigators) {
        if(navigators[0]) {
            this.find(navigators[0]).click(function(){
                if(current <= 0) current = elements.length - 1;
                else current--;
                this.scrollTo(elements[current],settings2);
            });
        }
        if(navigators[1]) {
            this.find(navigators[1]).click(function(){
                if(current >= elements.length - 1) current = 0;
                else current++;
                this.scrollTo(elements[current],settings2);
            });
        }
    }
};
