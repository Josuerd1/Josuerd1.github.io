var main = function() {
    var state;
    var volume;
  

//The PLAY button
$('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
});

//The PAUSE Button
$('#pause').click(function(){
  $('#message').text("track paused");
  $('#player').trigger("pause");
});

//The MUTE button
$('#mute').click(function(){
    $('#message').text("Muted");
    $('#player').prop('muted',true);
});

//The UNMUTE button
$('#unmute').click(function(){
    $('#message').text("Unmuted");
    $('#player').prop('muted',false);
});

//The STOP button
$('#stop').click(function(){
    $('#message').text("Track Stopped");
    $('#player').trigger("pause");
    $('#player').prop('currentTime', 0);
});

//The VOLUp button
$('#volUp').click(function(){
    $('#player').trigger("volUp");

    VolumeUp= $("#player").prop('volume');  
    $("#player").prop('volume', VolumeUp+0.1);
});

//The VolDown button
$('#volDown').click(function(){
    $('#player').trigger("volDown");

    
      VolumeDown= $("#player").prop('volume');
      $("#player").prop('volume', VolumeDown-0.1);
});

    $('#next').click(function(){
    $('#message').text("Next Track");
    $('#player').trigger("next");

  
}

$(document).ready(main);
