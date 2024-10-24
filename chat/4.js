$(document).ready(function(){

    var colour = 'red';

    function nextMsg() {
        if (messages.length == 0) {
            // once there is no more message, do whatever you want
            alert("growing older...");
            window.location = "Gmail.html";
        } else {
            if (colour == 'red'){
                colour = 'orange';
            } else {
                colour = 'red';
            }
            $('.c-pwa-live-text-banner__heading').css('color', colour);
            // change content of message, fade in, wait, fade out and continue with next message
            $('.c-pwa-live-text-banner__heading').html(messages.pop()).fadeIn(500).delay(3000).fadeOut(500, nextMsg);

        }
    };
    // list of messages to display
    var messages = [
       "ooo that’s cute",
       "yeah i got my first paycheck so now i get to spend it :p", 
       "do you want to hangout on saturday?",
        "duh! let’s invite lily and jessie and celine.",
         "yay!! i’m so excited, i feel like life has been so fun lately" 
    ].reverse();

    $('.c-pwa-live-text-banner__heading').delay(3000).fadeOut(500);

    setTimeout(function() {
        nextMsg();
    }, 4000);
    
})