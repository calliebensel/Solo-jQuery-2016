// console.log("JS works");
$( document ).ready( function () {
  var count = 0;
  var color = '';
// console.log("jQ ready");
$( '.button' ).on( 'click', function(){
  color = $( this ).attr( data.color );
}); // end color button function
function addCount(color) {
  count = $('.color-button' + color).data( 'data-count' ) + 1;
} // end addCount
}); // end doc ready
// testing git
