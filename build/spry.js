(function ($) {

    $.fn.navbar = function(options){

        var travel_mobile_button = $(".travel-mobile-button");

        travel_mobile_button.on("click", function () {

            $(".travel-mobile").each(function () {
                if (this.style.display == "block") {

                    console.log(".travel-mobile: block->none");
                    this.style.display = "none"
                } else {

                    console.log(".travel-mobile: none->block");
                    this.style.display = "block"
                }
            })
        });

        return this
    };

}( jQuery ));