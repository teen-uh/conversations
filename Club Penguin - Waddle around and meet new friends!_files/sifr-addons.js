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

/*	sIFR 2.0.1 Official Add-ons 1.2
	Copyright 2005 Mark Wubben

	This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/

if(typeof sIFR=="function")(function(){var j=document;var h=j.documentElement;sIFR.removeDecoyClasses=function(){function a(b){if(b&&b.className!=null)b.className=b.className.replace(/\bsIFR-hasFlash\b/,"")}return function(){a(h);a(j.getElementsByTagName("body")[0])}}();sIFR.preferenceManager={storage:{sCookieId:"sifr",set:function(a){var b=new Date();b.setFullYear(b.getFullYear()+3);j.cookie=[this.sCookieId,"=",a,";expires=",b.toGMTString(),";path=/"].join("")},get:function(){var a=j.cookie.match(new RegExp(";?"+this.sCookieId+"=([^;]+);?"));if(a!=null&&a[1]=="false")return false;else return true},reset:function(){var a=new Date();a.setFullYear(a.getFullYear()-1);j.cookie=[this.sCookieId,"=true;expires=",a.toGMTString(),";path=/"].join("")}},disable:function(){this.storage.set(false)},enable:function(){this.storage.set(true)},test:function(){return this.storage.get()}};if(sIFR.preferenceManager.test()==false){sIFR.bIsDisabled=true;sIFR.removeDecoyClasses()}sIFR.rollback=function(){function a(b){var c,d,e,f,g,h;var l=parseSelector(b);var i=l.length-1;var m=false;while(i>=0){c=l[i];l.length--;d=c.parentNode;if(c.getAttribute("sifr")=="true"){h=0;while(h<d.childNodes.length){c=d.childNodes[h];if(c.className=="sIFR-alternate"){e=c;h++;continue}d.removeChild(c)}if(e!=null){f=e.firstChild;while(f!=null){g=f.nextSibling;d.appendChild(e.removeChild(f));f=g}d.removeChild(e)}if(!sIFR.UA.bIsXML&&sIFR.UA.bUseInnerHTMLHack)d.innerHTML+="";d.className=d.className.replace(/\bsIFR\-replaced\b/,"")};m=true;i--}return m}return function(k){named.extract(arguments,{sSelector:function(a){k=a}});if(k==null)k="";else k+=">";sIFR.removeDecoyClasses();sIFR.bHideBrowserText=false;if(a(k+"embed")==false)a(k+"object")}}()})()

}
/*
     FILE ARCHIVED ON 17:28:00 Jun 24, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:32:37 Oct 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.495
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 7.944
  LoadShardBlock: 497.249 (3)
  PetaboxLoader3.datanode: 66.105 (4)
  PetaboxLoader3.resolve: 683.434 (2)
  load_resource: 281.631
*/