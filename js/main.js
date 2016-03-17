var offsetFromTop = 0;

$(document).ready(function(e){
    
    var fontTargets = ['h1','h2','h3','h4','h5','p'];
    var arrayLength = fontTargets.length;
    $('.text-increase .decrease').on("click",function(){
        for (var i = 0; i < arrayLength; i++) {
            var element = fontTargets[i];
            $('.font-resize '+element).each(function(){
                var $this = $(this);
                var fontSize = $this.css('font-size');
                fontSize = parseInt(fontSize);
                
                if(element === 'p' && fontSize > 10){
                    $this.css('font-size', --fontSize);
                }
                
                if(element === 'h2' && fontSize > 26){
                    $this.css('font-size', --fontSize);
                }
            });
        }
    });
    
    $('.text-increase .reset').on("click",function(){
        for (var i = 0; i < arrayLength; i++) {
            var element = fontTargets[i];
            $('.font-resize '+element).each(function(){
                var $this = $(this);
                   
                if(element === 'p'){
                    $this.css('font-size', 14);
                }
                
                if(element === 'h2'){
                    $this.css('font-size', 30);
                }
            });
        }
    });
    
    $('.text-increase .increase').on("click",function(){
        for (var i = 0; i < arrayLength; i++) {
            var element = fontTargets[i];
            $('.font-resize '+element).each(function(){
                var $this = $(this);
                var fontSize = $this.css('font-size');
                fontSize = parseInt(fontSize);
                
                if(element === 'p' && fontSize < 18){
                    $this.css('font-size', ++fontSize);
                }
                
                if(element === 'h2' && fontSize < 34){
                    $this.css('font-size', ++fontSize);
                }
            });
        }
    });
});
