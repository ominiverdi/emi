$(function() {
  // Run code

  $( ".start" ).click(function() {
    console.log("start");
    $( "#schene-0" ).hide();
    $( "#schene-1" ).show();
    $wWidth = $( window ).width();
    $( ".sylv2" ).animate({
      // opacity: 0.25,
      left: "+="+$wWidth/2,
      // height: "toggle"
    }, 4000, function() {
      // Animation complete.
      console.log("complete");
      $( ".vignette2" ).animate({
        // opacity: 0.25,
        left: $wWidth/2-100,
        // height: "toggle"
      }, 100, function() {

      });
      $( ".sylv1" ).animate({
        // opacity: 0.25,
        left: "+="+$wWidth/3,
        // height: "toggle"
      }, 4000, function() {
        $( ".vignette1" ).animate({
          // opacity: 0.25,
          left: "0",
          // height: "toggle"
        }, 100, function() {

        });
      });
      $( ".sylv3" ).animate({
        // opacity: 0.25,
        right: "+="+$wWidth/3,
        // height: "toggle"
      }, 4000, function() {
        $( ".vignette3" ).animate({
          // opacity: 0.25,
          right: 12,
          // height: "toggle"
        }, 100, function() {

        });
      });

    });
  });
});

function openDialog(){
        // $("#dialog").dialog({
        //     modal: true,
        //     height: 590,
        //     width: 1005
        // });
        var vignette = $('#vignetteBox');
        vignette.show();
}
