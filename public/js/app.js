const state = {
    inputTodo: '' ,
}


const emptyList = $("ul");

const addTodo = function (e) {
    e.preventDefault();
    console.log('Adding a new Task...');
    state.inputTodo = $('#inputTodo').val();
    
    $.ajax({ url: "/api/notes", method: "POST" })
    
    .then(function() {
        emptyList.append(
            `<li class="todo">
    
            <input type="checkbox" name="todo1" value="itemone" class="check"> 
            <p>${state.inputTodo}</p>
            <button class="remove" ><i class="fas fa-times 3x"></i> </button>
            </i>
            </li>`  
        );
    
     } );

     
};


const removeTodo = function (e) {
    e.preventDefault();
    $.ajax({ url: "/api/notes", method: "DELETE" })
    .then( () => $(this).parent().remove());
    };

   
$('#replySubmit').on('click', addTodo)
$(document).on("click", "button.remove" , removeTodo);




