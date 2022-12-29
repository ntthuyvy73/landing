// console.log(bodyApp);

jQuery(function ($) {
    // console.log(document.querySelector(".owl-single"));

    var owlPlugin = function () {
        // console.log("owlPlugin");

        // var a = document.getElementsByClassName("owl-single");
        console.log($(".owl-single"));
        if ($(".owl-single").length > 0) {
            // console.log($(".owl-single"));
            const owl = $(".owl-single").owlCarousel({
                loop: true,
                autoHeight: true,
                margin: 0,
                autoplay: true,
                smartSpeed: 800,
                mouseDrag: false,
                touchDrag: false,
                items: 1,
                nav: false,
                navText: [
                    '<span class="icon-keyboard_backspace"></span>',
                    '<span class="icon-keyboard_backspace"></span>',
                ],
                onChanged: changed,
            });
            function changed(event) {
                let i = event.item.index;
                // console.log(i);
                if (i == 0 || i == null) {
                    i = 1;
                } else {
                    i = i - 1;
                    $(".js-custom-dots a").removeClass("active");
                    $('.js-custom-dots a[data-index="' + i + '"]').addClass(
                        "active"
                    );
                }
            }
            // console.log("vvv");
            $(".js-custom-dots a").each(function (i) {
                // console.log("xxx");
                i = i + 1;
                $(this).attr("data-index", i);
            });
            $(".js-custom-dots a").on("click", function (e) {
                e.preventDefault();
                owl.trigger("stop.owl.autoplay");
                let k = $(this).data("index");
                k = k - 1;
                owl.trigger("to.owl.carousel", [k, 500]);
            });
        }

        // sliders
        if ($(".owl-slider").length > 0) {
            const owlSlider = $(".owl-slider").owlCarousel({
                loop: true,
                autoHeight: true,
                margin: 40,
                autoplay: true,
                smartSpeed: 700,
                items: 2,
                stagePadding: 0,
                nav: false,
                dots: true,
                navText: [
                    '<span class="icon-keyboard_backspace"></span>',
                    '<span class="icon-keyboard_backspace"></span>',
                ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    800: {
                        items: 2,
                    },
                    1000: {
                        items: 2,
                    },
                    1100: {
                        items: 2,
                    },
                },
            });

            $(".next-link").click(function (e) {
                e.preventDefault();
                owlSlider.trigger("next.owl.carousel");
            });
            $(".pre-link").click(function (e) {
                e.preventDefault();
                owlSlider.trigger("prev.owl.carousel");
            });
        }
    };
    owlPlugin();

    //counter
    var counter = function () {
        var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
        // console.log(comma_separator_number_step);
        $(".count-numbers .number").each(function () {
            // console.log($(this));
            var $this = $(this),
                num = $this.data("number");
            $this.animateNumber(
                {
                    number: num,
                    numberStep: comma_separator_number_step,
                },
                4000
            );
        });

        // $(".count-numbers").waypoint(
        //     function (direction) {
        //         console.log(direction);
        //         console.log($(this.element));
        //         if (
        //             direction === "down" &&
        //             !$(this.element).hasClass("ut-animated")
        //         ) {

        //         }
        //     },
        //     {
        //         offset: "95%",
        //     }
        // );
    };
    counter();
});
