
//On click events to display articles 

$("#show1").click(function(){
    $("#articles1").show();
});

$("#show2").click(function(){
    $("#articles2").show();
    $("#articles1").hide();
});

$("#show3").click(function(){
    $("#articles3").show();
    $("#articles2").hide();
    $("#articles1").hide();
});


