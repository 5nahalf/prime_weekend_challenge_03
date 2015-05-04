SC.initialize({
  client_id: '330553b1263cf71c5c58d5cf6b5a22db'
});

var track;

    $(document).ready(function() {
        $("#searchBox").keyup(function(event){
            if(event.keyCode == 13){
                $(".searchBtn").click();
            }
        });


    $(".searchBtn").on("click", function(){
        event.preventDefault();
        track = $("#searchField").val();
        SC.get('/tracks', { genres: track }, function(tracks) {
            $(tracks).each(function(index, track) {
                $('#results').append($('<li></li>').html(track.title + ' - ' + "<a href=" + track.permalink_url + ">Play that shit now!</a>"));
                console.log(tracks)
            });
        });

    });
    $(".clearList").on("click", function(){
        $("li").remove();
    });

});