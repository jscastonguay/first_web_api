function getList() {
  console.log("Appelle de getList");
  $.get( "https://localhost:5001/api/TodoItems", function( data ) {
	console.log("Call du GET: " + JSON.stringify(data));
	$('#todoList').empty();
  for (var i = 0; i < data.length; i++) {
		$('#todoList').append("<li>" + data[i].name + "</li>");
    }
  });
}

function nouveauTodo() {
  console.log("Appelle de nouveauTodo");
  var todo = {
    Id: 0,
    IsComplete: false,
    Name: $('#name').val()
  };
  console.log("todo: " + JSON.stringify(todo));
  $.post("https://localhost:5001/api/TodoItems",
    todo,
    function(data , status) {
      console.log('POST received data: ' + JSON.stringify(data) + ' status: ' + status);
    }
  );
  getList();
}