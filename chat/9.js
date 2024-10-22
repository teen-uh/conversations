$(document).ready(function(){

    var colour = 'red';

    function nextMsg() {
        if (messages.length == 0) {
            // once there is no more message, do whatever you want
            alert("growing older...");
            window.location = "Cool Math Games - Free Online Math Games, Cool Puzzles, and More.html";
        } else {
            if (colour == 'red'){
                colour = 'orange';
            } else {
                colour = 'red';
            }
            $('#eow-title').css('color', colour);
            // change content of message, fade in, wait, fade out and continue with next message
            $('#eow-title').html(messages.pop()).fadeIn(500).delay(3000).fadeOut(500, nextMsg);

        }
    };
    // list of messages to display
    var messages = [
        "hehehehe",
        "this video is so funny",
        "i think so too!",
        "ha! i am ninja!!!",
        "can you come playdate tomorrow too?",
        "yes!! mommy can i come play againnn?"
    ].reverse();

    $('#eow-title').delay(3000).fadeOut(500);

    setTimeout(function() {
        nextMsg();
    }, 4000);
    
})