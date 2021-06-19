$(document).ready(function(){
    var idArray = [];
    $('.piano-key').each(function () {
        idArray.push(this.id);
    });
    console.log(idArray)

    $(".piano-key").on("click", function (event) {

        console.log(event.target.id);
        var selected = $("#"+event.target.id).children("audio").attr("id");

        console.log(selected);

        var audio = selected.attr('src')[0]
        audio.play();

        $(event.target.id).find("audio").each(function (){
        console.log("1")
            var audio = $(this).attr('id')[0]
            audio.play();
        });


        // console.log(event.target.id,idArray.length);
        //     $(event.target.id).on("click", function () {
        //         var audio = $("#key1")[0];
        //         audio.play();
        //     });
    })
});
