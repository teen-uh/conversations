$(document).ready(function(){

    var colour = 'red';

    function nextMsg() {
        if (messages.length == 0) {
            // once there is no more message, do whatever you want
            alert("together into the future...");
            window.location = "about.html";
        } else {
            if (colour == 'red'){
                colour = 'orange';
            } else {
                colour = 'red';
            }
            $('.entry-title').css('color', colour);
            // change content of message, fade in, wait, fade out and continue with next message
            $('.entry-title').html(messages.pop()).fadeIn(500).delay(4000).fadeOut(500);
            console.log(messages);
            setTimeout(function() {
                nextMsg();
            }, 5000);

        }
    };
    // list of messages to display
    var messages = [
        "haha, do you remember watching that video as a kid?",
        "so clearly.",
        "i can’t believe we’re already 20.",
        "it feels like yesterday when we first did that",
        "and then next year we’ll be done with school as well",
        "time passes so quickly",
        "what do you think our future holds?"
    ].reverse();

    $('.entry-title').delay(3000).fadeOut(500);

    setTimeout(function() {
        nextMsg();
    }, 4000);
    
})