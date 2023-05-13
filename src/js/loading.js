$(document).ready(function() {
    $('#loading-screen').css({
        'opacity': '0'
    });
    
    setTimeout(() => {
        $('#loading-screen').hide();
    }, 1000);
});