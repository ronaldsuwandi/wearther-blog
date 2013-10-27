$(function() {
  var $body = $('#js-body');
  var $menuBtn = $('#js-menu-button');
  var $menu = $('#js-menu-side');
  var $closeMenuBtn = $('#js-menu-side-close');

  $menuBtn.on('click', function(e) {
    $menu.addClass('isvisible');
    e.stopPropagation();
  });
  $closeMenuBtn.on('click', function(e) {
    $menu.removeClass('isvisible');
    e.stopPropagation();
  });
  $body.on('click', function(e) {
    if ($menu.hasClass('isvisible')) {
      $menu.removeClass('isvisible');
    }
  });
});
