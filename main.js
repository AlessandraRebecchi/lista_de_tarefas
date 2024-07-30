$(document).ready(function() {
    $('#lista-tarefas').on('submit', function(e) {
        e.preventDefault();

        
        const tarefa = $('#tarefa').val();

        
        $('#lista').append('<li><span>' + task + '</span></li>');


        $('#tarefa').val('');
    });


    $('#lista').on('click', 'li', function(e) {
        if (!$(e.target).is('button')) {
            $(this).find('span').toggleClass('line-through');
        }
    });


   });
