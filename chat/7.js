$(document).ready(function(){

    var colour = 'red';

    function nextMsg() {
        if (messages.length == 0) {
            // once there is no more message, do whatever you want
            alert("growing older...");
            window.location = "BEST Sugar Cookie Recipe _ Soft, Chewy Drop-Style Cookies.html";
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
        "i don’t think college is for me",
        "me neither honestly",
        "how come everyone’s made friends already??",
         "aww i’m sorry, maybe try joining some clubs?",
        " it’s just, i don’t feel like i belong here"
    ].reverse();

    $('#change').delay(3000).fadeOut(500);

    setTimeout(function() {
        nextMsg();
    }, 4000);
    
})