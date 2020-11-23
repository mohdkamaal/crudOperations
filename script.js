
var data = [];
selectedRow = null;

function addRowToTable()
{
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.length);
    // add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);


    emails = document.getElementById("email").value;
    names = document.getElementById("name").value;
    phones =document.getElementById("phone").value;
    // add values to the cells
    cel1.innerHTML = names;
    cel2.innerHTML = emails;
    cel3.innerHTML = phones;
    cel4.innerHTML = `<a onClick="onEdit(this);">Edit</a> <a onClick="onDelete(this);">Delete</a>`;
}
"('" + strParam + "');"
function isValidEmail(email){
     var regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return regExp.test(email);
}

function isDuplicateEmail(email){
   var isDuplicate= data.find(x=>  x.email ==email);
     return !!isDuplicate 
}


function submit(){
    debugger;
    let  emails = document.getElementById("email").value;
    //Validating if email is valid or not
    var isAlreadyExist= isDuplicateEmail(emails);
    if(!isAlreadyExist)
    {
        if(isValidEmail(emails))
        {
            names = document.getElementById("name").value;
            phones =document.getElementById("phone").value;

             // adding data in our array variable
            data.push({name:names,email:emails, phone:phones});

            //inserting in the table
            addRowToTable();
        }
        else
        {
            alert("Email is invalid")
        }
}
else
{
    alert("Already Exist")
}


    let input=document.querySelectorAll('input');
    input.forEach(input=> input.value="");

    
}

function clearInput(){

    // clear input text
     document.getElementById("name").value = "";
     document.getElementById("email").value ="";
     document.getElementById("phone").value = "";
 }

 // this code is for show highlight yellow in input
function bg(x){
    x.style.background = "yellow";
   
}

// this code is to delete data record
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        // TO_DO Add code to find index of item need to remove\
        // TO_DO add code to remove item from main array
        row = td.parentElement.parentElement;
        document.getElementById("datalist").deleteRow(row.rowIndex);
        resetForm();
    }
}

// edit or update stored data
function onEdit(td){
    debugger;
    selectedRow = td.parentElement.parentElement;
        document.getElementById("name").value = selectedRow.cells[0].innerHTML;
        document.getElementById("email").value = selectedRow.cells[1].innerHTML;
        document.getElementById("phone").value = selectedRow.cells[2].innerHTML;

        selectedRow.cells[0].innerHTML = names;
        selectedRow.cells[1].innerHTML = emails;
        selectedRow.cells[2].innerHTML = phones;
    }


