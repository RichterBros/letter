$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person = $("input#person").val();

    $(".userName").text(person);

    $("#letter").show();

    event.preventDefault();
  });
});