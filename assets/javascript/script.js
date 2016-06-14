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
  $( '[data-collapse-target]').click(function(event) {

    // The "trigger" element that was selected.
    var triggerElement = event.target;

    // The target collapse to "activate".
    var targetId = $(triggerElement).data('collapseTarget');
    var $target = $(targetId);

    // In case we want to deactivate an "active" collapse.
    if ($target.is(":visible")) {
      $(triggerElement).removeClass('nav__list__item--active');
      $target.removeClass('header__container--visible');
    }
    else {
      // Hide any other "active" collapse.
      $('.header__container--visible').removeClass('header__container--visible');
      $('.nav__list__item--active').removeClass('nav__list__item--active');

      // "activate" the target collapse.
      $($target).addClass('header__container--visible');
      $(triggerElement).addClass('nav__list__item--active');

    }
  })
}

testBrowser();
collapse();

$(function () {

});

