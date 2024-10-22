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

/**
 * Cmatgame themization
 */

(function ($) {
    $('.summary-instructions .instructions-more, .body-instructions .instructions-less ').prev().addClass('last');
})(jQuery);

var swf1 = '<div></div>';
var intervalId;
var afg_container = "<div></div>";
	jQuery("#afg_container").replaceWith('<div id="afg_container"><h1 style="margin:20px 180px;">Just a moment while your game loads...</h1><div id="afg_preloader"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://web.archive.org/web/20160630185019/http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="640" height="512" id="preloader" align="middle"><param name="wmode" value="direct"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="false"><param name="movie" value="ima3_preloader_1.5.swf"><param name="quality" value="high"><param name="bgcolor" value="#ffffff"><param name="flashvars" value="adTagUrl=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Fads%3Fsz%3D640x480%26iu%3D%2F45966600%2FVideo_Ad_1%26impl%3Ds%26gdfp_req%3D1%26env%3Dvp%26output%3Dxml_vast2%26unviewed_position_start%3D1%26url%3D%5Breferrer_url%5D%26description_url%3D' + encodeURIComponent(document.location.href) + '%26correlator%3D%5Btimestamp%5D"><embed src="https://web.archive.org/web/20160630185019/http://www.coolmath-games.com/sites/cmatgame/files/adtesting/0-blym-test/ima3_preloader_1.5.swf" quality="high" bgcolor="#000000" width="640" height="512" name="preloader" align="middle" allowscriptaccess="always" allowfullscreen="false" type="application/x-shockwave-flash" flashvars="adTagUrl=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Fads%3Fsz%3D640x480%26iu%3D%2F45966600%2FVideo_Ad_1%26impl%3Ds%26gdfp_req%3D1%26env%3Dvp%26output%3Dxml_vast2%26unviewed_position_start%3D1%26url%3D%5Breferrer_url%5D%26description_url%3D' + encodeURIComponent(document.location.href) + '%26correlator%3D%5Btimestamp%5D" pluginspage="https://web.archive.org/web/20160630185019/http://www.adobe.com/go/getflashplayer"><object type="application/x-shockwave-flash" data="//web.archive.org/web/20160630185019/http://www.gstatic.com/osd/hbe.swf?id=0~0" width="1" height="1" style="visibility: hidden; opacity: 0; z-index: -999999; position: fixed; left: 651.5px; top: 562.59375px;"><param name="movie" value="//web.archive.org/web/20160630185019/http://www.gstatic.com/osd/hbe.swf?id=0~0"><param name="allowscriptaccess" value="always"></object></object></div><!--preloader--></div><!--container!!!!!-->');
function removeAdSwfJWPLayer() {
  clearInterval(intervalId);
  jQuery("#afg_container").remove();
  if(!Drupal.settings.swfembed) {
	  //html5 game
	//game width, game height and game type
	game_width = jQuery("#html5game").attr("width");
	game_height = jQuery("#html5game").attr("height");
	game_type = "html5";
	// IE Detection and Version grabbing
	ie = false;
	var html5_game_url = jQuery("#html5game").attr("src");
	if(typeof html5_game_url !== 'undefined' && html5_game_url.indexOf("//") === 0) {
		html5_game_url = window.location.protocol + html5_game_url;
	} else if(typeof html5_game_url !== 'undefined' && html5_game_url.indexOf("//")  > 0) {
		html5_game_url = html5_game_url.replace("http:",window.location.protocol);	
	}
	if (navigator.appName == "Microsoft Internet Explorer") {
	    ie = true;
	    var ua = navigator.userAgent;
	    var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
	    if (re.exec(ua) != null) {
	        ieVersion = parseInt(RegExp.$1)
	    }
	}

      if(ie && ieVersion < 9) {
          nothtml5browser = '<div style="margin-top:20px;color: #f5e61f;line-height:1.1em;font-size: 1.867em;">Hey, you\'re using an older web browser that can\'t play HTML5 games like this one.<br><br>Please switch to another browser or just enjoy a different Coolmath game!</div><br><p style="font-size:1.6em;color:#0E83D4;font-weight:bold;">&#8226; <a href="https://web.archive.org/web/20160630185019/http://windows.microsoft.com/en-us/internet-explorer/download-ie" target="_new">Get a new Internet Explorer browser from Microsoft</a></p>';
          jQuery("#html5game").replaceWith(nothtml5browser);
      } else {
          
          newiframe = '<iframe id="html5game" src="' +  html5_game_url + '" class="' + jQuery("#html5game").attr("class") +'" width="' + jQuery("#html5game").attr("width") +'" height="' + jQuery("#html5game").attr("height") +'" scrolling="no"></iframe>';
          if(typeof isRemoveAdSwfJWPLayer === "undefined" ||  !isRemoveAdSwfJWPLayer) {
             jQuery("#html5game").replaceWith(newiframe);
          }   
      } 
  } else {
	  //flash game
	  //game width, game height and game type
	  game_width = Drupal.settings.swfembed.swf.swf_1.width;
	  game_height = Drupal.settings.swfembed.swf.swf_1.height;
	  game_type = "flash";
	
	  if(typeof isRemoveAdSwfJWPLayer === "undefined" || !isRemoveAdSwfJWPLayer) {
		  //jQuery("#swf_1").replaceWith(swf1);
		  //Replace targeted DOM element with our new <object>
		  //if(typeof game_element != "undefined"){
		  //	  game_element.parentNode.replaceChild(obj, game_element);
		  //} else {
		  	  var swf_1_game_url = Drupal.settings.swfembed.swf.swf_1.url;
		  	  swf_1_game_url = swf_1_game_url.replace("http:",window.location.protocol);

			  game_element = document.getElementById("swf_1");
			  isMSIE = /*@cc_on!@*/false;
			  obj = (isMSIE) ? createIeObject(swf_1_game_url) : document.createElement("object");
			  if (!isMSIE) {
			   obj.setAttribute("type", "application/x-shockwave-flash");
			   obj.setAttribute("data", swf_1_game_url);
			  }
			  //Add attributes to <object>
			  obj.setAttribute("id", "swfObjID");
			  obj.setAttribute("width", Drupal.settings.swfembed.swf.swf_1.width);
			  obj.setAttribute("height", Drupal.settings.swfembed.swf.swf_1.height);
			  var param = document.createElement('param');
			  param.setAttribute('allowScriptAccess','always');
			  obj.appendChild(param);
			  game_element.parentNode.replaceChild(obj, game_element);
			//}
			var gameInstructions = document.getElementById('game-instructions');
			//insert fix flash div before game instructions field
			gameInstructions.innerHTML = '<div class="no-flash">If this flash game doesn\'t work on your computer, go <a href="/fix-flash.html">here</a> for help.</div><br><br>' + gameInstructions.innerHTML;
	  }
	isRemoveAdSwfJWPLayer = true;	  
  }
  
	//console.log('remove ad swf');
	if(isRemoveAdSwfJWPLayer) {
		//console.log('ad swf player already removed');
	}
}
function noAdsReturnedJWPlayer() {
  jQuery("#afg_container").remove();
  var swf_1_game_url = Drupal.settings.swfembed.swf.swf_1.url;
  swf_1_game_url = swf_1_game_url.replace("http:",window.location.protocol);
  swf1 = '<div id="swf_1"><object data="' + swf_1_game_url + '" type="application/x-shockwave-flash" width="' + Drupal.settings.swfembed.swf.swf_1.width + '" height="' + Drupal.settings.swfembed.swf.swf_1.height + '"><param name="allowScriptAccess" value="sameDomain"><param name="movie" value="' + Drupal.settings.swfembed.swf.swf_1.params.movie + '"><param name="menu" value="false"><param name="quality" value="high"><param name="wmode" value="direct"><param name="flashvars" value=""><br><br><br><div style="color: #f5e61f;font-size: 1.867em;"><p>Hey! You need Flash to play this game.</p><p><a style="background-color:#31a2db;border-radius: 20px;color: #000;display: inline-block;font-size: 1.16em;padding: 15px 8px;text-transform: capitalize;vertical-align: middle;font-weight:bold;" href="https://web.archive.org/web/20160630185019/https://get.adobe.com/flashplayer/" target="_blank">Get Adobe Flash Player</a><br><br></p></div><br><br><br></object></div><div class="no-flash">If this flash game doesn\'t work on your computer, go <a href="/fix-flash.html">here</a> for help.</div></p>';  
  jQuery("#swf_1").replaceWith(swf1);
  
  //console.log('noads returned');
}

function createIeObject(url){
   var div = document.createElement("div");
   div.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" +url + "'></object>";
   return div.firstChild;
}

function remove_anon_user_blocks() {
  jQuery('.panel-pane.pane-block.pane-bean-coolmath-header').replaceWith('');
  jQuery('.panel-pane.pane-block.pane-bean-game-page-no-ads-promo').replaceWith('');
  jQuery('.panel-pane.pane-block.pane-bean-subscriber-promo').replaceWith('');
  jQuery('.homepage-remove-ads-1').replaceWith('');
  jQuery('.pane-bean-game-page-no-ads-promo').replaceWith('');
  jQuery('body').removeClass('not-logged-in').addClass('logged-in');
  console.log('removing anonymous user blocks');
}

(function ($, Drupal, window, document, undefined) {
  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.cmatgame_leaderboard_post_user_score = {
  	
  	attach: function(context,settings) {
  		//do we have game id data that need to be sent to backend?
  		var user_game_id = sessionStorage.getItem("game_id");
  		var user_score_json_data = sessionStorage.getItem(user_game_id+ 'user_score_json_data');
  		if(user_game_id != null  && user_score_json_data != null) {
  			//do ajax call to update the score in database
			jQuery.post("/ajax/score", JSON.parse(user_score_json_data));
			sessionStorage.removeItem(user_game_id+'user_score_json_data');
			sessionStorage.removeItem("game_id");
  		}
  	}
  }
  Drupal.behaviors.cmatgame_subscriber_behavior = {
    user_logout: function (event) {		  
  	  //console.log("Logout clicked "+event);
  	  event.preventDefault();
  	  setCookie('cmatgame_login', '', -1);//todo
      setCookie('cmatgame_subscriber', '', -1);//todo
      setCookie('cmg_ux', '', -1);
      setCookie('cmg_sx', '', -1);
      setCookie('cmg_l', '', -1);
      if(window.location.host === 'cmatgame.local') {
  	    window.location.href = 'http://' +window.location.host + '/user/logout';
  	  }else {
  	    window.location.href = 'https://' +window.location.host + '/user/logout';
      }
  	  return false;
  	},
  	user_loginbar_update: function () {
  	  var welcome_html = '<li class="first"><a href="/myaccount" title="My Account">My Account</a></li><li>/</li><li class="last"><a href="/user/logout" onClick="Drupal.behaviors.cmatgame_subscriber_behavior.user_logout(event); return false;" title="Log Out">Log Out</a></li>';
      var login_html = '<li class="first last"><a title="Subscriber Log In" class="welcome-text" href="/user/login">Subscriber Log In</a></li>';
      var cmatgame_login = getCookie('cmg_l');
      if(typeof cmatgame_login !== undefined && cmatgame_login !== '' && cmatgame_login !==  null) {
        jQuery(".pane-cmatgame-subscription-userloginbar2 .welcome-box").replaceWith('<ul class="welcome-box">'+welcome_html +'</ul>');
        //console.log("cmatgame_login cookie "+cmatgame_login);
      } else {
        jQuery(".pane-cmatgame-subscription-userloginbar2 .welcome-box").replaceWith('<ul class="welcome-box">'+login_html + '</ul>');
        //console.log("cmatgame_login cookie "+cmatgame_login);
      }
  	},
    attach: function(context, settings) {
      // Place your code here.
      Drupal.behaviors.cmatgame_subscriber_behavior.user_loginbar_update();
    }
  };


})(jQuery, Drupal, this, this.document);

//sets cookie to false for ab testing(if user has been in test previously. it's now reset to false 
//setCookie('new-ab-test-cookie', 'false', '');

jQuery(document).ready(function ($) {
//check ab test cookie value
  abTestCookie = getCookie('new-ab-test-cookie');
  if (abTestCookie == 'true'){
//      console.log("abTestCookie True");
        removeAdSwfJWPLayer();
  }


  if (abTestCookie == 'true' && (typeof preRollCookie == undefined || typeof preRollCookie == "undefined")){
//      console.log("abTestCookie True preRollCookie != undefined");
      setCookie('new-ab-test-cookie', 'false', '1800000');
  } 

  abTestCookie_1 = getCookie('no-refresh-cookie');

  if (abTestCookie_1 == 'true' && (typeof noRefreshCookie == undefined || typeof noRefreshCookie == "undefined")){
//      console.log("abTestCookie True preRollCookie != undefined");
      setCookie('no-refresh-cookie', 'false', '1800000');
  } 
	//Remove ads when user is an active subscriber
	var cmg_sx = getCookie("cmg_sx");
  if(typeof cmg_sx === undefined || cmg_sx === "" || cmg_sx === null) {
    status = checkActiveUser();
    if(!status) {
      console.log('display ads');
    }
  } else if(typeof cmg_sx !== undefined && cmg_sx !== "" && cmg_sx !== null) {
		console.log('Removing ads');
    jQuery(".ad-wrapper").each(function() {
			var self = $(this);
			self.replaceWith("");
		});
		if(jQuery(".field-game").length) {
			removeAdSwfJWPLayer();
			jQuery("#subscriber-banner").replaceWith('<div id="subscriber-banner" class="adobe-analytics-sub-unlock"><a onclick="unlockAllLevels();" class="unlock-link">click-to-unlock</a></div>');
		}
		remove_anon_user_blocks();
	}

	if(document.getElementById("swf_1") != null) {
	  var swf_1_game_url = Drupal.settings.swfembed.swf.swf_1.url;
	  swf_1_game_url = swf_1_game_url.replace("http:",window.location.protocol);

	  game_element = document.getElementById("swf_1"),
	  isMSIE = /*@cc_on!@*/false,
	  obj = (isMSIE) ? createIeObject(swf_1_game_url) : document.createElement("object");
	  if (!isMSIE) {
	   obj.setAttribute("type", "application/x-shockwave-flash");
	   obj.setAttribute("data", swf_1_game_url);
	  }
	  //Add attributes to <object>
	  obj.setAttribute("id", "swfObjID");
	  obj.setAttribute("width", Drupal.settings.swfembed.swf.swf_1.width);
	  obj.setAttribute("height", Drupal.settings.swfembed.swf.swf_1.height);
	} 
		 

	var seconds_left = preroll_ads_timer ? preroll_ads_timer + 1 : 10;
	if(document.getElementById('timer_div')!=null) {
		intervalId  = setInterval(function() {
			seconds_left--;
			//console.log("seconds left::" + seconds_left);
			if(typeof  isPrerollVideoPassbackAdDisplayed != 'undefined' && isPrerollVideoPassbackAdDisplayed) {
				document.getElementById('continue-link').innerHTML = '';
				document.getElementById('timer_div').innerHTML = '<a href="javascript:removeAdSwfJWPLayer();"><div class="continue-link-yellow">Continue to Game &#9654;</div></a>';
			} else {
				document.getElementById('timer_div').innerHTML = seconds_left;
			}
			if (seconds_left <= 0)
			{
				document.getElementById('continue-link').innerHTML = '';
				document.getElementById('timer_div').innerHTML = '<a href="javascript:removeAdSwfJWPLayer();"><div class="continue-link-yellow">Continue to Game &#9654;</div></a>';
			   clearInterval(intervalId);
			   if(typeof isPrerollVideoPassbackAdDisplayed != 'undefined' && isPrerollVideoPassbackAdDisplayed) {
				   //remove Preroll Video Passback Ad and display the game
				   removeAdSwfJWPLayer();
				   isPrerollVideoPassbackAdDisplayed = false;
			   }
			}
		}, 1000);
	}
});

function setCookie(key, value, exptime) {
    //document.cookie = key + '=' + value + ';';
    var d = new Date();
    d.setTime(d.getTime() + exptime);
    var expires = "expires="+d.toUTCString();
    if(key === 'cmatgame_subscriber' || key === 'cmatgame_login') {
      document.cookie = key + "=" + value + "; " + expires +"; path=/;";
    } else {
      document.cookie = key + "=" + value + "; " + expires +"; path=/; domain=."+window.location.host;
    }
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function checkActiveUser() {
  //We do not have new subscriber info. Check for older info.
  status = 0;
  var sub = getCookie("cmatgame_subscriber");
  if(typeof sub !== undefined && sub !== "" && sub !== null) {
    subArr = unescape(sub).split(':');
    if(subArr.length === 3) {
      //Revalidate user
      //console.log('Invalid subscriber info. Revalidate user='+subArr[2]);
      subArr[2] = subArr[2].replace(/[^0-9]+/g, ''); 
      getcmguserstatus(subArr[2], subArr[2]);
    }
  } else {
    //Not an active subscriber. Check if the user is logged in.
    cmgArr = unescape(getCookie('cmg_ux')).split("|");//365
    cmg_l = getCookie('cmg_l');
    cmgUx = 0;
    cmgLx = 1;
    if(typeof cmgArr !== 'undefined' && cmgArr.length == 2 && cmgArr[0] !== 'undefined' && cmgArr[0] !== '' && cmgArr[0] !== null && cmgArr[1]) {
      cmgUx = 1;
    }
    
    if(typeof cmg_l !== 'undefined' && cmg_l !== '' && cmg_l !== null) {
      cmgLx  = 0;
    }
    if(cmgUx && cmgLx) {
      status = getcmguserstatus(cmgArr[0], cmg_l);
    } else {
      console.log("logged in user display ads");
      status = 0;
    }
  }
  return status;
}

function getcmguserstatus(cmg_ux, cmg_l) {
  url = "/ajax/subscriber/status/"+cmg_ux +'/'+cmg_ux+ '?'+new Date().getTime();
  if(typeof cmg_l !== 'undefined' && cmg_l !== '' && cmg_l !== null) {
    url = "/ajax/subscriber/status/"+cmg_ux+'/'+cmg_l + '?'+new Date().getTime();
  }
  status = 0;
  
  jQuery.getJSON(url, function(data) {
    cmg_sx = getCookie('cmg_sx');
    if(typeof data.sx !== undefined && data.sx === cmg_ux && typeof data.st !== undefined && data.st && typeof cmg_sx !== undefined && cmg_sx !== "" && cmg_sx !== null) {
      status = 1;
      jQuery(".ad-wrapper").each(function() {
          var self = jQuery(this);
          self.replaceWith("");
      });
      if(jQuery(".field-game").length) {
          removeAdSwfJWPLayer();
          jQuery("#subscriber-banner").replaceWith('<div id="subscriber-banner" class="adobe-analytics-sub-unlock"><a onclick="unlockAllLevels();" class="unlock-link">click-to-unlock</a></div>');
      }
      remove_anon_user_blocks();
    }
    cmg_ll = getCookie('cmg_l');
    if(typeof cmg_ll !== undefined && cmg_ll !== '' && cmg_ll !== null) {
      Drupal.behaviors.cmatgame_subscriber_behavior.user_loginbar_update();
    }
  });
  return status;
}
;


}
/*
     FILE ARCHIVED ON 18:50:19 Jun 30, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:46:33 Oct 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.826
  exclusion.robots: 0.03
  exclusion.robots.policy: 0.013
  esindex: 0.017
  cdx.remote: 20.202
  LoadShardBlock: 200.295 (3)
  PetaboxLoader3.datanode: 187.094 (5)
  PetaboxLoader3.resolve: 132.675 (3)
  load_resource: 181.39 (2)
*/