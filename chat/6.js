$(document).ready(function(){

    var colour = 'red';

    function nextMsg() {
        if (messages.length == 0) {
            // once there is no more message, do whatever you want
            alert("growing older...");
            window.location = "Home _ USC Libraries.html";
        } else {
            if (colour == 'red'){
                colour = 'orange';
            } else {
                colour = 'red';
            }
            $('.zBTtmb').css('color', colour);
            // change content of message, fade in, wait, fade out and continue with next message
            $('.zBTtmb').html(messages.pop()).fadeIn(500).delay(4000).fadeOut(500);
            console.log(messages);
            setTimeout(function() {
                nextMsg();
            }, 5000);

        }
    };
    // list of messages to display
    var messages = [
        "in a month we’ll all be separated",
        "i guess...",
         "aren’t you excited?",
         " yeah but i’m also so nervous",
          "i’m gonna miss you so so much",
          "me too :("
    ].reverse();

    $('.zBTtmb').delay(3000).fadeOut(500);

    setTimeout(function() {
        nextMsg();
    }, 4000);
    
})