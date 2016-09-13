var effort = "";
var impact = "";

var calculateAnswer = function() {
  if(effort == "high" && impact == "high") {
    $("#answer-response").html("Absolutely. Good luck.");
  }

  if(effort == "high" && impact == "low") {
    $("#answer-response").html("In the trash it goes.");
  }

  if(effort == "low" && impact == "high") {
    $("#answer-response").html("Definitely!");
  }

  if(effort == "low" && impact == "low") {
    $("#answer-response").html("Maybe later.");
  }
}

var selectEffort = function(response) {
  effort = response;
  $("#effort").hide();
  $("#impact").show();
}

var selectImpact = function(response) {
  impact = response;
  calculateAnswer();
  $("#impact").hide();
  $("#answer").show();
}

var startOver = function() {
  $("#answer").hide();
  $("#effort").show();
}
