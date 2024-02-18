$(document).ready(function() { 

    $('header button').click(function() {
        $('form').slideDown();
    })


    $('#cancel-button').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit',function(e) { 
        e.preventDefault();
        const novaTarefa = $('#new-task').val();

        const listaTarefas = $(`<li>${novaTarefa}</li>`);

        $(listaTarefas).appendTo("ul");

        $("#new-task").val("");

    })

    $("ul").on("click", "li", function () {
        $(this).toggleClass("strike-through");
    })

})