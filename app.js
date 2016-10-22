for (var i = 0; i < 24; i ++) {
var newSeat = $("<div class='available'></div>");
  newSeat.attr("id", i);
$(".seat-chart").append(newSeat);
}

var currentSeat;

$(".available").on("click", function(){
  $("form").show();
  currentSeat = $(this).attr('id');
  console.log(currentSeat);
});

$("button").on("click", function(){
  var userData = {
    name: "",
    email: ""
  };
  $("form").hide();
  $("#" + currentSeat).toogleClass("reserved available");
});
