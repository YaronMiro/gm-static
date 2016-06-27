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
    }
    else {
      // Hide any other "active" collapse.
      $('.collapse-visible').removeClass('collapse-visible');
      $('.collapse-active').removeClass('collapse-active');

      // "activate" the target collapse.
      $($target).addClass('collapse-visible');
      $(triggerElement).addClass('collapse-active');

    }
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

testBrowser();
collapse();
navNarrowMenuDisplay();

$(function () {

});

