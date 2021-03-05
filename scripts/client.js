$( document ).ready( readyNow );

function readyNow(){
    $( '#submitButton' ).on( 'click', addEmployee ); 
}

function addEmployee(){
    console.log( 'in addEmployee!' );
}