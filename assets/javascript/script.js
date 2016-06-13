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
function navigationDropdown() {
// Get the target element ID.
  $( '[data-dropdown-target]').click(function(event) {

    // The target element ID.
    var targetId = $(event.target).data('dropdownTarget');
    // The target element.
    var $target = $(targetId);


    // In case the element is visible then hide it.
    if ($target.is(":visible")) {
      $target.removeClass('header__container--visible');
    }
    // In case the element is not visible then hide any previous element if
    // exists and show the target element.
    else {
      // Hide Previous element.
      $('.header__container--visible').removeClass('header__container--visible')
     // Show the target element.
      $($target).addClass('header__container--visible');
    }
  })
}

testBrowser();
navigationDropdown();

$(function () {

});

