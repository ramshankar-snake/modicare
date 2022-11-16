$.fancybox.defaults.buttons = [
    "share",
    "download",
    "close"
];
$.fancybox.defaults.animationEffect = false;
$.fancybox.defaults.wheel = false;
$.fancybox.defaults.infobar = false;
$.fancybox.defaults.idleTime = 0;
$.fancybox.defaults.btnTpl.arrowLeft = '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><img src="./assets/images/btn-arrow-left.svg" alt="{{PREV}}" /></button>';
$.fancybox.defaults.btnTpl.arrowRight = '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><img src="./assets/images/btn-arrow-right.svg" alt="{{NEXT}}" /></button>';
$.fancybox.defaults.btnTpl.download = '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><img src="./assets/images/icons/icon-download-white.svg" alt="{{DOWNLOAD}}" /></a>';
$.fancybox.defaults.btnTpl.close = '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><img src="./assets/images/icons/icon-close-circled-dark.svg" alt="{{CLOSE}}" /></button>';
$.fancybox.defaults.btnTpl.share = '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><img src="./assets/images/icons/icon-share-white.svg" alt="{{SHARE}}" /></button>';
var isAnimating = false;

$(document).ready(function() {

    $(document).on('click', '.toggle-shopping-bag-notification', function() {
        shoppingBagNotification();
    });

    function shoppingBagNotification(msg) {
        var notificationDiv = $('.shopping-bag-dropdown');

        if (typeof msg === "undefined") {
            msg = "Added to cart";
        }

        notificationDiv.find('.shopping-bag-notification').html(msg);

        notificationDiv.fadeIn(500, function() {
            setTimeout(function() {
                notificationDiv.fadeOut(500);
            }, 5000);
        });
    }

    $(document).on('click', '.copy-to-clipboard', function() {
        var el = $(this);
        var targetClass = el.data('target');
        var text = el.data('text');

        if (text) {
            if (text.length) {
                copyTextToClipboard(text);
                alert(el.data('alert') ? el.data('alert') : 'Copied to clipboard');
            }
        } else if (targetClass) {
            var target = $('.' + targetClass);

            if (target.length) {
                copyTextToClipboard(target.html());
                alert(el.data('alert') ? el.data('alert') : 'Copied to clipboard');
            }
        }
    });

    function copyTextToClipboard(text) {
        var textArea = document.createElement("textarea");

        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = 0;
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = text;

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    $(document).on('input', '.jump-to-next-on-maxlength', function() {
        var el = $(this);
        var target = el.data('jumpTo');
        var targetEl = $(target);

        if (el.val().length >= el.data('maxLength')) {
            targetEl.focus();
        }
    });

    $(document).on('click', '.scroll-to-start', function() {
        var className = $(this).data('className');
        document.querySelector('.' + className).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    $(document).on('click', '.scroll-to-end', function() {
        var className = $(this).data('className');
        document.querySelector('.' + className).scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    });

    $(document).on('click', 'body', function(e) {
        var target = $(e.target);
        var body = $('body');

        if (
            body.hasClass('country-selector-dropdown-open') &&
            (
                target.closest('.country-selector-dropdown').length === 0 ||
                target.hasClass('.country-selector-dropdown')
            )) {
            toggleCountrySelectorDropdown();
        } else if (
            body.hasClass('language-selector-dropdown-open') &&
            (
                target.closest('.language-selector-dropdown').length === 0 ||
                target.hasClass('.language-selector-dropdown')
            )
        ) {
            toggleLanguageSelectorDropdown();
        } else if (
            body.hasClass('user-menu-dropdown-open') &&
            (
                target.closest('.user-menu-dropdown').length === 0 ||
                target.hasClass('.user-menu-dropdown')
            )
        ) {
            toggleUserMenuDropdown();
        } else if (
            body.hasClass('about-menu-dropdown-open') &&
            (
                target.closest('.about-menu-dropdown').length === 0 ||
                target.hasClass('.about-menu-dropdown')
            )
        ) {
            toggleAboutMenuDropdown();
        } else if (
            body.hasClass('cart-summary-dropdown-open') &&
            (
                target.closest('.cart-summary-dropdown').length === 0 ||
                target.hasClass('.cart-summary-dropdown')
            )
        ) {
            toggleCartSummaryDropdown();
        } else if (
            body.hasClass('user-mobile-menu-dropdown-open') &&
            (
                target.closest('.user-mobile-menu-dropdown').length === 0 ||
                target.hasClass('.user-mobile-menu-dropdown')
            )
        ) {
            toggleUserMobileMenuDropdown();
        }
    });

    $(document).on('click', '.header-notice .btn-close', function() {
        var headerNotice = $('.header-notice');
        headerNotice.fadeOut(500);
    });

    $(document).on('click', '.toggle-country-selector-dropdown', function() {
        var isDropdownVisible = $('.country-selector-dropdown:visible').length;

        closeAllDropdowns();
        if (!isDropdownVisible) {
            isAnimating = false;
            toggleCountrySelectorDropdown();
        }
    });

    $(document).on('click', '.toggle-language-selector-dropdown', function() {
        var isDropdownVisible = $('.language-selector-dropdown:visible').length;

        closeAllDropdowns();
        if (!isDropdownVisible) {
            isAnimating = false;
            toggleLanguageSelectorDropdown();
        }
    });

    $(document).on('click', '.toggle-user-menu-dropdown', function() {
        var isDropdownVisible = $('.user-menu-dropdown:visible').length;
        closeAllDropdowns();
        if (!isDropdownVisible) {
            isAnimating = false;
            toggleUserMenuDropdown();
        }
    });

    // $(".toggle-user-menu-dropdown").hover(function() {
    //     var isDropdownVisible = $('.user-menu-dropdown:visible').length;
    //     if (!isDropdownVisible) {
    //         closeAllDropdowns();
    //         isAnimating = false;
    //         toggleUserMenuDropdown();
    //     }
        
    // });
    

    $(document).on('click', '.toggle-about-menu-dropdown', function() {
        var isDropdownVisible = $('.about-menu-dropdown:visible').length;

        closeAllDropdowns();
        if (!isDropdownVisible) {
            isAnimating = false;
            toggleAboutMenuDropdown();
        }
    });

    // $(".toggle-about-menu-dropdown").hover(function() {
    //     var isDropdownVisible = $('.about-menu-dropdown:visible').length;
    //     if (!isDropdownVisible) {
    //         closeAllDropdowns();
    //         isAnimating = false;
    //        toggleAboutMenuDropdown();
    //     }
        
    // });

    $(document).on('click', '.toggle-cart-summary-dropdown', function() {
        var isDropdownVisible = $('.cart-summary-dropdown:visible').length;

        closeAllDropdowns();
        if (!isDropdownVisible) {
            isAnimating = false;
            toggleCartSummaryDropdown();
        }
    });

    function closeAllDropdowns() {
        var body = $('body');
        if (body.hasClass('country-selector-dropdown-open')) {
            toggleCountrySelectorDropdown();
        } else if (body.hasClass('language-selector-dropdown-open')) {
            toggleLanguageSelectorDropdown();
        } else if (body.hasClass('user-menu-dropdown-open')) {
            toggleUserMenuDropdown();
        } else if (body.hasClass('user-mobile-menu-dropdown-open')) {
            toggleUserMobileMenuDropdown();
        } else if (body.hasClass('about-menu-dropdown-open')) {
            toggleAboutMenuDropdown();
        } else if (body.hasClass('cart-summary-dropdown-open')) {
            toggleCartSummaryDropdown();
        } 
    }

    // $(document).on('click', '.toggle-side-menu, .btn-side-menu-close, .side-menu-overlay', function() {
    //     alert(1)
    //     toggleSideMenu();
    // });
    $(".toggle-side-menu").hover(function() {
        
        $("body").removeClass("side-menu-open");
        toggleSideMenu();
    });
    $(".toggle-side-menu").click(function() {
        $("body").removeClass("side-menu-open");
        toggleSideMenu();
    });
    $(".side-menu-overlay, .btn-side-menu-close").click(function() {
        toggleSideMenu();
    });

    $(document).on('click', '.toggle-nav-search', function() {
        toggleNavSearch();
    });

    $(document).on('click', '.btn-mobile-menu-close', function() {
        var body = $('body');

        if (body.hasClass('mobile-menu-search-open')) {
            toggleMobileMenuSearch();
        } else if (body.hasClass('mobile-menu-sub-menu-open')) {
            toggleMobileMenuSubMenu();
        } else if (body.hasClass('mobile-menu-country-language-menu-open')) {
            toggleMobileMenuCountryLanguageMenu();
        } else if (body.hasClass('mobile-menu-open')) {
            toggleMobileMenu();
        }
    });

    $(document).on('click', '.toggle-mobile-menu', function() {
        toggleMobileMenu();
    });

    $(document).on('click', '.toggle-user-mobile-menu-dropdown', function() {
        var isDropdownVisible = $('.user-mobile-menu-dropdown:visible').length;

        closeAllDropdowns();
        if (!isDropdownVisible) {
            isAnimating = false;
            toggleUserMobileMenuDropdown();
        }
    });

    $(document).on('click', '.mobile-menu-search-btn', function() {
        $(this).closest('form').submit();
    });

    $(document).on('focus', '#mobile-menu-search-input', function() {
        toggleMobileMenuSearch('open');
    });

    $(document).on('keyup', '#mobile-menu-search-input', function(e) {
        e.preventDefault();

        if (e.keyCode === 13) {
            window.location.href = "./search-results.html";
        }
    });

    $(document).on('click', '.toggle-mobile-menu-sub-menu', function() {
        var el = $(this);
        var targetSubMenu = el.data('target');
        toggleMobileMenuSubMenu(targetSubMenu);
    });

    $(document).on('click', '.toggle-mobile-menu-country-language-menu', function() {
        toggleMobileMenuCountryLanguageMenu();
    });

    $(document).on('click', '.toggle-mobile-menu-sub-menu', function() {
        toggleMobileMenuSubMenu();
    });

    $(document).on('change', '#mobile-menu-country-select', function() {
        var select = $(this);
        var optionSelected = select.find('option:selected');
        var flag = optionSelected.data('flag');
        select.css('background-image', "url('" + flag + "')");
    });

    $(document).on('input', '.modi-search-bar .modi-search-bar-input', function() {
        var searchInput = $(this);
        var searchBar = searchInput.closest('.modi-search-bar');

        if (searchBar.length) {
            var btnCancel = searchBar.find('.modi-search-bar-btn-cancel');
            if (searchInput.val().length) {
                btnCancel.show();
            } else {
                btnCancel.hide();
            }
        }
    });

    $(document).on('click', '.modi-search-bar .modi-search-bar-btn-cancel', function() {
        var btnCancel = $(this);
        var searchBar = btnCancel.closest('.modi-search-bar');

        if (searchBar.length) {
            var searchInput = searchBar.find('.modi-search-bar-input');
            searchInput.val('');
            btnCancel.hide();
            searchInput.focus();
        }
    });

    $(document).on('click', '.modi-excerpt-toggle', function(e) {
        e.preventDefault();
        var link = $(this);
        var excerptContainer = link.closest('.modi-excerpt');
        if (excerptContainer.find('.modi-excerpt-short:visible').length) {
            excerptContainer.addClass('show-full-text');
            link.html('Less');
        } else {
            excerptContainer.removeClass('show-full-text');
            link.html('More');
        }
    });

    $(document).on('click', '.toggle-edit-mode', function(e) {
        e.preventDefault();
        var editModeContainer = $(this).closest('.edit-mode');
        editModeContainer.toggleClass('edit-mode__enabled');
    });
});

function toggleCountrySelectorDropdown() {
    var body = $('body');
    var dropdown = $('.country-selector-dropdown');
    var isDropdownVisible = $('.country-selector-dropdown:visible').length;

    var animationSpeed = 300;

    if (!isAnimating) {
        isAnimating = true;
        body.toggleClass('country-selector-dropdown-open');

        if (isDropdownVisible) {
            dropdown.fadeOut(animationSpeed, function() {
                isAnimating = false;
            });
        } else {
            dropdown.fadeIn(animationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}

function toggleLanguageSelectorDropdown() {
    var body = $('body');
    var dropdown = $('.language-selector-dropdown');
    var isDropdownVisible = $('.language-selector-dropdown:visible').length;

    var animationSpeed = 300;

    if (!isAnimating) {
        isAnimating = true;
        body.toggleClass('language-selector-dropdown-open');

        if (isDropdownVisible) {
            dropdown.fadeOut(animationSpeed, function() {
                isAnimating = false;
            });
        } else {
            dropdown.fadeIn(animationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}

function toggleUserMenuDropdown() {
    var body = $('body');
    var dropdown = $('.user-menu-dropdown');
    var isDropdownVisible = $('.user-menu-dropdown:visible').length;

    var animationSpeed = 300;

    if (!isAnimating) {
        isAnimating = true;
        body.toggleClass('user-menu-dropdown-open');

        if (isDropdownVisible) {
            dropdown.fadeOut(animationSpeed, function() {
                isAnimating = false;
            });
        } else {
            dropdown.fadeIn(animationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}

function toggleAboutMenuDropdown() {
    var body = $('body');
    var dropdown = $('.about-menu-dropdown');
    var isDropdownVisible = $('.about-menu-dropdown:visible').length;

    var animationSpeed = 300;

    if (!isAnimating) {
        isAnimating = true;
        body.toggleClass('about-menu-dropdown-open');

        if (isDropdownVisible) {
            dropdown.fadeOut(animationSpeed, function() {
                isAnimating = false;
            });
        } else {
            dropdown.fadeIn(animationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}

function toggleCartSummaryDropdown() {
    var body = $('body');
    var dropdown = $('.cart-summary-dropdown');
    var isDropdownVisible = $('.cart-summary-dropdown:visible').length;

    var animationSpeed = 300;

    if (!isAnimating) {
        isAnimating = true;
        body.toggleClass('cart-summary-dropdown-open');

        if (isDropdownVisible) {
            dropdown.fadeOut(animationSpeed, function() {
                isAnimating = false;
            });
        } else {
            dropdown.fadeIn(animationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}

function toggleNavSearch() {
    var navLinksDesktop = $('.nav-links-desktop');
    var navSearch = $('.nav-search');
    var isNavSearchOpen = $('.nav-search:visible').length;

    var animationSpeed = 300;

    if (!isAnimating) {
        isAnimating = true;

        if (isNavSearchOpen) {
            navSearch.fadeOut(animationSpeed, function() {
                navLinksDesktop.fadeIn(animationSpeed, function() {
                    isAnimating = false;
                });
            });
        } else {
            navLinksDesktop.fadeOut(animationSpeed, function() {
                navSearch.fadeIn(animationSpeed, function() {
                    isAnimating = false;
                });
            });
        }
    }
}

function toggleSideMenu() {
    var body = $('body');
    var sideMenu = $('.side-menu');
    var sideMenuOverlay = $('.side-menu-overlay');
    var isSideMenuOpen = body.hasClass('side-menu-open');
    var sideMenuAnimationSpeed = 500;
    var overlayAnimationSpeed = 500;

    if (!isAnimating) {
        
        isAnimating = true;

        if (isSideMenuOpen) {
            body.toggleClass('side-menu-open');

            sideMenuOverlay.animate({
                "opacity": 0
            }, overlayAnimationSpeed, function() {
                sideMenuOverlay.hide();
            });

            sideMenu.animate({
                "left": "-100%"
            }, sideMenuAnimationSpeed, function() {
                sideMenu.hide();
                isAnimating = false;
            });
        } else {
            body.toggleClass('side-menu-open');

            sideMenuOverlay.show();
            sideMenuOverlay.animate({
                "opacity": 0.75
            }, overlayAnimationSpeed);

            sideMenu.show();
            sideMenu.animate({
                "left": "0"
            }, sideMenuAnimationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}

function toggleMobileMenu() {
    var body = $('body');
    var btnMobileMenu = $('.btn-mobile-menu');
    var btnMobileMenuClose = $('.btn-mobile-menu-close');
    var btnMobileMenuRight = $('.btn-mobile-menu-right');
    var mobileMenu = $('.mobile-menu');
    var isMobileMenuOpen = body.hasClass('mobile-menu-open');

    var animationSpeed = 500;

    if (!isAnimating) {
        isAnimating = true;

        if (isMobileMenuOpen) {
            body.toggleClass('mobile-menu-open');
            btnMobileMenu.show();
            btnMobileMenuClose.hide();
            btnMobileMenuRight.css({
                visibility: 'visible',
                opacity: 1
            });

            mobileMenu.animate({
                "opacity": "0"
            }, animationSpeed, function() {
                mobileMenu.hide();
                isAnimating = false;
            });
        } else {
            if (body.hasClass('user-mobile-menu-dropdown-open')) {
                isAnimating = false;
                toggleUserMobileMenuDropdown();
                isAnimating = false;
            }
            if (body.hasClass('cart-summary-dropdown-open')) {
                isAnimating = false;
                toggleCartSummaryDropdown();
                isAnimating = false;
            }

            body.toggleClass('mobile-menu-open');
            btnMobileMenu.hide();
            btnMobileMenuClose.css('display', 'inline-block');
            btnMobileMenuRight.css({
                visibility: 'hidden',
                opacity: 0
            });

            mobileMenu.show();
            mobileMenu.animate({
                "opacity": "1"
            }, animationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}

function toggleUserMobileMenuDropdown() {
    var body = $('body');
    var dropdown = $('.user-mobile-menu-dropdown');
    var isDropdownVisible = $('.user-mobile-menu-dropdown:visible').length;

    var animationSpeed = 300;

    if (!isAnimating) {
        isAnimating = true;
        body.toggleClass('user-mobile-menu-dropdown-open');

        if (isDropdownVisible) {
            dropdown.fadeOut(animationSpeed, function() {
                isAnimating = false;
            });
        } else {
            dropdown.fadeIn(animationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}

function toggleMobileMenuSearch(action) {
    var body = $('body');
    var mobileMenuMainMenu = $('.mobile-menu-main-menu');
    var mobileMenuSearch = $('.mobile-menu-search');
    var isMobileMenuSearchOpen = body.hasClass('mobile-menu-search-open');

    var animationSpeed = 250;

    if (!isAnimating) {
        isAnimating = true;

        if (action === 'open') {
            if (!isMobileMenuSearchOpen) {
                body.toggleClass('mobile-menu-search-open');

                mobileMenuMainMenu.fadeOut(animationSpeed, function() {
                    mobileMenuSearch.fadeIn(animationSpeed, function() {
                        isAnimating = false;
                    });
                });
            }
        } else {
            if (isMobileMenuSearchOpen) {
                body.toggleClass('mobile-menu-search-open');

                mobileMenuSearch.fadeOut(animationSpeed, function() {
                    mobileMenuMainMenu.fadeIn(animationSpeed, function() {
                        isAnimating = false;
                    });
                });
            } else {
                body.toggleClass('mobile-menu-search-open');

                mobileMenuMainMenu.fadeOut(animationSpeed, function() {
                    mobileMenuSearch.fadeIn(animationSpeed, function() {
                        isAnimating = false;
                    });
                });
            }
        }
    }
}

function toggleMobileMenuSubMenu(target) {
    var body = $('body');
    var mobileMenuSubMenuContainer = $('.mobile-menu-sub-menu-container');
    var isMobileMenuSubMenuOpen = body.hasClass('mobile-menu-sub-menu-open');

    var animationSpeed = 500;

    if (!isAnimating) {
        isAnimating = true;

        if (isMobileMenuSubMenuOpen) {
            body.toggleClass('mobile-menu-sub-menu-open');

            mobileMenuSubMenuContainer.animate({
                "left": "100%"
            }, animationSpeed, function() {
                mobileMenuSubMenuContainer.hide();
                isAnimating = false;
            });
        } else {
            body.toggleClass('mobile-menu-sub-menu-open');
            $('.mobile-menu-sub-menu-container .mobile-menu-sub-menu').hide();
            $('#' + target).show();

            mobileMenuSubMenuContainer.show();
            mobileMenuSubMenuContainer.animate({
                "left": "0"
            }, animationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}

function toggleMobileMenuCountryLanguageMenu() {
    var body = $('body');
    var mobileMenuCountryLanguageMenu = $('.mobile-menu-country-language-menu');
    var isMobileMenuCountryLanguageMenuOpen = body.hasClass('mobile-menu-country-language-menu-open');

    var animationSpeed = 500;

    if (!isAnimating) {
        isAnimating = true;

        if (isMobileMenuCountryLanguageMenuOpen) {
            body.toggleClass('mobile-menu-country-language-menu-open');

            mobileMenuCountryLanguageMenu.animate({
                "left": "100%"
            }, animationSpeed, function() {
                mobileMenuCountryLanguageMenu.hide();
                isAnimating = false;
            });
        } else {
            body.toggleClass('mobile-menu-country-language-menu-open');

            mobileMenuCountryLanguageMenu.show();
            mobileMenuCountryLanguageMenu.animate({
                "left": "0"
            }, animationSpeed, function() {
                isAnimating = false;
            });
        }
    }
}

function fixCarouselNavPositioning(swiper) {
    var carousel = $(swiper.el);
    var swiperSlideActive = carousel.find('.swiper-slide-active');
    var swiperSlideActiveImage = swiperSlideActive.find('img');
    var swiperSlidePrevNext = carousel.find('.swiper-button-next, .swiper-button-prev');
    swiperSlidePrevNext.css("top", swiperSlideActiveImage[0].clientHeight / 2);
}
