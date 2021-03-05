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

    $( '.inputText' ).val( '' );

    allEmployees.push( newEmployee );
    return allEmployees;
}