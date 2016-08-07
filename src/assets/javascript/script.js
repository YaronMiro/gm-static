function testBrowser() {

  function isIE11() {
    return !(window.ActiveXObject) && "ActiveXObject" in window;
  }

  function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  }

  function isIE10() {
    return (/*@cc_on !@*/false && (
    document.documentMode === 10)
    );
  }

  if (isIE10()) {
    document.documentElement.className += " ie10";
  }

  if (isIE11()) {
    document.documentElement.className += " ie11";
  }

  if (isFirefox()) {
    document.documentElement.className += " firefox";
  }
}

/**
 * Adding the capability highlight code snippet.
 * https://highlightjs.org/
 */
function initHighLightJs() {
  $('code.swift').each(function(i, block) {
    hljs.highlightBlock(block);
  });

}

/**
 * Adding the capability to have a fancy scrollbar cross-browser.
 * http://manos.malihu.gr/jquery-custom-content-scroller/
 * https://github.com/malihu/malihu-custom-scrollbar-plugin
 */
function initJqueryScrollbar() {
  var settings = {
    axis:"x"
//    autoHideScrollbar: false
  }
  $('.scrollbar__fancy').mCustomScrollbar(settings);
}

/**
 * Adding the capability to hide/show dropdown menu.
 *
 */
function collapse() {
// Get the target element ID.
  $('[data-collapse-target]').click(function(event) {

    // The "trigger" element that was selected.
    var triggerElement = event.target;

    // The target collapse to "activate".
    var targetId = $(triggerElement).data('collapseTarget');
    var $target = $(targetId);

    // In case we want to deactivate an "active" collapse.
    if ($target.hasClass('collapse-visible')) {
      $(triggerElement).removeClass('collapse-active');
      $target.removeClass('collapse-visible');

      // Firing an event after we hide any "visible "collapse.
      $.event.trigger({
        type: "afterHideCollapseEvent",
        triggerElement: triggerElement,
        targetId: targetId
      });
    }
    else {
      // Hide any other "active" collapse.
      $('.collapse-visible').removeClass('collapse-visible');
      $('.collapse-active').removeClass('collapse-active');

      // "activate" the target collapse.
      $($target).addClass('collapse-visible');
      $(triggerElement).addClass('collapse-active');

      // Firing an event after we display any "collapse.
      $.event.trigger({
        type: "afterShowCollapseEvent",
        triggerElement: triggerElement,
        targetId: targetId
      });

    }
  })
}

/**
 * Adding the capability to hide/show tabs.
 *
 */
function tabs() {
// Get the target element ID.
  $('[data-tab-target]').click(function(event) {

    // The "trigger" element that was selected.
    var triggerElement = event.target;

    // The target collapse to "activate".
    var targetId = $(triggerElement).data('tabTarget');
    var targetGroupId = $(triggerElement).parent('[data-tab-content-target]').data('tabContentTarget');
    var $target = $(targetId);


    // Return early in case we are re-selecting the "active" tab again.
    if($(triggerElement).hasClass('tab--active')) {
      return
    }

    // Hide any other "active" tab.
    $(triggerElement).siblings('.tab--active').removeClass('tab--active');
    $(targetGroupId).find('.tab--visible').removeClass('tab--visible');

    // "activate" the target tab.
    $(triggerElement).addClass('tab--active');
    ($target).addClass('tab--visible');
  })
}

/**
 * Adding the capability to hide/show narrow nav menus.
 *
 */
function navNarrowMenuDisplay() {
  // Get the target element ID.
  $('[data-show-target]').click(function(event) {

    // The "trigger" element that was selected.
    var triggerElement = event.target;

    // The target menu to "show".
    var targetId = $(triggerElement).data('showTarget');
    var $target = $(targetId);

    // Hide any other "visible" menu.
    $('.narrow__nav__visible').removeClass('narrow__nav__visible');

    // "show" the target menu.
    $($target).addClass('narrow__nav__visible');
  })
}

/**
 * Event listener callback when hiding the narrow menu.
 *
 */
function rollBackToDeafultNarrowMenu(event) {
  // Hide any other "visible" menu.
  $('.narrow__nav__visible').removeClass('narrow__nav__visible');

  // Always display the base menu as the default menu after closing the narrow
  // menu.
  $('#nav__narrow__menu__container').addClass('narrow__nav__visible');
}

/**
 * Init the float label JS code (https://github.com/richardvenneman/floatl).
 *
 */
function initFloatLabel(className) {
  var fields = $('.' + className);
  $.each(fields, function(index, value) {
    new Floatl(value);
  });
}

$(document).ready(function() {
  testBrowser();
  collapse();
  tabs();
  navNarrowMenuDisplay();
  $(document).on("afterHideCollapseEvent", rollBackToDeafultNarrowMenu);
  $(document).on("afterShowCollapseEvent", rollBackToDeafultNarrowMenu);
  initFloatLabel('floatl__js')
  initHighLightJs()
});


$(function () {

});

