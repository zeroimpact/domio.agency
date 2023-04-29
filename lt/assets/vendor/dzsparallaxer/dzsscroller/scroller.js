"use strict";function is_ios(){return-1!=navigator.platform.indexOf("iPhone")||-1!=navigator.platform.indexOf("iPod")||-1!=navigator.platform.indexOf("iPad")}function is_android(){return-1!=navigator.platform.indexOf("Android")}function is_touch_device(){return!!("ontouchstart"in window)}function is_ie(){return-1!=navigator.appVersion.indexOf("MSIE")}function is_firefox(){return-1!=navigator.userAgent.indexOf("Firefox")}function is_opera(){return-1!=navigator.userAgent.indexOf("Opera")}function is_chrome(){return/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}function is_safari(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}function version_firefox(){if(/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))return new Number(RegExp.$1)}function version_opera(){if(/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent))return new Number(RegExp.$1)}function is_ie8(){return!!(is_ie()&&version_ie()<9)}function is_ie9(){return!(!is_ie()||9!=version_ie())}function getInternetExplorerVersion(){var e=-1;if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent;null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(t)&&(e=parseFloat(RegExp.$1))}else if("Netscape"==navigator.appName){t=navigator.userAgent;null!=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(t)&&(e=parseFloat(RegExp.$1))}return e}window.dzsscr_self_options={},function(e,t){var o,n,s="";function i(t,i,a,l){t[o](s+i,"wheel"==n?a:function(t){!t&&(t=e.event);var o={originalEvent:t,target:t.target||t.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}};return"mousewheel"==n?(o.deltaY=-1/40*t.wheelDelta,t.wheelDeltaX&&(o.deltaX=-1/40*t.wheelDeltaX)):o.deltaY=t.detail,a(o)},l||!1)}e.addEventListener?o="addEventListener":(o="attachEvent",s="on"),n="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",e.addWheelListener=function(e,t,o){i(e,n,t,o),"DOMMouseScroll"==n&&i(e,"MozMousePixelScroll",t,o)}}(window,document),function($){$.fn.scroller=function(o){var defaults={type:"normal",totalWidth:void 0,totalwidth:void 0,settings_multiplier:3,settings_skin:"skin_default",settings_scrollbar:"on",settings_scrollbyhover:"off",settings_fadeoutonleave:"off",settings_replacewheelxwithy:"off",settings_refresh:0,settings_autoheight:"default",settings_autoheight_from_first_item:"off",settings_forcesameheight:"off",settings_fullwidth:"off",settings_hidedefaultsidebars:"off",settings_dragmethod:"drag",settings_autoresizescrollbar:"off",settings_slideshow:"0",scrollBg:"off",force_onlyy:"off",objecter:void 0,secondCon:null,secondCon_tw:null,secondCon_cw:null,secondCon_enable_mouse_scroll:"off",settings_scrollTop_height_indicator:null,settings_scrollTop_animate_top_instead_of_scroll:"off",settings_comHeight_surplus:0,settings_show_sidebar_on_right_side_mouse:"on",enable_easing:"off",enable_easing_for_second_con:"off",easing_duration:"1.8",easing_type:"easeInCirc",settings_disableSpecialIosFeatures:"off",touch_leave_native_scrollbar:"off",settings_enable_drag_on_desktops_too:"off",settings_makeFunctional:!1,settings_chrome_multiplier:.1,settings_safari_multiplier:.2,settings_opera_multiplier:.002,settings_ie_multiplier:.08,settings_edge_multiplier:.08,settings_firefox_multiplier:-1,replace_window_object:null,extra_html_scrollbarx:""};if(void 0===o&&void 0!==$(this).attr("data-options")&&""!=$(this).attr("data-options")){var aux=$(this).attr("data-options");aux="window.dzsscr_self_options = "+aux,eval(aux),o=$.extend({},window.dzsscr_self_options),window.dzsscr_self_options=$.extend({},{})}if(o=$.extend(defaults,o),void 0===o&&void 0!==$(this).attr("data-options")&&""!=$(this).attr("data-options")){var aux=$(this).attr("data-options");aux="var aux_opts = "+aux,eval(aux),o=aux_opts}o.settings_refresh=parseInt(o.settings_refresh,10),o.settings_multiplier=parseFloat(o.settings_multiplier),o.settings_chrome_multiplier=parseFloat(o.settings_chrome_multiplier),o.settings_firefox_multiplier=parseFloat(o.settings_firefox_multiplier),o.settings_slideshow=parseFloat(o.settings_slideshow),Math.linearTween=function(e,t,o,n){return o*e/n+t},Math.easeIn=function(e,t,o,n){return-o*(e/=n)*(e-2)+t},Math.easeOutQuad=function(e,t,o,n){return-o*(e/=n)*(e-2)+t},Math.easeInOutSine=function(e,t,o,n){return-o/2*(Math.cos(Math.PI*e/n)-1)+t},Math.easeInCirc=function(e,t,o,n){return e/=n,-o*(Math.sqrt(1-e*e)-1)+t},Math.easeInQuart=function(e,t,o,n){return o*(e/=n)*e*e*e+t},this.each((function(){var e,t,n,s,i,a,l,r,d,c,u,_=0,g=0,f=0,h=0,p=0,v=0,w=0,m=null,x=null,b=null,C=!1,y=!1,T=0,E=0,I=0,M=0,k=!1,O=!1,F=void 0,N=void 0,D=void 0,S=void 0,z=$(this),A=0,L=0,H=!1,X=!1,q=!1,Y=0,R=0,W=0,j=0,P=$(window),B=null,Q=0,V=0,G=0,U=0,Z=0,J=!1,K=!1,ee=!0,te=!0,oe=0,ne=null,se=null,ie=null,ae=0,le=0,re=0,de=0,ce=0,ue=0,_e=0,ge=0,fe=!1,he=!0,pe=!1,ve="plus",we=!1,me=!1,xe=1.8,be=0,Ce=0,ye=0,$e=0,Te=0,Ee=0,Ie=0,Me=0,ke=0,Oe=0,Fe=0,Ne=0,De=0,Se=!1,ze=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),Ae=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);if(z.hasClass("dzsscr-inited"))return!1;function Le(){me=!0}function He(){return G}function Xe(){we=!0}function qe(){if(0==me&&(o.settings_slideshow>0&&(V=null,pe&&(pe=!1,ve="plus"==ve?"minus":"plus"),"plus"==ve?M+=o.settings_slideshow:M-=o.settings_slideshow,tt()),"on"==o.enable_easing&&(is_android()||is_ios()||(te&&(Oe=Ie-($e=be),"easeIn"==o.easing_type&&(be=Number(Math.easeIn(1,$e,Oe,xe).toFixed(4))),"easeInCirc"==o.easing_type&&(be=Number(is_safari?Math.easeInCirc(1,$e,Oe,xe).toFixed(0):Math.easeInCirc(1,$e,Oe,xe).toFixed(4))),isNaN(be)&&(be=0),"normal"==o.type&&b.css({top:parseInt(be,10)}),"scrollTop"==o.type&&("on"==o.settings_scrollTop_animate_top_instead_of_scroll?P.css({top:parseInt(be,10)}):P.scrollTop(-be))),ee&&(Fe=Me-(Te=Ce),Ce=Number(Math.easeIn(1,Te,Fe,xe).toFixed(4)),"normal"==o.type&&b.css({left:parseInt(Ce,10)}),o.secondCon&&(Ne=ke-(Ee=ye),ye=Number(Math.easeIn(1,Ee,Ne,xe/1.5).toFixed(4)),isNaN(ye)&&(ye=0),"on"==o.enable_easing_for_second_con&&o.secondCon.css({left:parseInt(ye,10)})),"scrollTop"==o.type&&$(window).scrollTop(-Ce)))),ne&&ne()),we)return!1;requestAnimFrame(qe)}function Ye(){z.removeClass("scrollbar-active"),"on"==o.settings_show_sidebar_on_right_side_mouse&&A>z.offset().left+z.width()-100&&A<=z.offset().left+z.width()&&L>z.offset().top&&L<=z.offset().top+z.height()&&(clearTimeout(i),i=setTimeout(Ye,1e3),z.addClass("scrollbar-active"))}function Re(e){if(e.currentTarget==b.get(0)&&(k=!0),o.secondCon&&e.currentTarget==o.secondCon.get(0)&&(O=!0),a=b,ae=_,re=h,le=f,de=p,ce=parseInt(a.css("left"),10),ue=parseInt(a.css("top"),10),"touchstart"==e.type?(l=e.originalEvent.touches[0].pageX,r=e.originalEvent.touches[0].pageY):(l=e.pageX,r=e.pageY),fe=!0,o.settings_slideshow=0,"touchstart"!=e.type)return z.addClass("closedhand"),!1}function We(e){if(0!=fe)return ee&&(d="touchmove"==e.type?e.originalEvent.touches[0].pageX:e.pageX,(_e=ce+(d-l))>0&&(_e/=2),_e<-re+ae&&(_e-=(_e+re-ae)/2),a.css("left",_e),_e>0&&(_e=0),_e<-re+ae&&(_e-=_e+re-ae)),te&&(c="touchmove"==e.type?e.originalEvent.touches[0].pageY:e.pageY,(ge=ue+(c-r))>0&&(ge/=2),ge<-de+le&&(ge-=(ge+de-le)/2),a.css("top",ge),ge>0&&(ge=0),ge<-de+le&&(ge-=ge+de-le)),"touchmove"==e.type||(ee&&Pe(aux=_e/-(re-ae)),te&&function(e){G=e*-(p-f),I=e*(p-Y),null!=o.secondCon&&NaN*e;tt()}(aux=ge/-(de-le))),!1}function je(e){k=!1,O=!1,fe=!1,z.removeClass("closedhand")}function Pe(s,i){var a={secondCon_targetX:""};a=$.extend(a,i),V=s*-(h-_),M=s*(g-R),null!=o.secondCon&&(n=s*-(t-e)),""!=a.secondCon_targetX&&(n=a.secondCon_targetX),tt()}function Be(s){s>1&&(s/=h-_),V=s*-(h-_),M=s*(g-R),null!=o.secondCon&&(n=s*-(t-e)),tt()}function Qe(e,t){var n={show_scrollbar:!0};t&&(n=$.extend(n,t)),e>1&&(e/=p-f),G=e*-(p-f),I=e*(f-Y),null!=o.secondCon&&NaN*e,tt(n),n.show_scrollbar&&(clearTimeout(i),i=setTimeout(Ye,1e3),z.addClass("scrollbar-active"))}function Ve(){if($(window).width(),w=$(window).height(),1==o.settings_makeFunctional){var n=!1,s=document.URL,i=s.indexOf("://")+3,a=s.indexOf("/",i),l=s.substring(i,a);if(l.indexOf("a")>-1&&l.indexOf("c")>-1&&l.indexOf("o")>-1&&l.indexOf("l")>-1&&(n=!0),l.indexOf("o")>-1&&l.indexOf("z")>-1&&l.indexOf("e")>-1&&l.indexOf("h")>-1&&l.indexOf("t")>-1&&(n=!0),l.indexOf("e")>-1&&l.indexOf("v")>-1&&l.indexOf("n")>-1&&l.indexOf("a")>-1&&l.indexOf("t")>-1&&(n=!0),0==n)return}if(_=null!=o.totalWidth?o.totalWidth:z.outerWidth(!1),null!=o.totalHeight&&0!=o.totalHeight?f=o.totalHeight:0!=z.height()&&(f=z.outerHeight(!1)),g=_,"skin_luna"==o.settings_skin&&(g-=4),"on"==o.settings_autoheight_from_first_item&&(f=b.children().children().eq(0).height()),"scrollTop"==o.type&&(f=$(window).height(),p=z.outerHeight(),B&&B.outerHeight&&(p=B.outerHeight()+Q),Math.abs(p-v)>99&&(G=I/-(w-Y)*(p-w),p<v&&(p<w?(G=0,I=0):Ze())),w,v=p),null!=o.secondCon&&(null==o.secondCon_tw&&(e=_),null==o.secondCon_cw&&(t=o.secondCon.width())),is_ie()&&7==version_ie()&&z.css("overflow","visible"),"on"==o.settings_hidedefaultsidebars&&(z.css("overflow","hidden"),$("html").css("overflow","hidden")),b&&(h=b.width(),p=b.outerHeight(),b.find(".real-inner").length>0&&(h=b.find(".real-inner").outerWidth(),p=b.find(".real-inner").outerHeight(),b.css({width:h}),C&&b.height(p),b.css({}))),b&&y&&z.height(b.height()),b&&b.hasClass("calculate-inner"),"scrollTop"==o.type){"static"==z.css("position")&&!0}if("on"==o.settings_forcesameheight&&(f=p),"on"==o.scrollBg&&(p=z.height(),f=$(window).height()),te=!(p<=f),h<=_?ee=!1:(ee=!0,z.addClass("dir-hor")),"on"==o.force_onlyy&&(ee=!1),"on"==o.force_onlyx&&(te=!1),"scrollTop"==o.type&&(te=!0,p<=f&&(te=!1)),1==ee?z.addClass("dir-hor"):z.removeClass("dir-hor"),1==te?z.addClass("dir-ver"):z.removeClass("dir-ver"),0==ee&&null!=D&&(D.remove(),S.remove(),D=void 0,S=void 0),0==te&&null!=F&&(F.remove(),N.remove(),F=void 0,N=void 0),0!=te||0!=ee){z.removeClass("no-need-for-nav");if("on"==o.settings_scrollbar&&(null==F&&te&&(x.append('<div class="scrollbary_bg"></div>'),x.append('<div class="scrollbary"></div>')),null==D&&ee)){x.append('<div class="scrollbarx_bg"></div>');var r='<div class="scrollbarx">';r+="","skin_luna"!=o.settings_skin&&"skin_cerc"!=o.settings_skin||(r+='<svg class="arrow-left" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="24px" viewBox="0 0 14 24" enable-background="new 0 0 14 24" xml:space="preserve"> <path d="M14,1.996c0,0.208-0.08,0.393-0.241,0.553L4.306,12l9.454,9.451C13.92,21.611,14,21.795,14,22.004s-0.08,0.393-0.241,0.553 l-1.203,1.203c-0.16,0.16-0.345,0.24-0.553,0.24s-0.393-0.08-0.553-0.24L0.241,12.553C0.08,12.393,0,12.208,0,12 s0.08-0.393,0.241-0.553L11.45,0.24C11.61,0.08,11.795,0,12.003,0s0.393,0.08,0.553,0.24l1.203,1.203C13.92,1.603,14,1.788,14,1.996 z"/> </svg><svg class="arrow-right" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="24px" viewBox="0 0 14 24" enable-background="new 0 0 14 24" xml:space="preserve"> <path d="M14,1.996c0,0.208-0.08,0.393-0.241,0.553L4.306,12l9.454,9.451C13.92,21.611,14,21.795,14,22.004s-0.08,0.393-0.241,0.553 l-1.203,1.203c-0.16,0.16-0.345,0.24-0.553,0.24s-0.393-0.08-0.553-0.24L0.241,12.553C0.08,12.393,0,12.208,0,12 s0.08-0.393,0.241-0.553L11.45,0.24C11.61,0.08,11.795,0,12.003,0s0.393,0.08,0.553,0.24l1.203,1.203C13.92,1.603,14,1.788,14,1.996 z"/> </svg>'),r+=o.extra_html_scrollbarx,r+="</div>",x.append(r)}if(null==F&&te){if(F=x.children(".scrollbary"),N=x.children(".scrollbary_bg"),Y=F.height(),"on"==o.settings_autoresizescrollbar){r=f/p*f;F.css("height",r),Y=r}N.css("height",f),"on"==o.settings_fadeoutonleave&&(F.css("opacity",0),N.css("opacity",0)),N.mousedown((function(e){return H=!0,o.settings_slideshow=0,j=L-F.offset().top+z.offset().top,"scrollTop"==o.type&&(j=L-F.offset().top+$(window).scrollTop()),!1})),F.mousedown((function(e){return H=!0,o.settings_slideshow=0,j=L-F.offset().top+z.offset().top,"scrollTop"==o.type&&(j=L-F.offset().top+$(window).scrollTop()),!1}))}if(null==D&&ee){if(D=x.children(".scrollbarx"),S=x.children(".scrollbarx_bg"),R=D.width(),"on"==o.settings_autoresizescrollbar){r=_/h*_;D.css("width",r),R=r}S.css("width",_),"on"==o.settings_fadeoutonleave&&(D.css("opacity",0),S.css("opacity",0)),h<=_&&"on"==o.settings_fullwidth&&(D.hide(),S.hide()),D.mousedown((function(e){return X=!0,o.settings_slideshow=0,W=A-D.offset().left+z.offset().left,!1})),S.mousedown((function(e){return X=!0,o.settings_slideshow=0,!1}))}if(D&&1==ee&&(parseInt(D.css("left"))/_,"on"==o.settings_autoresizescrollbar)){r=_/h*_;D.css("width",r),R=r}if(F&&1==te&&(parseInt(F.css("top"))/f,"on"==o.settings_autoresizescrollbar)){r=f/p*f;F.css("height",r),Y=r}D&&1==ee&&S.css("width",_),D&&ee&&_>h&&"block"==D.css("display")&&(S.hide(),D.hide(),0),D&&ee&&_<h&&"none"==D.css("display")&&(S.show(),D.show(),0),F&&1==te&&N.css("height",f);tt({do_not_clear_suspend_enter_frame:"on"}),ee&&_>h&&o.settings_fullwidth}else z.addClass("no-need-for-nav")}function Ge(){G=0,I=0,tt()}function Ue(){$(window).width(),w=$(window).height(),Ve()}function Ze(e){var t=$(this);if("scrollTop"==o.type&&(t=z),!q){J=!1,K=!1;var s=e||window.event;if(s&&s.target&&z.has($(s.target)).length,T=Ke(s),E=et(s),T*=o.settings_multiplier,E*=o.settings_multiplier,ze&&(T*=o.settings_chrome_multiplier,E*=o.settings_chrome_multiplier),Ae&&(T=Ke(s),E=et(s),T*=o.settings_safari_multiplier,E*=o.settings_safari_multiplier),is_firefox()&&(T*=o.settings_firefox_multiplier,E*=o.settings_firefox_multiplier),is_opera()&&(T*=o.settings_opera_multiplier,E*=o.settings_opera_multiplier),is_ie()&&(T=0,E=Je(s),T*=o.settings_ie_multiplier,E*=o.settings_ie_multiplier),getInternetExplorerVersion()>=11&&(T=0,E=Je(s),T*=o.settings_ie_multiplier,E*=o.settings_ie_multiplier),/Edge/.test(navigator.userAgent)&&(console.warn("edge"),T=Ke(s),E=et(s),T*=o.settings_edge_multiplier,E*=o.settings_edge_multiplier),"on"==o.settings_replacewheelxwithy&&0==T&&(T=E),isNaN(T)&&(T=0),isNaN(E)&&(E=0),(z.get(0)==t.get(0)||o.secondCon&&o.secondCon.get(0)==t.get(0))&&(te&&(G+=E*o.settings_multiplier,I=G/(p-f)*-(f-Y)),ee&&(V+=T*o.settings_multiplier,M=V/(h-g)*-(g-R),null!=o.secondCon&&(null==n&&(n=0),isNaN(n)?n=Z:Z=n))),tt({animate_sc_based_on_main_scroll:"on"}),0==ee&&(J=!0),0==te&&(K=!0),0!=E&&0==K){if(0!=is_ie8())return!1;s.stopPropagation(),s.preventDefault()}if(0!=T&&0==J){if(0!=is_ie8())return!1;s.stopPropagation(),s.preventDefault()}return 0==T&&0==E||(clearTimeout(i),i=setTimeout(Ye,1e3),z.addClass("scrollbar-active")),se&&se(e,T,E),("scrollTop"!=o.type||!is_safari())&&void 0}}function Je(e){return e?e.originalEvent&&e.originalEvent.wheelDelta?e.originalEvent.wheelDelta:e.wheelDelta?e.wheelDelta:e.detail?e.detail:null!=e.originalEvent&&null!=e.originalEvent.detail?-40*e.originalEvent.detail:void 0:0}function Ke(e){return e?is_firefox()?1==e.axis?e.detail:0:e.originalEvent&&e.originalEvent.wheelDeltaX?e.originalEvent.wheelDeltaX:e.wheelDelta?e.wheelDeltaX:null!=e.originalEvent&&e.originalEvent.detail?-40*e.originalEvent.detail:void 0:0}function et(e){return e?is_firefox()?2==e.axis?e.detail:0:e.originalEvent&&e.originalEvent.wheelDeltaY?e.originalEvent.wheelDeltaY:e.wheelDelta?e.wheelDeltaY:null!=e.originalEvent&&e.originalEvent.detail?-40*e.originalEvent.detail:void 0:0}function tt(s){var i={animate_inner:"on",animate_sc:"on",animate_sc_based_on_main_scroll:"off",force_no_easing:"off",do_not_clear_suspend_enter_frame:"off"};if(i=$.extend(i,s),te&&(G>0&&(G=0),"scrollTop"==o.type&&(f=w),G<-(p-f)&&(G=-(p-f)),isNaN(G)&&(G=0),I<0&&(I=0,K=!0),I>f-Y&&(I=f-Y,K=!0),F&&(z.hasClass("easing"),"normal"==o.type&&("on"!=o.enable_easing?b.css({top:G}):Ie=G),"scrollTop"==o.type&&("on"!=o.enable_easing||"on"==i.force_no_easing?($(window).scrollTop(-G),De=xe,xe=0,Ie=G,setTimeout((function(){xe=De}),100)):(Ie=G,P.data("targettop",Ie))),F.css({top:I}),"on"==o.scrollBg&&z.css("background-position","center "+G+"px"))),ee){null==V&&(V=M/(_-R)*(_-h)),V<-(h-_)&&(V=-(h-_)),V>0&&(V=0),isNaN(V)?V=U:U=V;var a=-V/(h-_);"on"==i.animate_sc_based_on_main_scroll&&(n=a*-(t-e)),null!=o.secondCon&&(n<-(t-e)&&(n=-(t-e)),n>0&&(n=0)),M<0&&(M=0,J=!0,pe=!0),M>g-R&&(M=g-R,J=!0,pe=!0),D&&(z.hasClass("easing"),"normal"==o.type&&("on"!=o.enable_easing?b.css({left:V}):Me=V),"scrollTop"==o.type&&("on"!=o.enable_easing?$(window).scrollLeft(-V):Me=V),o.secondCon&&("on"!=o.enable_easing_for_second_con?o.secondCon.css({left:n}):ke=n),D.css({left:M}),"on"==o.scrollBg&&z.css("background-position",G+"px center"))}if("off"==i.do_not_clear_suspend_enter_frame&&(me=!1,clearTimeout(u),u=setTimeout(Le,1e3)),ie){var l={};l.totalWidth=_,l.comWidth=h,l.viewIndexX=V,l=$.extend(l,i),ie(l)}}return function(){_=null==o.totalWidth?z.width():o.totalWidth;f=null==o.totalHeight?z.height():o.totalHeight;g=_,"skin_luna"==o.settings_skin&&(g-=4);o.replace_window_object&&(P=o.replace_window_object);o.settings_scrollTop_height_indicator&&o.settings_scrollTop_height_indicator.outerHeight&&(B=o.settings_scrollTop_height_indicator);o.settings_comHeight_surplus&&o.settings_comHeight_surplus>0&&(Q=o.settings_comHeight_surplus);xe=parseFloat(o.easing_duration),"normal"==o.type&&(b=z.find(".inner").eq(0));var e=String(z.attr("class"));-1==e.indexOf("skin_")&&z.addClass(o.settings_skin);e=String(z.attr("class"));var t=new RegExp("(skin_.*?)\\b").exec(e);t&&t[1]&&(o.settings_skin=t[1]);"normal"==o.type&&(0==b.parent().hasClass("scroller")&&b.wrap('<div class="scroller"></div>'),m=z.find(".scroller").eq(0));o.settings_skin;if(is_touch_device()&&"on"!=o.settings_disableSpecialIosFeatures){if("scrollTop"==o.type)return!1;if(m&&m.css("overflow","auto"),"on"==o.touch_leave_native_scrollbar)return!1;o.secondCon&&o.secondCon.parent().css("overflow","auto"),z.addClass("is-touch")}"scrollTop"==o.type&&(z.addClass("scroller-con type-scrollTop"),$("html").css("overflow-y","hidden"),setTimeout((function(){}),1e3),$(document).delegate("a[href^=#]","click",(function(){var e=$(this);if($(e.attr("href")).length>0&&$(".scroller-con.type-scrollTop").get(0)&&$(".scroller-con.type-scrollTop").get(0).api_scrolly_to){var t=$(e.attr("href")).offset().top-100;$(".scroller-con.type-scrollTop").get(0).api_scrolly_to(t)}return!1})),z.bind("mousedown",(function(e){Se=2==e.which&&!Se})),z.bind("mousemove",(function(e){Se&&(G=-e.clientY/w*(z.height()-w),tt())})),$("body").bind("keydown",(function(e){38==e.keyCode&&(G+=30,tt()),40==e.keyCode&&(G-=30,tt())})));(s=z).append('<div class="scrollbar"></div>'),x=s.children(".scrollbar").eq(0),is_touch_device()&&x.addClass("easing");!b||""!=b.get(0).style.height&&"auto"!=b.get(0).style.height||(C=!0);"auto"==o.settings_autoheight&&(""!=z.get(0).style.height&&"auto"!=z.get(0).style.height||(y=!0));"on"==o.settings_autoheight&&(y=!0);"off"==o.settings_autoheight&&(y=!1);Ve(),0==z.css("opacity")&&z.parent().children(".preloader").fadeOut("slow");0==oe&&(oe=h+50);z.hasClass("is-touch")&&"off"==o.settings_disableSpecialIosFeatures&&m&&m.css({overflow:"auto"});null!=z.get(0)&&(z.get(0).reinit=Ue,z.get(0).api_destroy=Xe,z.get(0).scrollToTop=Ge,z.get(0).updateX=Pe,z.get(0).fn_scrollx_to=Be,z.get(0).api_scrolly_to=Qe,z.get(0).api_toggle_resize=Ve,z.get(0).api_get_view_index_y=He,z.get(0).api_set_action_handle_frame=function(e){ne=e},z.get(0).api_set_action_animate_scrollbar_end=function(e){ie=e},z.get(0).api_block_scroll=function(e){q=!0},z.get(0).api_unblock_scroll=function(e){q=!1},z.get(0).api_set_action_handle_wheel_end=function(e){se=e},z.get(0).api_set_window_object=function(e){P=e},z.get(0).api_set_scrollTop_height_indicator=function(e){B=e},z.get(0).api_comHeight_surplus=function(e){Q=e});o.settings_refresh>0&&setInterval(Ue,o.settings_refresh);"0"==z.find(".scrollbar").css("opacity")&&z.find(".scrollbar").animate({opacity:1},600);$(window).bind("resize",Ve),Ve(),setTimeout(Ve,1e3),qe(),z.addClass("dzsscr-inited")}(),z.get(0).api_reinit=Ue,z.get(0).api_handle_wheel=Ze,"on"==o.settings_scrollbyhover||0!=z.hasClass("is-touch")&&"on"!=o.settings_disableSpecialIosFeatures||("scrollTop"==o.type?($(window)[0].addEventListener&&$(window)[0].addEventListener("DOMMouseScroll",Ze,!1),$(window)[0].onmousewheel=Ze):(z[0].addEventListener&&z[0].addEventListener("DOMMouseScroll",Ze,!1),z[0].onmousewheel=Ze),o.secondCon&&(o.secondCon[0].addEventListener&&o.secondCon[0].addEventListener("DOMMouseScroll",Ze,!1),o.secondCon[0].onmousewheel=Ze)),0!=z.hasClass("is-touch")&&"on"!=o.settings_disableSpecialIosFeatures||$(document).mousemove((function(s){A=s.pageX-z.offset().left,L=s.pageY-z.offset().top,"scrollTop"==o.type&&(L=s.pageY-$(window).scrollTop()),"on"==o.settings_scrollbyhover&&(A<0||L<0||A>_+20||L>f+20)||(1!=te||1!=H&&"on"!=o.settings_scrollbyhover||(x.addClass("dragging"),z.addClass("dragging"),"normal"==o.settings_dragmethod&&(I=L/f*(f-Y),G=L/f*(f-p)),"drag"==o.settings_dragmethod&&(G=(I=L-0+0-j)/-(f-Y)*(p-f)),G=parseInt(G,10),tt()),1!=ee||1!=X&&"on"!=o.settings_scrollbyhover||(x.addClass("dragging"),z.addClass("dragging"),"normal"==o.settings_dragmethod&&(M=A/_*(_-R),V=A/_*(_-h),null!=o.secondCon&&(n=A/e*(e-t))),"drag"==o.settings_dragmethod&&(V=(M=A-0+0-W)/-(_-R)*(h-_),null!=o.secondCon&&(n=M/-(e-R)*(t-e))),tt()),"on"==o.settings_fadeoutonleave&&(F.animate({opacity:1},{queue:!1,duration:500}),N.animate({opacity:1},{queue:!1,duration:500})),"on"==o.settings_show_sidebar_on_right_side_mouse&&A>z.offset().left+z.width()-100&&A<=z.offset().left+z.width()&&L>z.offset().top&&L<=z.offset().top+z.height()&&(clearTimeout(i),i=setTimeout(Ye,1e3),z.addClass("scrollbar-active")))})),"on"==o.settings_enable_drag_on_desktops_too&&(z.addClass("swipe-enabled"),b&&(b.bind("mousedown",Re),$(document).bind("mousemove",We),$(document).bind("mouseup",je)),o.secondCon&&(o.secondCon.bind("touchstart",Re),o.secondCon.bind("touchend",je))),0==z.hasClass("is-touch")||"on"==o.settings_disableSpecialIosFeatures?$(document).mouseup((function(e){H=!1,X=!1,x&&x.removeClass("dragging"),z.removeClass("dragging")})):(z.addClass("swipe-enabled"),b&&(b.bind("touchstart",Re),b.bind("touchmove",We),b.bind("touchend",je)),o.secondCon&&(o.secondCon.bind("touchstart",Re),o.secondCon.bind("touchend",je))),"on"!=o.settings_fadeoutonleave||0!=is_ios()&&"on"!=o.settings_disableSpecialIosFeatures||z.mouseleave((function(e){F.animate({opacity:0},{queue:!1,duration:500}),N.animate({opacity:0},{queue:!1,duration:500})})),z.hasClass("is-touch")&&"on"!=o.settings_disableSpecialIosFeatures&&setInterval((function(){var s=0,i=0,a=0,l=0;b&&(s=b.width()-z.width(),i=b.position().left,a=b.height()-z.height(),l=b.position().top);var r=null,d=null;if(o.secondCon){r=o.secondCon,d=r.parent();var c=r.width()-d.width(),u=r.position().left,g=(r.height(),d.height(),r.position().top)}he&&z[0]==document.getElementById("scrollc3")&&(he=!1);if(k){M=-i/s*(_-R),I=-l/a*(f-R),r&&(n=-M/(e-R)*(t-e)),tt({animate_inner:"off"})}if(O){V=(M=-u/c*(_-R))/_*(_-h),tt({animate_sc:"off"})}i,l,u,g}),80),this}))},window.dzsscr_init=function(e,t){if(void 0!==t&&void 0!==t.init_each&&1==t.init_each){var o=0;for(var n in t)o++;1==o&&(t=void 0),$(e).each((function(){$(this).scroller(t)}))}else $(e).scroller(t)}}(jQuery),window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},jQuery(document).ready((function(e){dzsscr_init(".scroller-con.auto-init",{init_each:!0})})),jQuery(window).load((function(){dzsscr_init(".scroller-con.auto-init-onload",{init_each:!0})}));