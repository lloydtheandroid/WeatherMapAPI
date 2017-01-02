(function() {
    "use strict";

    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65,13";
    var code = 0;
    $(document).keydown(function(e) {

        kkeys.push( e.keyCode );

        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
            if (code == 0) {
                $("#top").addClass("konami");
                $("#header").addClass("text-center");
                $("#headline").addClass("konami-footer");
                $('.btn').batweather()
            }
        }
    })
})();