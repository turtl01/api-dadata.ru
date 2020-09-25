$( document ).ready(function() {
  $( "#pop" ).on('click', '.item', function(event) {
    var value = event.target.outerText;
    $("#target").val(value);
    $( "#pop").empty().hide();
  });
  $( "#target" ).keyup(function(event) {
    send(event.target.value);
  });
});


var send =  function (query){
  var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  var token = "b933dbe42fabaab6561e40ec99570a5291b219cc";

  $.ajax(
    {
    url: url,
    type: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    data: JSON.stringify({query: query}),
    success: function(response){

      if (response.suggestions.length == 0 && !$( document ).find("#pop .item").length) {
        $( "#pop").hide();

      } else {

        $( "#pop").empty().show();

        response.suggestions.forEach((item) => {
          $("#pop").append('<div class="item">'+item.value+'</div>');

        });
      }
    },
    dataType: 'JSON',
    crossDomain: true
  }
);
}
