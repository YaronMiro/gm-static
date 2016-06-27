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
    if ($target.hasClass('visible')) {
      $(triggerElement).removeClass('active');
      $target.removeClass('visible');
    }
    else {
      // Hide any other "active" collapse.
      $('.visible').removeClass('visible');
      $('.active').removeClass('active');

      // "activate" the target collapse.
      $($target).addClass('visible');
      $(triggerElement).addClass('active');

    }
  })
}

testBrowser();
collapse();

$(function () {

});

