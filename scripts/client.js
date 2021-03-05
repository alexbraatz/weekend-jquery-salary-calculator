$( document ).ready( readyNow );

let allEmployees = [];

function readyNow(){
    $( '#submitButton' ).on( 'click', addEmployee ); 
}

function addEmployee(){
    console.log( 'in addEmployee!' );

    let newEmployee = {
        fname: $( '#firstNameIn' ).val( ),
        lname: $( '#lastNameIn' ).val( ),
        id: $( '#idIn' ).val( ),
        title: $( '#titleIn' ).val( ),
        salary: $( '#salaryIn' ).val( )
    }
    // empty text imput
    $( '.inputText' ).val( '' );
    // push newEmployee object into allEmployees array
    allEmployees.push( newEmployee );
    // update the DOM
    showEmployees();
    return allEmployees;
}

function showEmployees( ){
    console.log( 'in showEmployees' );

    
}