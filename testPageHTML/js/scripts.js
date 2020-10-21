function myFunction() {
  $.get( "https://localhost:5001/api/TodoItems", function( data ) {
	alert( "Data Loaded: " + JSON.stringify(data) );
  });
}