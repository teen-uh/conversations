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

if (!window.console) console = {log: function() {}};

var enableDebug=false;
function debugOut(msg){if(enableDebug){console.log(msg);}}

// IE Detection and Version grabbing
ie = false;
if (navigator.appName == "Microsoft Internet Explorer") {
    ie = true;
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
    if (re.exec(ua) != null) {
        ieVersion = parseInt(RegExp.$1)
    }
}
var refreshCnt = 0;
var refreshTimer;
var useNonGameEvtsTimer = true;
var skipGameEvtsLogic = false; // a few games have this hard-coded, to skip this logic
if ((ie || (ie && ieVersion < 8))) { useNonGameEvtsTimer = false; }
//adding logic for fireboy and run games
if(window.location.pathname == '/0-fireboy-watergirl-2-light-temple' || window.location.pathname == '/0-fireboy-watergirl-3-ice-temple' || window.location.pathname == '/0-fireboy-watergirl-4-crystal-temple' || window.location.pathname == '/0-fireboy-watergirl-forest-temple' || window.location.pathname == '/0-run' || window.location.pathname == '/0-run-2') {
	if(ie && ieVersion < 8) {
		useNonGameEvtsTimer = false;
	} else {
		useNonGameEvtsTimer = true;
	}	
}
var intvlValue = ad_refresh_timer_interval? ad_refresh_timer_interval : 60000; // 1m0s
if(window.location.pathname == '/0-run' || window.location.pathname == '/0-run-2' || window.location.pathname == '/0-duck-life' || window.location.pathname == '/0-duck-life-4' ) {
	intvlValue = 180000;
} else if (window.location.pathname == '/0-worlds-hardest-game') {
		intvlValue = 180000; //3  min
	 } else if(window.location.pathname == '/0-b-cubed' || window.location.pathname == '/0-bloxorz' || window.location.pathname == '/0-coffee-shop' ) {
	intvlValue = 60000;
}
debugOut("Starting with ad refresh timer of " + intvlValue + " ms")
refreshTimer = setTimeout(function(){ myTimerAction() },intvlValue);

function myTimerAction() {
    console.log("Refresh timer " + intvlValue + " ms mark");
    refreshAds();
    myStopFunction();
	debugOut("Setting ad refresh timer of " + intvlValue + " ms")
    refreshTimer = setTimeout(function () { myTimerAction() }, intvlValue);
}

function myStopFunction() {
	debugOut("Clearing refreshTimer")
    clearTimeout(refreshTimer);
    refreshTimer = null;
}

// the myTimerAction() function is intended to be used by a client;
// this is intended to be a utility function.
function refreshAds() {

	refreshCnt++;
	googletag.pubads().setTargeting("RxCount", refreshCnt.toString());
    googletag.pubads().setTargeting("Refresh", "True");
	
	pbjs.que.push(function() {
      pbjs.requestBids({
        timeout: PREBID_TIMEOUT,
        bidsBackHandler: function() {
          pbjs.setTargetingForGPTAsync();
          googletag.pubads().refresh(); 
        }
      });
    });
    doCustomAnalytics('ads', 'refresh');
}

function doCustomAnalytics( evtCat, evtAct ) {
	// Google Analytics
    __gaTracker('send', {
        'hitType': 'event',          // Required.
        'eventCategory': evtCat,   // Required.
        'eventAction': evtAct,      // Required.
        'eventLabel': document.title,
        'eventValue': refreshCnt,
        'nonInteraction': 1
    });
}

// START GAME EVENTS AD REFRESH LOGIC
var gameEvtTimerDone = true; // refresh ads when an event and this boolean is true
var gameEvtTimer;


function cmgGameEvent(cm_game_evt, cm_game_lvl) {
	if (window.location.pathname == '/0-catch-the-candy-mech' && getCookie("mbox")) {
		if(cm_game_evt == "start" && cm_game_lvl == undefined){
			doCustomAnalytics('ab-video-test-events', 'start');
			console.log('ab-video-test-events');
		}
	}
	if (!skipGameEvtsLogic) {
		debugOut("cmgGameEvent 2 params received values: " + cm_game_evt + " | " + cm_game_lvl);
		if (useNonGameEvtsTimer) {
			// switch to using Game Events ad refresh logic
			debugOut("Stopping ad refresh timer - switching to Game Events logic");
			myStopFunction();
			useNonGameEvtsTimer = false;
			// set the Game Events ad refresh Timer
			if(window.location.pathname == '/0-reach-the-core' ) {
				intvlValue = 120000; // 2 minutes
			} else if(window.location.pathname == '/0-pixel-quest-the-lost-gifts' || window.location.pathname == '/0-ayo-the-hero' || window.location.pathname == '/0-dig-to-china' || window.location.pathname == '/0-jelly-truck' || window.location.pathname == '/0-jelly-escape') {
				intvlValue = 180000; // 3 minutes
			} else if(window.location.pathname == '/0-run' || window.location.pathname == '/0-run-2') {
				intvlValue = 180000; // 5 minutes
			} else if(window.location.pathname == '/0-fireboy-watergirl-2-light-temple' || window.location.pathname == '/0-fireboy-watergirl-3-ice-temple' || window.location.pathname == '/0-fireboy-watergirl-4-crystal-temple' || window.location.pathname == '/0-fireboy-watergirl-forest-temple') {
				intvlValue = 300000; // 5 minutes
			} else {
				intvlValue = ad_refresh_event_interval? ad_refresh_event_interval : 30000; // 30 sec
			}
            debugOut("Setting Game Evts ad refresh timer of " + intvlValue + " ms")
		    gameEvtTimer = setTimeout(function () { gameEvtTimerAction() }, intvlValue);
		    gameEvtTimerDone = false;
		}
		if (typeof cm_game_lvl !== 'undefined' && cm_game_evt != 'station') { 
			debugOut("AN EVENT HAPPENED - A LEVEL VALUE WAS RECEIVED");
			gameEvtRefreshAds();
			doCustomAnalytics('game-events', 'start-' + cm_game_lvl);
		} else if (cm_game_evt == "start" || cm_game_evt == "replay" || cm_game_evt == "restart" ) {
			debugOut("STARTING OR RESTARTING PLAY - NO LEVEL INDICATED");
			gameEvtRefreshAds();
			doCustomAnalytics('game-events', 'start');
		} else if (cm_game_evt == 'station') {
			debugOut("STATION RECEIVED");
			doCustomAnalytics('game-events', 'station-' + cm_game_lvl);
		} else if (cm_game_evt !== 'undefined') {
			debugOut("MISC GAME EVENT RECEIVED");
			doCustomAnalytics('game-events', cm_game_evt + '-' + cm_game_lvl);
		}
	} else {
		debugOut("SKIPPING GAME EVENTS LOGIC");
	}
}

// We can't refresh ads until window has finished loading.
var refreshAvail = 0;
jQuery( window ).load(function() {
  refreshAvail = 1;
});

function gameEvtRefreshAds() {
	if ( refreshAvail && gameEvtTimerDone) {
		refreshCnt++;
		debugOut("Game Evts ad refresh");
    	googletag.pubads().setTargeting("RxCount", refreshCnt.toString());
    	googletag.pubads().setTargeting("Action_Refresh", "True");
	    pbjs.que.push(function() {
	      pbjs.requestBids({
	        timeout: PREBID_TIMEOUT,
	        bidsBackHandler: function() {
	          pbjs.setTargetingForGPTAsync();
	          googletag.pubads().refresh(); 
	        }
	      });
	    });
		doCustomAnalytics('ads', 'evt-refresh');
		debugOut("Setting Game Evts ad refresh timer of " + intvlValue + " ms");
	    gameEvtTimer = setTimeout(function () { gameEvtTimerAction() }, intvlValue);
	    gameEvtTimerDone = false;
		
	}
}
function gameEvtTimerAction() {
	console.log("Game Evts timer mark");
	gameEvtTimerDone = true;
	clearGameEvtTimer();
}

function clearGameEvtTimer() {
	debugOut("Clearing gameEvtTimer")
    clearTimeout(gameEvtTimer);
    gameEvtTimer = null;
}
;
/**
 * @file
 * Uses the same old code from coolmath-games.com it's requirements.
 * Responsible for analytics.
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//web.archive.org/web/20160630185019/http://www.google-analytics.com/analytics.js','__gaTracker');

__gaTracker('create', 'UA-1192998-2', 'auto');
if(typeof eVar12 !== 'undefined') {
    if(eVar12 === 'NoRefreshAds') {
        __gaTracker('send', 'pageview', {'dimension6': eVar12, 'dimension7': eVar12});
    } else if(eVar12 === 'NoPrerollAds') {
        __gaTracker('send', 'pageview', {'dimension6': eVar12, 'dimension7': eVar12});
    } else if(eVar12 === 'No-Preroll-No-RefreshAds') {
        __gaTracker('send', 'pageview', {'dimension6': eVar12, 'dimension7': eVar12});
    } else if(eVar12 === 'RegularPage') {
        __gaTracker('send', 'pageview', {'dimension6': eVar12, 'dimension7': eVar12});
    } else if(eVar12 === 'RegularPage1') {
        __gaTracker('send', 'pageview', {'dimension6': eVar12, 'dimension7': eVar12});
    }
}
else {
    __gaTracker('send', 'pageview');
}





function recircEvt(evtAction) {
	// console.log("recircEvt: event action to track = " + evtAction);
    __gaTracker('send', {
        'hitType': 'event',          // Required.
        'eventCategory': 'recirc',   // Required.
        'eventAction': evtAction,      // Required.
        'eventLabel': document.title,
        'eventValue': 0,
        'nonInteraction': 1
    });
}

function emptyAdEvt(width, height) {
	adSize = width + 'x' + height;
	// console.log("emptyAdEvt: logging empty found for ad size " + adSize);
    __gaTracker('send', {
        'hitType': 'event',          // Required.
        'eventCategory': 'ads',   // Required.
        'eventAction': 'empty_ad',      // Required.
        'eventLabel': adSize,
        'eventValue': 0,
        'nonInteraction': 1
    });
}
;


}
/*
     FILE ARCHIVED ON 18:50:19 Jun 30, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:46:34 Oct 10, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.538
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 9.64
  LoadShardBlock: 65.843 (3)
  PetaboxLoader3.datanode: 74.338 (4)
  load_resource: 83.95
  PetaboxLoader3.resolve: 60.923
*/