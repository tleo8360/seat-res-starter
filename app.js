
//
// $(".available").on("click", function(){
//   var result = window.prompt("Enter name")
//   $(this).console.log("result");
// });

$("#form").hide();

$(".available").on("click", function(){
  var seat = $(this);
  var name;
  var email;
  seat.addClass("reserved");
  $("#form").show();

  $(".submit").on("click", function(e){
    var thisForm = $(this);
    e.preventDefault();
    name = $("#name").val();
    email = $("#email").val();
    seat.html(name);
    console.log(name, email);
    $('#form').hide();
  });

});





// $(".submit").on("click", function(){
//   $(".reserved").append();
// });

// $(".reserved").on("hover", function(){
//   $(this).
// })
