// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {
    // Resize video to full screen
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    // If you want to keep full screen on window resize
    $(window).resize(function(){
        $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    });
});