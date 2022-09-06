

// $(document).ready(function()  {
//     $('#rev-slider1').revolution({
//         delay: 9000,
//         navigationType: "bullet",
   
//       autoHeight:"off",
//       fullScreenAlignForce:"off",
    
//     onHoverStop:"on",
     
//       thumbWidth:100,
//   thumbHeight:50,
//      thumbAmount:3,
    
//        hideThumbsOnMobile:"off",
//      hideBulletsOnMobile:"off",
//          hideArrowsOnMobile: "off",
//         hideThumbsUnderResoluition:0,

//  hideThumbs:0,
// hideTimerBar:"off",

//  keyboardNavigation:"on",

//  navigationType:"bullet",
//  navigationArrows:"solo",
//  navigationStyle:"round",

//  navigationHAlign:"center",
//  navigationVAlign:"bottom",
//  navigationHOffset:30,
//  navigationVOffset:30,

// soloArrowLeftHalign:"left",
//  soloArrowLeftValign:"center",
//  soloArrowLeftHOffset:20,
//  soloArrowLeftVOffset:0,

//  soloArrowRightHalign:"right",
//  soloArrowRightValign:"center",
//  soloArrowRightHOffset:20,
//  soloArrowRightVOffset:0,


//  touchenabled:"on",
//  swipe_velocity:"0.7",
//  swipe_max_touches:"1",
//  swipe_min_touches:"1",
//  drag_block_vertical:"false",

//  stopAtSlide:-1,
//  stopAfterLoops:-1,
//  hideCaptionAtLimit:0,
//  hideAllCaptionAtLilmit:0,
//  hideSliderAtLimit:0,

// dottedOverlay:"none",

// fullWidth:"off",
// forceFullWidth:"off",
// fullScreen:"off",
// fullScreenOffsetContainer:"#topheader-to-offset",

//  shadow:0


//     })
// })
; (function ($) {
    'use strict'
    var wprtTheme = {
               // Main init function
               init : function() {
                this.config();
                this.events();
            },
    
            // Define vars for caching
            config : function() {
                this.config = {
                    $window : $(window),
                    $document : $(document),
                };
        },
        events : function() {
            var self = this;

            // Run on document ready
            self.config.$document.on( 'ready', function() {

                // Mobile Navigation
                self.mobileNav();




            } );

            // Run on Window Load
  
        },
        mobileNav: function () {
            var menuType = 'desktop';
    
            $(window).on('load resize', function () {
                var mode = 'desktop';
                var $wrapMenu = $('#site-header-inner .wrap-inner');
    
                if (matchMedia('only screen and (max-width: 991px)').matches)
                    mode = 'mobile';
    
                if (mode != menuType) {
                    menuType = mode;
    
                    if (mode == 'mobile') {
                        $('#main-nav').attr('id', 'main-nav-mobi')
                            .appendTo('#site-header')
                            .hide()
                            .find('li:has(ul)')
                            .children('ul')
                            .hide()
                            .before('<span class="arrow"></span>');
                    } else {
                        if ($('#site-header').is('.style-2, .style-3, .style-4'))
                            $wrapMenu = $('.site-navigation-wrap .inner');
    
                        $('#main-nav-mobi').attr('id', 'main-nav')
                            .removeAttr('style')
                            .prependTo($wrapMenu)
                            .find('.sub-menu')
                            .removeAttr('style')
                            .prev().remove();
                                    
                        $('.mobile-button').removeClass('active');
                    }
                }
            });
    
            $(document).on('click', '.mobile-button', function () {
                $(this).toggleClass('active');
                $('#main-nav-mobi').slideToggle();
            })
    
            $(document).on('click', '#main-nav-mobi .arrow', function () {
                $(this).toggleClass('active').next().slideToggle();
            })
        },
    }
    wprtTheme.init();
})(jQuery);