for (var i = 0; i < 24; i ++) {
var newSeat = $("<div class='available'></div>");
  newSeat.attr("id", i);
$(".seat-chart").append(newSeat);
}

var currentSeat;

$(".available").on("click", function(){
  $("form").show();
  currentSeat = $(this).attr('id');
});

$("button").on("click", function(){
  var name = $("[name="name"]").val();
  var email = $("[name="email"]").val();
  var userData = {
    name: name,
    email: email
  };
  console.log(userData);
  $("form").hide();
  $("#" + currentSeat).toogleClass("reserved available");
});
