$(document).ready(function(){

    var colour = 'red';

    function nextMsg() {
        if (messages.length == 0) {
            // once there is no more message, do whatever you want
            alert("growing older...");
            window.location = "Vancouver to Los Angeles _ Google Flights.html";
        } else {
            if (colour == 'red'){
                colour = 'orange';
            } else {
                colour = 'red';
            }
            $('#change').css('color', colour);
            // change content of message, fade in, wait, fade out and continue with next message
            $('#change').html(messages.pop()).fadeIn(500).delay(3000).fadeOut(500, nextMsg);

        }
    };
    // list of messages to display
    var messages = [
        "have you figured out where you’re going yet?",
         "no, have you?",
          "no LOL can you believe we’re really gonna graduate?",
          "high school been sooo long",
           "i can’t wait for our hot girl summer",
            "eeee!"
    ].reverse();

    $('#change').delay(3000).fadeOut(500);

    setTimeout(function() {
        nextMsg();
    }, 4000);
    
})