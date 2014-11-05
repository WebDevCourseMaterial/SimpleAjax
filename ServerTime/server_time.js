/** namespace. */
var rh = rh || {};
rh.servertime = rh.servertime || {};

rh.servertime.sendPost = function() {
};

rh.servertime.enableButtons = function() {
  $("#get-server-time").click(function() {

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
});