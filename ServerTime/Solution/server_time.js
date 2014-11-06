/** namespace. */
var rh = rh || {};
rh.servertime = rh.servertime || {};

rh.servertime.sendPost = function() {
  var messageStart = $("#message-start").val();
  var messageEnding = $("#message-ending").val();
  var customMessages = {"start": messageStart, "ending": messageEnding};
  $.post( "/servertime", customMessages )
  .done(function( data ) {
    console.log("Successfully added custom messages " + JSON.stringify(data));
    $("#response-message-output").text(data.message);
  })
  .fail(function(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("POST Request Failed: " + err);
  });
};

rh.servertime.enableButtons = function() {
  $("#get-server-time").click(function() {
    $.getJSON("/servertime", {"add_custom_messages": true})
    .done(function(json) {
      console.log("JSON Data: " + JSON.stringify(json));
      $("#response-message-output").text(json.message);
    }).fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      console.log("GET JSON Request Failed: " + err);
    });
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