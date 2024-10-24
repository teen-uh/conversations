$(document).ready(function(){

    var colour = 'red';

    function nextMsg() {
        if (messages.length == 0) {
            // once there is no more message, do whatever you want
            alert("growing older...");
            window.location = "Netflix.html";
        } else {
            if (colour == 'red'){
                colour = 'orange';
            } else {
                colour = 'red';
            }
            $('.game-title').css('color', colour);
            // change content of message, fade in, wait, fade out and continue with next message
            $('.game-title').html(messages.pop()).fadeIn(500).delay(4000).fadeOut(500);
            console.log(messages);
            setTimeout(function() {
                nextMsg();
            }, 5000);

        }
    };
    // list of messages to display
    var messages = [
        "what game do you want to play?",
        "you pick", 
        "hmmm ok", 
        "my mom told me that you’re moving to china", 
        "yeah, i am",
        "wahh i’m going to miss you", 
        "do you think we can still play games together?",
        "yeah!"
    ].reverse();

    $('.game-title').delay(4000).fadeOut(500);

    setTimeout(function() {
        nextMsg();
    }, 5000);
    
})