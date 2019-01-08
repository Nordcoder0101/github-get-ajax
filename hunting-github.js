function displayName(data){
  $(".content").html(data)
}

$(document).ready(function(){
  $('.clickme').on('click', function(){
    console.log('clicked')
    $.ajax({
      url: "https://api.github.com/users/nordcoder0101",
      type: "get",

    }).done(function(res){
      console.log(res.name)
      displayName(res.name)
    })
  })
})