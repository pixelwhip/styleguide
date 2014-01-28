// Based on Codrop's Horizontal drop down menu
// http://tympanus.net/codrops/2013/03/05/horizontal-drop-down-menu/
var sgHorizontalMenu = (function() {

  var $listItems = document.querySelectorAll('#sg-hzmenu > ul > li'),
    $body = document.querySelector('body'),
    current = -1;

  function init() {
    document.addEventListener('click', function(e) {
      if ( e.target.matchesSelector('#sg-hzmenu > ul > li > a') ) {
        open(e);
      }
    }, false);
    //$listItems.on( 'click', function( event ) { event.stopPropagation(); } );
  }

  function open( event ) {

    // Remove the open class from any that are set.
    if( current !== -1 ) {
      $listItems[current].classList.remove( 'sg-hzopen' );
    }

    var $item = event.target.parentNode,
      el = $item,
      idx = 0;

    while (el.previousElementSibling) {
      idx++;
      el = el.previousElementSibling;
    }

    if( current === idx ) {
      $item.classList.remove( 'sg-hzopen' );
      current = -1;
    }
    else {
      $item.classList.add( 'sg-hzopen' );
      current = idx;
    }

    return false;

  }

  function close( event ) {
    $listItems[current].classList.remove( 'sg-hzopen' );
    current = -1;
  }

  return { init : init };

})();
