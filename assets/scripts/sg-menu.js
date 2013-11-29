( function(classie) {
  'use strict';

  var sgMenu = document.getElementById( 'sg-menu-container' ),
    sgMenuToggle = document.getElementById( 'sg-menu-toggle' );

  sgMenuToggle.onclick = function() {
    classie.toggle( this, 'is-active' );
    classie.toggle( sgMenu, 'is-open' );
  };
})(classie);
