$( document ).ready( readyNow );

let allEmployees = [];

function readyNow(){
    $( '#submitButton' ).on( 'click', addEmployee ); 
}

function addEmployee( ){
    // create a newEmployee object with the value of the inputs from DOM
    let newEmployee = {
        fname: $( '#firstNameIn' ).val( ),
        lname: $( '#lastNameIn' ).val( ),
        id: $( '#idIn' ).val( ),
        title: $( '#titleIn' ).val( ),
        salary: Number( $( '#salaryIn' ).val( ) )
    }
    // empty text input from text boxes
    $( '.inputText' ).val( '' );
    // push newEmployee object into allEmployees array
    allEmployees.push( newEmployee );
    // update the DOM
    showEmployees( allEmployees );
    // update monthly costs
    totalMonthlyCost( allEmployees );
    // return allEmployees
    return allEmployees;

} // end AddEmployee

function showEmployees( ourEmployees ){
    // creating a container, table, and asking jquery to store the tbody tag employeeList
    let table = $( '#employeeList' );
    // empty that table
    table.empty();

    // loop through ourEmployees array, append to tbody table
    // on each td tag, our employees info
    for( let i=0; i<ourEmployees.length; i++){
        table.append(`<tr>
        <td>${ourEmployees[i].fname}</td>
        <td>${ourEmployees[i].lname}</td>
        <td>${ourEmployees[i].id}</td>
        <td>${ourEmployees[i].title}</td>
        <td>${ourEmployees[i].salary}</td>
        <td><button>Delete</button></td>
        </tr>`)
    }

} // end showEmployees

function totalMonthlyCost( ourEmployees ){
    // create variable, total; jquery points toward monthlyCosts span within allMonthly span within 
    // salarayMonthlyTotal h2 header
    let total = $( '#monthlyCosts' );
    // empty total
    total.empty();
    // initialize our running counter of each of ourEmployees salary
    let runningCount = 0;

    for( let i=0; i<ourEmployees.length; i++ ){
        runningCount += ourEmployees[i].salary
    }
    // divide by twelve to get monthly cost
    runningCount /= 12;
    // round runningCount to two decimals
    runningCount = runningCount.toFixed(2);
    // if monthly count is equal to or greater than 20,000, highlight red to flag
    if( runningCount >= 20000 ){
        $( '#allMonthly' ).css("background-color", "#ff140e");
    }

    total.append( runningCount );

} // end totalMonthlyCost