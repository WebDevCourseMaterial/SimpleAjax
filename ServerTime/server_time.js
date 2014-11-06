/** namespace. */
var rh = rh || {};
rh.servertime = rh.servertime || {};

rh.servertime.sendPost = function() {
    console.log("You would like to make a POST to the server.");
};

rh.servertime.enableButtons = function() {
  $("#get-server-time").click(function() {
    console.log("You clicked 'Get server time'.");
  });

  $("#send-post").click(function() {
      rh.servertime.sendPost();
  });
  
  $("input[type=text]").keyup(function(event) {
    if (event.which == 13) {
      rh.servertime.sendPost();
    }
  });
};


$(document).ready(function() {
  rh.servertime.enableButtons();
  $("#message-start").focus();
});