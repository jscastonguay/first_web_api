function getList() {
  console.log("Appelle de getList");
  $.get( "https://localhost:5001/api/TodoItems", function( data ) {
    console.log("Call du GET: " + JSON.stringify(data));
    $('#todoList').empty();
    for (var i = 0; i < data.length; i++) {
      $('#todoList').append("<input type=\"checkbox\" id=\"todoElement\" name=\"todoElement\" value=\"" + data[i].id + "\" />" + data[i].name + "<br />");
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
      getList();
    }
  );
}

function setCheck() {
  console.log("Appelle de setCheck");
}

function deleteTodo() {
  console.log("Appelle de deleteTodo");
  $($("input[name='todoElement']:checked")).each(function() {
    console.log(this.value);
    $.ajax({
      url: "https://localhost:5001/api/TodoItems/" + this.value,
      method: "DELETE",
      data: this.value,
      contentType: "json"
    }).then(function (data) {
      console.log('DELETE received data: ' + JSON.stringify(data));
      getList();
    });
  });
  
}
