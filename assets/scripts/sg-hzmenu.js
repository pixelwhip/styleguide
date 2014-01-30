// Based on Codrop's Horizontal drop down menu
// http://tympanus.net/codrops/2013/03/05/horizontal-drop-down-menu/
var sgHorizontalMenu = (function() {

  var $listItems = document.querySelectorAll('#sg-hzmenu > ul > li'),
    $body = document.getElementsByTagName('body')[0],
    current = -1;

  function init() {
    [].forEach.call(
      document.querySelectorAll('#sg-hzmenu > ul > li > a'), function(el) {
      el.addEventListener('click', function(e) {
        open(e);
        e.stopPropagation();
      })
    });
  }

  function open(event) {
    // Remove the open class from any that are set.
    if( current !== -1 ) {
      $listItems[current].classList.remove( 'sg-hzopen' );
    }

    // Determine the index of the target list item.
    var $item = event.target.parentNode,
      el = $item,
      idx = 0,
      $event = event;

    while (el.previousElementSibling) {
      idx++;
      el = el.previousElementSibling;
    }

    // If clicking the current item, close it.
    if( current === idx ) {
      $item.classList.remove( 'sg-hzopen' );
      current = -1;
    }
    // else, open it.
    else {
      $item.classList.add( 'sg-hzopen' );
      current = idx;
      $body.removeEventListener('click', close, false);
      $body.addEventListener('click', function(e) {
        console.log(e.target);
        close();
      }, false);
    }

    return false;

  }

  function close() {
    if (current !== -1) {
      $listItems[current].classList.remove('sg-hzopen');
    }
    current = -1;
    $body.removeEventListener('click', close, false);
  }

  return { init : init };

})();
