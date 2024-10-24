$(document).ready(function(){

    var colour = 'red';

    function nextMsg() {
        if (messages.length == 0) {
            // once there is no more message, do whatever you want
            alert("growing older...");
            window.location = "UO Best Sellers.html";
        } else {
            if (colour == 'red'){
                colour = 'orange';
            } else {
                colour = 'red';
            }
            $('.profile-gate-label').css('color', colour);
            // change content of message, fade in, wait, fade out and continue with next message
            $('.profile-gate-label').html(messages.pop()).fadeIn(500).delay(3000).fadeOut(500, nextMsg);

        }
    };
    // list of messages to display
    var messages = [
        "dude you will not believe what happened today", 
        "what?? you never tell me things",
        "jessie got mad at lily in class and now our entire friend group is ruined",
        "that is SO annoying",
         "right?? my life is overr"
    ].reverse();

    $('.profile-gate-label').delay(3000).fadeOut(500);

    setTimeout(function() {
        nextMsg();
    }, 4000);
    
})