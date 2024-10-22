var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* sovrn_stndalne_beacon v0.0.1 
Updated : 2016-06-20 */
window.sovrn=window.sovrn||{},sovrn.auction=sovrn.auction||{},beaconFlag=!1,sovrn.auction={doNotTrack:function(n,t){return n=n||navigator,t=t||window,optOutCookie=sovrn.auction.readCookie("tracking_optout"),"yes"===n.doNotTrack||"1"===n.doNotTrack||"1"===n.msDoNotTrack||"1"===t.doNotTrack||"1"===optOutCookie},readCookie:function(n){for(var t=n+"=",o=document.cookie.split(";"),r=0;r<o.length;r++){for(var e=o[r];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(t))return e.substring(t.length,e.length)}return null},sendBeacon:function(){sovrn.auction.beaconConfig=sovrn.auction.getParams(sovrn.auction.getScriptTag());try{var n,t;if(beaconFlag)return!1;n="sovrn_beacon",t=sovrn.auction.createiFrame(n,1,1),t.src=sovrn.auction.getBeaconURL(),document.body.appendChild(t),beaconFlag=!0}catch(o){return!1}return!0},getParams:function(n){var t=n.getAttribute("id"),o=document.getElementById(t);if(null==o)return!1;currentTagSRC=o.src;var r,e;return e={},r=currentTagSRC.split("?")[1]||"",(r=r.split("#")[0]||"")?(r.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(n,t,o,r){try{e[t]=decodeURIComponent(r)}catch(a){sovrn.ads.dbg(a)}}),e.currentTag=t,e.location=o.parentNode.nodeName,e):{}},getScriptTag:function(){var n,t,o,r=/^(https?:)?\/\/.*\.lijit\.(com|dev)\/www\/sovrn_beacon_standalone\/sovrn_standalone_beacon(\.min)?\.js/i,e=r;if("currentScript"in document&&(o=document.currentScript,o&&e.test(o.src)))return o;for(n=document.getElementsByTagName("script"),t=n.length-1;t>=0;t--)if(e.test(n[t].src))return n[t];return null},createiFrame:function(n,t,o){var r,e,a,i,c,u;r=document.createElement("iframe"),e=r.style,c={id:n,margin:"0",padding:"0",frameborder:"0",width:t+"",height:o+"",scrolling:"no",src:"about:blank"},u={margin:"0px",padding:"0px",border:"0px none",width:t+"px",height:o+"px",overflow:"hidden"};for(a in c)c.hasOwnProperty(a)&&r.setAttribute(a,c[a]);for(i in u)if(u.hasOwnProperty(i))try{e[i]=u[i]}catch(s){}return r},getBeaconURL:function(){return urlString="https://web.archive.org/web/20160705143755/http://gslbeacon.lijit.com/beacon?viewId="+sovrn.auction.beaconConfig.uid+"_header_auction&rand="+Math.floor(9e3*Math.random())+"&informer="+sovrn.auction.beaconConfig.iid+"&type=fpads&loc="+window.location.host+"&v=1.2"},sovrnReady:function(n){/in/.test(document.readyState)?setTimeout("sovrn.auction.sovrnReady("+n+")",9):n()}},sovrn.auction.sovrnReady(function(){dnt=sovrn.auction.doNotTrack(),0==dnt&&sovrn.auction.sendBeacon()});

}
/*
     FILE ARCHIVED ON 14:37:55 Jul 05, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:46:37 Oct 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.528
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 15.591
  LoadShardBlock: 29.423 (3)
  PetaboxLoader3.datanode: 43.71 (4)
  load_resource: 134.649
  PetaboxLoader3.resolve: 95.356
*/