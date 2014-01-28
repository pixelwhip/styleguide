// Based on Codrop's Horizontal drop down menu
// http://tympanus.net/codrops/2013/03/05/horizontal-drop-down-menu/
var sgHorizontalMenu = (function($) {
 
    var $listItems = $( '#sg-hzmenu > ul > li' ),
        $menuItems = $listItems.children( 'a' ),
        $body = $( 'body' ),
        current = -1;
 
    function init() {
        $menuItems.on( 'click', open );
        $listItems.on( 'click', function( event ) { event.stopPropagation(); } );
    }
 
    function open( event ) {
 
        if( current !== -1 ) {
            $listItems.eq( current ).removeClass( 'sg-hzopen' );
        }
 
        var $item = $( event.currentTarget ).parent( 'li' ),
            idx = $item.index();
 
        if( current === idx ) {
            $item.removeClass( 'sg-hzopen' );
            current = -1;
        }
        else {
            $item.addClass( 'sg-hzopen' );
            current = idx;
            $body.off( 'click' ).on( 'click', close );
        }
 
        return false;
 
    }
 
    function close( event ) {
        $listItems.eq( current ).removeClass( 'sg-hzopen' );
        current = -1;
    }
 
    return { init : init };
 
})(jQuery);
