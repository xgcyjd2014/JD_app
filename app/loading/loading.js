window.onload = function() {

    var  width = window.innerWidth;
    var  scrollValue = 0, prevscrollValue;
    var oInner = document.querySelector("#frame .inner");
    var oAction = document.querySelectorAll(".btn-action");
    var pages = document.querySelectorAll("#frame .inner .page");
    var item = document.querySelectorAll(".page-item .item");

    
    // setWidth
    (function () {
        for( var i = 0; i<pages.length; i++){
            pages[i].setAttribute('style','width:'+width+'px;'+'left:'+i*width+'px;');
        }
    })();

  
    // scroll
    function scrollPage(val) {
        oInner.style.transform = "translate3d(" + (val)*width +"px,0,0)";
    }

    // add Animate
    function addAnimate(val) {
        var index = Math.abs(val);
        pages[index].className += " page" + index + "-animate";
       
    }

    function itemChange(val, prev) {
        
        var index = Math.abs(val);
        var prev = Math.abs(prev);

        item[index].className += " active";
        item[prev].className = "item";
    }


    

    //  touchMove
    touch.on('.page', "swipeleft swiperight", function(ev) {
        
            if(ev.type == 'swipeleft') {
                if(scrollValue > -3) {
                    prevscrollValue = scrollValue--;                    
                }
            } else if(ev.type == 'swiperight') {
                if(scrollValue < 0) {
                    prevscrollValue = scrollValue++;
                }
            }

            scrollPage(scrollValue);
            itemChange(scrollValue, prevscrollValue);
            addAnimate(scrollValue);
    });

    //  touchToLogin
    touch.on(oAction, 'tap', function(ev) {
        api.openWin({
            name: "login",
            url: "../login.html",
            slidBackEnabled:false,
            pageParam : {}
        });
    });


    function getStyle( obj, attr ) {
        return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
    }
};