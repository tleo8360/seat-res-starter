
//
// $(".available").on("click", function(){
//   var result = window.prompt("Enter name")
//   $(this).console.log("result");
// });
$(".available").on("click", function(){
  $(this).addClass("reserved");
});

$("#form").hide();
$(".available").on("click", function(){
  $("#form").show();
});

$(".submit").on("click", function(){
  $(this).hide();
});

// var name = $("#name").val();
// var email = $("#email").val();
//
// $(".submit").on("click", function(){
//   $(".reserved").append("<p>hi</p>");
// });
//
// $(".reserved").on("hover", function(){
//   $(this).show()
// })
