// I'm going to go ahead and modify this file
// XOXO - Efrain

// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window);

    // toggles extra info tiles
    $('.tile-toggle').click(function(e){
      e.preventDefault();
      $thisID = $(this).attr('data-toggleID');
      $(this).toggleClass('open');
      $('.toggle-content[data-toggleID="'+$thisID+'"]').slideToggle();
    });

    if( $('.tabbed-widget').length ) {

      // blue tab links to switch content in right white scrolling section
      $('.nav-tabs').each(function(){
        $(this).find('a').click(function(e) {
          e.preventDefault();
          $thisID = $(this).attr('href');
          $(this).closest('.nav').find('li').removeClass('active');
          $(this).parent('li').addClass('active');
          $(this).closest('.tab-wrap').find('.tab-pane.active').removeClass('active');
          $(this).closest('.tab-wrap').find('.tab-pane[data-tabpane="'+$thisID+'"]').addClass('active');
          // re-initializes scroll bar when tab content changes
          tabScrollBar();
        });
        $(this).find('li').first().addClass('first active');
        $(this).find('li').last().addClass('last');
      });

      // set first tab pane of each section active
      $('.tab-content').each(function(){
        $(this).find('.tab-pane').first().addClass('active');
      });

      // initializes scroll bar
      tabScrollBar();
      function tabScrollBar() {
        $('.scroll-pane').jScrollPane({
          mouseWheelSpeed: 20,
          autoReinitialise: true,
          hideFocus: true
        });
      }

      // top tabs to switch which tab section is shown
      $('.tab-wrap-toggle').find('a').on('click', function(e){
        e.preventDefault();
        $thisID = $(this).attr('href');
        $('.tab-wrap-toggle a.active, .tab-wrap.active').removeClass('active');
        $(this).addClass('active');
        $($thisID).addClass('active');
        // initializes scroll bar
        tabScrollBar();
      });
      
    }

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })

    // side bar
    setTimeout(function () {
      $('.bs-docs-sidenav').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210 }
        , bottom: 270
        }
      })
    }, 100)

    // make code pretty
    window.prettyPrint && prettyPrint()

    // add-ons
    $('.add-on :checkbox').on('click', function () {
      var $this = $(this)
        , method = $this.attr('checked') ? 'addClass' : 'removeClass'
      $(this).parents('.add-on')[method]('active')
    })

    // add tipsies to grid for scaffolding
    if ($('#gridSystem').length) {
      $('#gridSystem').tooltip({
          selector: '.show-grid > [class*="span"]'
        , title: function () { return $(this).width() + 'px' }
      })
    }

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "a[data-toggle=tooltip]"
    })

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // popover demo
    $("a[data-toggle=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })

    // button state demo
    $('#fat-btn')
      .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000)
      })

    // carousel demo
   // $('#myCarousel').carousel()

    // javascript build logic
    var inputsComponent = $("#components.download input")
      , inputsPlugin = $("#plugins.download input")
      , inputsVariables = $("#variables.download input")

    // toggle all plugin checkboxes
    $('#components.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsComponent.attr('checked', !inputsComponent.is(':checked'))
    })

    $('#plugins.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsPlugin.attr('checked', !inputsPlugin.is(':checked'))
    })

    $('#variables.download .toggle-all').on('click', function (e) {
      e.preventDefault()
      inputsVariables.val('')
    })

    // request built javascript
    $('.download-btn .btn').on('click', function () {

      var css = $("#components.download input:checked")
            .map(function () { return this.value })
            .toArray()
        , js = $("#plugins.download input:checked")
            .map(function () { return this.value })
            .toArray()
        , vars = {}
        , img = ['glyphicons-halflings.png', 'glyphicons-halflings-white.png']

    $("#variables.download input")
      .each(function () {
        $(this).val() && (vars[ $(this).prev().text() ] = $(this).val())
      })

      $.ajax({
        type: 'POST'
      , url: /\?dev/.test(window.location) ? 'http://localhost:3000' : 'http://bootstrap.herokuapp.com'
      , dataType: 'jsonpi'
      , params: {
          js: js
        , css: css
        , vars: vars
        , img: img
      }
      })
    })
  })

// Modified from the original jsonpi https://github.com/benvinegar/jquery-jsonpi
$.ajaxTransport('jsonpi', function(opts, originalOptions, jqXHR) {
  var url = opts.url;

  return {
    send: function(_, completeCallback) {
      var name = 'jQuery_iframe_' + jQuery.now()
        , iframe, form

      iframe = $('<iframe>')
        .attr('name', name)
        .appendTo('head')

      form = $('<form>')
        .attr('method', opts.type) // GET or POST
        .attr('action', url)
        .attr('target', name)

      $.each(opts.params, function(k, v) {

        $('<input>')
          .attr('type', 'hidden')
          .attr('name', k)
          .attr('value', typeof v == 'string' ? v : JSON.stringify(v))
          .appendTo(form)
      })

      form.appendTo('body').submit()
    }
  }
})


// RoyalSlider

   var sliderTimer = 4000,
        sliderTransitionSpeed = 900,
        $homeHeroSlider = $("#myCarousel .carousel-inner"),
        slideHover = false;

          var slider = $homeHeroSlider.royalSlider({
            autoScaleSlider: true,
            autoHeight: true,
            arrowsNav: true,
              arrowsNavAutoHide: true,
              fadeinLoadedSlide: true,
              controlNavigationSpacing: 0,
              controlNavigation: 'bullets',
              imageScaleMode: 'none',
              slidesSpacing: 0,
              imageAlignCenter: false,
              loop: true,
              usePreloader: true,
              numImagesToPreload: 3,
              transitionType: 'move',
              transitionSpeed: sliderTransitionSpeed,
              addActiveClass: true,
              startSlideId: 0,
              minSlideOffset: 0,
              navigateByClick: false,
              sliderTouch: true,
              block: {
                  delay: 0,
                  moveOffset: 60,
                  speed: 300
              },
              autoPlay: {
                // autoplay options go here
                enabled: true,
                delay: sliderTimer,
                pauseOnHover: false,
                stopAtAction: false
              }
          }).data('royalSlider');

/* add arrow markers */
function addArrowMarker(selector) {
  $nav = $(selector);
  if($nav.find('.arrow-marker').length) {
    return false;
  } else {
    $nav.find('a span').remove();
    $nav.find('a').append('<span class="arrow-marker"></span>'); 
  }
}

  /* Navigation */
  addArrowMarker('#header .nav');

  /* Sub Navigation */
  addArrowMarker('.sub-menu');

}(window.jQuery)
