//controls the text fadein and fadeout - needs improving 


$(document).ready(function(){
  $("#line1").fadeIn(2500, function(){
  $("#line2").fadeIn(2500, function(){
    $("#line3").fadeIn(2500, function(){
      $("#line4").fadeIn(2500, function(){
        $("#line1").fadeOut(500, function(){
          $("#line2").fadeOut(500, function(){
            $("#line3").fadeOut(500, function(){
                $("#line4").fadeOut(500, function(){
                  $("#line5").fadeIn(2500, function(){
                    $("#line5").fadeOut(1000, function(){
                      $("#line6").fadeIn(2500, function(){
                          $("#line7").fadeIn(2500, function(){
                            $("#line6").fadeOut(500,function(){
                              $("#line7").fadeOut(500, function(){
                                $("#line8").fadeIn(2500, function(){
                                  $("#line9").fadeIn(2500,function(){
                                    $("#line8").fadeOut(500,function(){
                                      $("#line9").fadeOut(500, function(){
                                        $("#line10").fadeIn(3000,function(){
                                          $("#yesButton").show();
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                  });
                });
            });
          });
        });
      });
    });
  });
});
});
