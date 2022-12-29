{
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const bodyApp = $(".app");
    const navbar = $(".navbar");
    const menuBar = $(".mobile-menu-bars");
    const mobileMenuClose = $(".mobile-menu-close");
    const mobileMenu = $(".mobile-menu");
    let mobileMenuLink = $$(".mobile-menu-list li a");
    // const arrowCollapse = $(".arrow-collapse");

    // console.log(mobileMenuLink);

    const arrowsCollapse = $$(".arrow-collapse");
    // console.log(arrowsCollapse);

    AOS.init({
        duration: 800,
        easing: "ease",
        once: true,
    });

    // console.log(bodyApp);

    const app = {
        //==========function=================
        closeMenu: function () {
            bodyApp.classList.remove("offcanvas-menu");
            mobileMenu.classList.remove("mobile-show");
        },

        showSubMenu: function (arrowCollapse) {
            if (!arrowCollapse.classList.contains("collapse")) {
                // console.log("aaaa");
                arrowCollapse.classList.add("collapse");
                const nextSibling = arrowCollapse.nextElementSibling;
                // console.log(nextSibling);
                nextSibling.classList.add("show");
            } else {
                // console.log("bbb");
                arrowCollapse.classList.remove("collapse");
                const nextSibling = arrowCollapse.nextElementSibling;
                // console.log(nextSibling);
                nextSibling.classList.remove("show");
            }
        },

        //==========end function=================

        handleEvents: function () {
            // ========menu mobile========
            menuBar.onclick = function (e) {
                e.stopPropagation();
                // console.log(e.target);
                // console.log(e.target.closest(".app"));
                bodyApp.classList.add("offcanvas-menu");
                mobileMenu.classList.add("mobile-show");

                //get menulist
                const menuList = $$(".menu-clone-nav");
                // console.log(menuList);
                menuList.forEach((menuItem) => {
                    if (menuItem.classList.contains("menu-list")) {
                        menuItem.classList.remove("menu-list");
                        menuItem.classList.add("mobile-menu-list");
                        menuItem.classList.add("mb-0");
                    }

                    if (menuItem.classList.contains("actions")) {
                        const menuActionList = $$(".actions li a");
                        menuActionList.forEach((menuActionItem) => {
                            menuActionItem.classList.remove("btn");
                            menuActionItem.classList.remove("cta-sign-in");
                            menuActionItem.classList.remove("btn-primary");
                        });

                        menuItem.classList.remove("actions");
                        menuItem.classList.add("mobile-menu-list");
                    }

                    $(".mobile-menu-body").appendChild(menuItem);
                });

                mobileMenuLink = $$(".mobile-menu-list li a");
                // console.log(mobileMenuLink);

                //click menu de show submenu
                mobileMenuLink.forEach((linkItem) => {
                    linkItem.onclick = function () {
                        mobileMenuLink.forEach((item2) => {
                            item2.classList.remove("active");
                        });

                        linkItem.classList.add("active");
                        // console.log(linkItem.parentElement);
                        const parentElement = linkItem.parentElement;
                        if (parentElement.classList.contains("has-children")) {
                            // console.log("bbb");
                            // // app.showSubMenu();
                            // console.log(parentElement.childNodes);
                            parentElement.childNodes.forEach((childItem) => {
                                // console.log(childItem.nodeName);
                                // console.log(typeof childItem.className);

                                if (
                                    childItem.nodeName == "SPAN" &&
                                    childItem.className.includes(
                                        "arrow-collapse"
                                    )
                                ) {
                                    app.showSubMenu(childItem);
                                }
                            });
                        }
                    };
                });
            };

            mobileMenuClose.onclick = function (e) {
                app.closeMenu();
                mobileMenu.classList.remove("mobile-show");
            };

            //click ngoai body thi` xem nhu close menu
            bodyApp.onclick = function (e) {
                app.closeMenu();
            };

            //click vao menu de ko bi close menu
            mobileMenu.onclick = function (e) {
                e.stopPropagation();
            };

            //click arrowCollapse de show submenu

            arrowsCollapse.forEach((arrowCollapse) => {
                arrowCollapse.onclick = function (e) {
                    // console.log(arrowCollapse);
                    // console.log(e.target.className);
                    app.showSubMenu(arrowCollapse);
                };
            });

            window.onscroll = function () {
                const top =
                    document.body.scrollTop ||
                    document.documentElement.scrollTop;
                // console.log(top);
                navbar.classList.remove("scrolled");

                if (top > 150) {
                    if (!navbar.classList.contains("scrolled")) {
                        navbar.classList.add("scrolled");
                    }
                }
            };

            // ========endmenu========
        },

        //start
        start: function () {
            // var a = document.getElementsByClassName("owl-single");
            // console.log(a);
            // console.log(owlSingle);

            this.handleEvents();
        },
    };

    app.start();
}
