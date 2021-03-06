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
        salary: Number( $( '#salaryIn' ).val( ) )
    }
    // empty text imput
    $( '.inputText' ).val( '' );
    // push newEmployee object into allEmployees array
    allEmployees.push( newEmployee );
    // update the DOM
    showEmployees();
    // update monthly costs
    totalMonthlyCost();
    // return allEmployees
    return allEmployees;
}

function showEmployees( ){
    console.log( 'in showEmployees' );

    let table = $( '#employeeList' );
    table.empty();

    for( let i=0; i<allEmployees.length; i++){
        table.append(`<tr>
        <td>${allEmployees[i].fname}</td>
        <td>${allEmployees[i].lname}</td>
        <td>${allEmployees[i].id}</td>
        <td>${allEmployees[i].title}</td>
        <td>${allEmployees[i].salary}</td>
        <td><button>Delete</button></td>
        </tr>`)
    }
}

function totalMonthlyCost(){
    console.log( 'in totalMonthlyCost' );
    let total = $( '#monthlyCosts' );
    total.empty();
    let runningCount = 0;

    for( let i=0; i<allEmployees.length; i++ ){
        runningCount += allEmployees[i].salary
    }

    if( runningCount >= 20000 ){
        $( '#allMonthly' ).css("background-color", "#ff140e");
    }

    total.append( runningCount );
}