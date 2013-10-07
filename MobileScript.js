$(function() {

//if(navigator.userAgent.match(/iPhone/i)||
//    navigator.userAgent.match(/Android/i)||
//    navigator.userAgent.match(/BlackBerry/i)||
//    navigator.userAgent.match(/BB10/i)||
//    window.innerWidth <= 480) {
    

    //$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');

    // Touch events
    (function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));

    // Here is the page tracker which will tell us whether or not the page is a BussinessHomePage, MainHomePage, MainnArticlePage, or BusinessArticlePage.
    //_gppLayout

    // use the tampermonkey/greasemonkey API to add global styles to the page
    var global =
        '* {' +
        'height: auto;' +
        'top: 0;' +
        'bottom: 0;' +
        'left: 0;' +
        'right: 0;' +
        'word-wrap: normal;' +
        'padding: 0;' +
        'margin: 0;' +
        'min-width: 0;' +
        'min-height: 0;' +
        'border: 0;' +
        '}' +
        '#facilitiesList div.icon {' +
        'display: none;' +
        '}' +
        '#facilitiesList div.plant {' +
        'width: 100%;' +
        'border-top: 1px dotted #666 !important;' +
        '}' +
        '#facilitiesList div.info {' +
        'width: 100% !important;' +
        'border-top: 1px dotted !important;' +
        'padding-top: 2px !important;' +
        'padding-bottom: 2px !important;' +
        'background-color: #eee;' +
        '}' +
        '#facilitiesList div.info:first-child {' +
        'border-top: 1px solid black !important;' +
        '}' +
        '#facilitiesList div.info:last-child {' +
        'border-bottom: 1px dotted !important;' +
        '}' +
        '#facilitiesList div.info span {' +
        'font-weight: bold;' +
        '}' +
        '#businessUnit {' +
        'height: 20px !important;' +
        'font-size: 1.2em !important;' +
        '}' +
        'div.plantDetailImg {' +
        'margin-left: auto;' +
        'margin-right: auto;' +
        '}' +
        '#countryFilter {' +
        'font-size: 1.2em;' +
        '}' +
        '#countryFilter li {' +
        'width: 50%;' +
        'display: inline-block;' +
        '}' +
        '#countryFilter li a {' +
        'width: 100% !important;' +
        'padding-right: 0 !important;' +
        'padding-left: 0 !important;' +
        '}' +
        'div#facilitiesDetails {' +
        'padding-bottom: 5px;' +
        'padding-top: 5px;' +
        'margin-left: auto;' +
        'width: 100%;' +
        '}' +
        'b {' +
        'font-weight: bold;' +
        '}' +
        '.copyright {' +
        'padding: 10px 0 5px;' +
        '}' +
        '#sliderShow {' +
        'position: relative;' +
        'overflow: hidden;' +
        'width: 100%;' +
        'height: 175px;' +
        '/*border: 1px solid black;*/' +
        '/*border-right-style: none;*/' +
        '/*border-left-style: none;*/' +
        '}' +
        '#sliderShow .content{' +
        'background-size: cover;' +
        'background-repeat: no-repeat;' +
        'background-position: center center;' +
        'width: 100%;' +
        'height: 100%;' +
        '}' +
        '#sliderShow h3 {' +
        'font-size: 1.5em;' +
        'top: initial;' +
        'position: absolute;' +
        'height: 90px;' +
        'margin-top: -45px;' +
        'padding: 15px 10px 0;' +
        'color: white;' +
        'text-shadow: -1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black;' +
        '}' +
        '.control {' +
        'vertical-align: middle;' +
        'color: white;' +
        'font-weight: bolder;' +
        'line-height: 175px;' +
        'float: left;' +
        'font-size: 2em;' +
        'text-shadow: 1px 1px 2px black;' +
        'width: 12.5%;' +
        '}' +
        '.control:hover {' +
        'background-color: rgba(0, 0, 0, .15);' +
        '}' +
        '.control-right {' +
        'float: right;' +
        '}' +
        '.pager {' +
        'overflow: hidden;' +
        'position: absolute;' +
        'top: initial;' +
        'bottom: 5px;' +
        'left: initial;' +
        'right: 5px;' +
        '}' +
        '.pager .page {' +
        'display: inline-block;' +
        'margin-left: 5px;' +
        'width: 10px;' +
        'height: 10px;' +
        'border-radius: 50%;' +
        'border: 1px solid gray;' +
        'background-color: lightgray;' +
        '}' +
        '.pager .active {' +
        'background-color: lightblue;' +
        '}' +
        '.disable-select {' +
        '-webkit-touch-callout: none;' +
        '-webkit-user-select: none;' +
        '-khtml-user-select: none;' +
        '-moz-user-select: none;' +
        '-ms-user-select: none;' +
        'user-select: none;' +
        '}' +
        '.biz-unit li {' +
        'background-color: rgb(52, 52, 52);' +
        '}' +
        '.dna {' +
        'width: 100%;' +
        '}';


    var addGlobalStyle;
    if (window.GM_addStyle === undefined) {
        // source: http://somethingididnotknow.wordpress.com/2013/07/01/change-page-styles-with-greasemonkeytampermonkey/
        addGlobalStyle = function(css) {
            var head, style;
            head = document.getElementsByTagName('head')[0];
            if (!head) {
                return;
            }
            style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = css;
            head.appendChild(style);
        };
    } else {
        addGlobalStyle = GM_addStyle;
    }

    addGlobalStyle(global);

    $('*')
        .not('#countryFilter *, #facilitiesDetails, #facilitiesDetails *, .dna')
        .css({
            'width': '100%',
            'height': 'auto',
            'top': '0',
            'left': '0',
            'right': '0',
            'word-wrap': 'normal',
            'bottom': '0',
            'max-width': '100%',
            'padding': '0',
            'margin': '0',
            'min-width': '0',
            'min-height': '0',
            'border-width': '0'
        });


    $('.ms-hidden').hide();

    // Inserts the About Us, Our DNA, Locations, and Contact Us within only the Home page.
    if (window.location.href.toLowerCase().indexOf('home') !== -1) {

        // Styling for the individual li, basically making the background for the text to be displayed in
        $('nav.main div div ul li').css({
            'background-color': '#0068a6',
            'padding-left': '5px',
            'width': '100%',
            'margin-top': '1px',
            'margin-bottom': '2px',
            'border-top': '1px solid black',
            'border-bottom': '1px solid black'
        });

        // Change to the cursor to hover for each li.
        $('nav.main div div ul li').hover(function(){
            $(this).css({
                'cursor': 'pointer'
            });
        })

        // Remove underline during hover for anchors
        $('nav.main div div ul li a').hover(function(){
            $(this).css({
                'text-decoration': 'none'
            })
        })

        // The text within the individual li's background
        $('nav.main div div ul li a span span').css({
            'font-size': '18px',
            'color': '#ffffff',
            'font-weight': 'normal',
            'text-shadow': '-1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black'
        });
        

        // Add both the background and text to the content container at the start.
        $('#contentContainer').prepend($('nav.main div div ul'));
    }


    // GP Cellulose
    $('.logo').css({
        'padding-bottom': '5px'
    });
    $('img')
        .not('#facilitiesDetails *')
        .css({
            'display': 'block',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'padding-top': '5px',
            'width': 'auto',
            'height': 'auto'
        });

    // Search bar input
    $('#sharePointSearch input').css({
        'height': '22px',
        'position': 'relative',
        'min-width': '100%'
    });

    // Search bar image
    $('.srch-gosearchimg').css({
        'max-width': '',
        'width': '24px',
        'height': '22px'
    });

    // Append the search to the top of the page.
    $('<li></li>').append($('#sharePointSearch').css({
        'padding-bottom': '2px'
    })).appendTo('.biz-unit div div ul');

    // This is the toggleable menu button at the top of the page which is prepended to the entire nav menu.
    var menuHeader =
        $('<li id="myMenuHeader" class="static" style="width: 100%; border: 0; padding: 0; position: relative;">' +
            '<img id="menuGPLogo" title="View Menu" src="http://i.imgur.com/ClaAe3H.png" style="height: 20px; float: left; position: absolute; left: 20px; right: initial; top: 10px;" />' +
            '<a style="padding: 0; font-weight: bold; font-size: 1.25em !important; background-image: url(/_layouts/Images/GPPWebsiteBase/global/navback.jpg) !important;" class="static menu-item" href="#">' +
            '<span id="menuViewBtn" title="View Menu">Menu</span>' +
            '<img id="menuSearchBtn" title="Search" src="http://i.imgur.com/sJD6kN6.png" style="height: 20px; position: absolute; left: initial; right: 20px; top: 10px;" />' +
            '</a>' +
            '</li>');   

    // When a user clicks the MENU text or GP Logo, toggle the menu and hide the search.
    // When a user clicks on the search, toggle the search and hide the menu.
    menuHeader.click(function(event) {
        var header = $('.biz-unit ul li');

        if($(event.target).is("#menuSearchBtn")){
            header.last().toggle();
            // Not the last and not the first.
            header.slice(1, -1).hide();
        } else{
            header.slice(1, -1).toggle();
            header.last().hide();
        }
    });

    $('.biz-unit div div ul').prepend(menuHeader);

    // Header Nav
    $('.biz-unit a').css({
        'font-size': '1em',
        'float': 'none',
        'border': '0',
        'width': '100%',
        'background-image': 'none',
        'color': '#ffffff'
    });

    // Left aligns the text in the navbar
    $('nav.biz-unit ul li a span span').css({
        'position': 'relative',
        'left': '15px',
        'text-align': 'left'
    });

    // Add a black border to the bottom of each li in the navbar
    $('nav.biz-unit ul li').css({
        'border-bottom': '1px solid black'
    });

    // Remove some odd spacing from beneath the logo which could be potential waste of another repositioning. (the logo of GP Cellulose)
    $('#subNav nav.main').remove();

    // Cellulose, our DNA, products, tech services, news and events, ...
    $('.butabnav li a').css({
        'font-size': '18px',
        'background-color': '#0068a6',
        'color': '#ffffff',
        'margin-top': '1px',
        'margin-bottom': '1px',
        'padding-left': '5px',
        'font-weight': 'normal',
        'text-shadow': '-1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black'
    });

    // Rail section - which is basically the 'ads' which float:right default
    $('#rail a span').css({
        'font-size': '14px',
        'background-color': '#0068a6',
        'padding': '5px',
        'color': '#ffffff',
        'margin-top': '1px',
        'margin-bottom': '1px',
        'font-weight': 'normal'
    });

    // Make background colors green if on cellulose page, otherwise blue
    if (window.location.href.toLowerCase().indexOf('cellulose') !== -1) {
        $('.butabnav li a').css({
            'background-color': '#2e8a27',
            'border-top': '1px solid black',
            'border-bottom': '1px solid black'
        });

        // removes all pipe characters from main content section
        //  page: http://www.gppackaging.com/Cellulose/Pages/Products.aspx
        $('#sub-content div div')
            .each(function() {
                $(this).html($(this).html().replace(/\|*/g, ""));
                $(this).html($(this).html().replace(/&nbsp;*/g, ""));
            });
    } else {
        $('.butabnav li a').css({
            'background-color': '#0068a6',
            'border-top': '1px solid black',
            'border-bottom': '1px solid black'
        });
    }

    // Inserts a break after 'Find a Location' because the CSS margin/padding for the bottom is -extremely- hard to edit
    $('#rail div div p a span')
        .parent()
        .parent()
        .after('<div style="height: 5px">&nbsp;</div>');

    // Remove placeholder img within logo since it's empty
    $('#logo img').hide();

    // Readjust the capabilities container to be after content and before rail.
    $('#capabilitiesContainer').appendTo('#BUlogo');

    // Readjust the sub-content container to be after content and before rail.
    $('#sub-content').appendTo('#BUlogo');

    // Readjust rail to be after content since rail is float:right in the default styling and comes first in the styling.
    $('#rail').appendTo('#sub-content');
    $('#rail').appendTo('#BUlogo');

    // Reset Explore Our Products / Find Out About our Technical Services
    $('.tabs li a').css({
        'display': 'inline',
        'float': 'none'
    });

    // Add some padding to the top of the capabilities container.
    $('#capabilitiesContainer').css({
        'padding-top': '5px'
    });

    // Add some padding to the top of the BUlogo container.
    $('#BUlogo').css({
        'padding-top': '5px'
    });

    // Add some padding to the top of the Rail container.
    $('#rail').css({
        'padding-top': '5px'
    });

    // Explore our products, find out about our technical services
    $('#capabilitiesContainer a').css({
        'font-size': '14px',
        'background-color': '#0068a6',
        'padding': '5px',
        'color': '#ffffff',
        'font-weight': 'normal'
    });

    // Explore Our Products > at the bottom of the page.
    $('#capabilitiesContainer a span').css({
        'font-size': '14px',
        'padding': '5px',
        'background-color': '#0068A6',
        'color': '#ffffff',
        'margin-top': '1px',
        'margin-bottom': '1px',
        'font-weight': 'normal'
    });

    $('#portfolio1, #portfolio2, #portfolio3, #portfolio4, #portfolio5, #portfolio6').css({
        'background-color': 'transparent'
    });

    // Add a div as padding after 
    $('#capabilitiesContainer a span').parent().after('<div style="height: 10px;">&nbsp;</div>');
    $('#capabilitiesContainer ul li').css({'padding': '', 'margin-bottom': '10px'});

    // Remove default breaking tag after bottom image on Cellulose page, which they originally used to separate the caption beneath it from the image.
    $('#portfolio1 img + br').remove();

    // For some reason there are stray > hyperlinks which point to different sites and are different than their nearby hyperlinks;
    // we will remove them completely for now.
    $('a span').each(function() {
        if ($(this).text() === '›') {
            $(this).parent().remove();
        }
    });

    // For some reason there are empty span tags inside of hyperlinks which point to nothing;
    // we will remove them completely for now.
    $('p a span').each(function() {
        if ($(this).text() === '') {
            var $this = $(this);
            $this.parent().after('<div style="height: 5px;">&nbsp;</div>'); // Adds some spacing
            $this.remove();
        }
    });

    // Remove any breaking tag within an anchor, because it certainly doesn't make sense to have it.
    // this could potentially be overzealous for a selector and we may have to reduce it down to be more specific
    $('a br').remove();

    // <br> tags are necessary in the address section of 
    $('br')
        .not('#facilities br')
        .replaceWith('<div style="padding-top: 10px;"></div>');

    $('.sitemap, .copyright').css({
        'font-size': '16px'
    });

    $('img, :header').css({
        'text-align': 'center'
    })

   // TODO...
   // $('#BUlogo, #BUlogo *').not($('a, :header, img')).css({
   //     'text-align': 'left',
   //     'padding-left': '5px'
   // });

    // By default, the header should collapse on the page load - at least for now.
    menuHeader.click();

    // By default, hide the search bar in the menuHeader.
    $('.biz-unit ul li').last().hide();


    // map formatting
    var mapContainer = $('#mapContainer');
    if (mapContainer.length > 0) {
        // remove the legend from the map
        $('#mapLegend').hide();
        $('#map_canvas').hide();

        // remove extra elements from facilities list
        var facilities = $('#facilities'),
            facilitiesList = facilities.find('#facilitiesList'),
            showSimilar = facilitiesList.find('a[name=showGroup]'),
            businessUnit = $('#businessUnit'),
            countries = $('#countryFilter a.country');

        if (facilities.length > 0) {
            facilities
                .find('#facilityHeader1')
                .hide();
            facilities
                .find('#facilityHeader2')
                .hide();

            formatFacilitiesList();

            // bind reformat events
            businessUnit.change(formatFacilitiesList);
            countries.click(formatFacilitiesList);
            facilitiesList.on('click', 'a[name=showGroup]', formatFacilitiesList);
        }

        $('#rail').remove();
        facilitiesList.insertAfter('#facilitiesDetails');
    }

    function formatFacilitiesList() {

        // for some reason it doesn't work without this...
        setTimeout(function() {

            var info = facilitiesList
                .find('.info');

            info.find('br').each(function(elem) {
                var $this = $(this),
                    next;
                while (next = $this.next()) {
                    if (next.is('br'))
                        next.remove();
                    else
                        break;
                }
            });

            info
                .appendTo(facilitiesList);

            facilitiesList
                .find('.plant')
                .remove();
        }, 0);
    }

    // hide original slider. creates empty space
    $('#heroContainer *:not(.dna)').hide();

    var sliderShow = (function() {
        // Populate the rotator
        var sliderShow = $('<div id="sliderShow">' +
            '<div class="content"></div><div class="pager"></div>' +
            '</div>'),
            sliderDataStore = [],
            // slide index will be incremented to 0 in 'start' function
            currentSlide = -1,
            // configuration options for swipe gestures
            swipeOptions = {
                //Generic swipe handler for all directions
                swipe: function(event, direction, distance, duration, fingerCount) {
                    if (event.which === 1) {
                        if (distance > config.swipe.thresholdMax) {
                            switch (direction) {
                                case 'left':
                                    prevSlide();
                                    break;
                                case 'right':
                                    nextSlide();
                                    break;
                                default:
                                    break;
                            }
                            resetSlideTimer();
                        } else if (distance < config.swipe.thresholdMin) {
                            top.location.href = sliderDataStore[currentSlide].Link;
                        }
                    }
                },
                //Default is 75px, set to 0 for demo so any distance triggers swipe
                threshold: 0
            },
            config = {
                animate: {
                    speed: 100,
                    interval: 5000
                },
                swipe: {
                    thresholdMax: 75,
                    thresholdMin: 3,
                    options: {

                    }
                }
            },
            slideTimer,
            pager;

        sliderShow
            .swipe(swipeOptions);

        $('#slideShow div.rotator ul.cycle li').each(function() {
            $this = $(this);

            sliderDataStore.push({
                'Title': $this.find('h1').text(),
                'Link': $this.find('a').attr('href'),
                'Text': $this.find('p').text(),
                'Image': $this.find('img').attr('src')
            });
        });

        return {
            nextSlide: nextSlide,
            prevSlide: prevSlide,
            start: start,
            stop: stop,
            initialize: initialize
        };

        function initialize(target) {
            pager = $('<div></div>').addClass('pager');
            for (var i = 0; i < sliderDataStore.length; ++i)
                pager.append($('<div></div>').addClass('page'));
            pager.appendTo(sliderShow);

            sliderShow.insertAfter(target);
            nextSlide();
        }

        function start(target) {
            resetSlideTimer();
        }

        function stop() {
            clearInterval(slideTimer);
        }

        function resetSlideTimer() {
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, config.animate.interval);
        }

        function nextSlide() {
            if (++currentSlide >= sliderDataStore.length)
                currentSlide -= sliderDataStore.length;
            goToSlide(currentSlide);
        }

        function prevSlide() {
            if (--currentSlide < 0)
                currentSlide += sliderDataStore.length;
            goToSlide(currentSlide);
        }

        function goToSlide(index) {
            var slideContent = $('#sliderShow .content');
            slideContent
                .fadeOut(config.animate.speed, function() {
                    slideContent.replaceWith(getSlide(index))
                    .fadeIn(config.animate.speed);
                    pages = pager.find('.page');
                    pages.removeClass('active');
                    $(pages[index]).addClass('active');
                });
        }

        function getSlide(index) {
            var data = sliderDataStore[index],
                slide = $(
                    '<div class="content" style="overflow: hidden;">' +
                    '<h3>' +
                    data.Title +
                    '</h3>' +
                    // '<p>' +
                    // 'Text Goes Here Text Goes Here Text Goes Here Text Goes Here Text Goes Here Text Goes Here Text Goes Here Text Goes Here Text Goes Here Text Goes Here Text Goes Here Text Goes Here' +
                    // '</p>' +
                    '</div>');

            return slide
                .css({
                    'background-image': 'url(' + data.Image + ')'
                });
        }
    })();

    // If the page is the home page or a default page, we should display the slider.
    // We may end up changing this to include _gppLayout.  TODO?
    if (window.location.href.toLowerCase().indexOf('home') !== -1 || window.location.href.toLowerCase().indexOf('default') !== -1) {
        sliderShow.initialize('.dna');
        sliderShow.start();
    }


//} // END USER-AGENT CHECK

});
