$(document).ready(function(){

    var colour = 'red';

    function nextMsg() {
        if (messages.length == 0) {
            // once there is no more message, do whatever you want
            alert("growing older...");
            window.location = "How To Be a Ninja in Real Life_ Modern Warrior Guide.html";
        } else {
            if (colour == 'red'){
                colour = 'orange';
            } else {
                colour = 'red';
            }
            $('.wp-block-post-title').css('color', colour);
            // change content of message, fade in, wait, fade out and continue with next message
            $('.wp-block-post-title').html(messages.pop()).fadeIn(500).delay(4000).fadeOut(500);
            console.log(messages);
            setTimeout(function() {
                nextMsg();
            }, 5000);


        }
    };
    // list of messages to display
    var messages = [
        "are you all coming over tonight?",
        "yeah of course, i’m looking forward to it",
        "i can’t wait, we haven’t hung out in ages!",
        "i’m so grateful that we get to all be together"
    ].reverse();

    $('.wp-block-post-title').delay(3000).fadeOut(500);

    setTimeout(function() {
        nextMsg();
    }, 4000);
    
})