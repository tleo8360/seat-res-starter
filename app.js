for (var i = 0; i < 24; i ++) {
var newSeat = $("<div class='available'></div>");
$(".seat-chart").append(newSeat);
}

$(".available, .reserved").on("click", function(){
  $(this).toogleClass("reserved available");
});
