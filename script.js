
var data = [];

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
    cel4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                      <a onClick="onDelete(this)">Delete</a>`;
}

function isValidEmail(email){
     var regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return regExp.test(email);
}



function submit(){
    let  emails = document.getElementById("email").value;
    //Validating if email is valid or not
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

function bg(x){
    x.style.background = "yellow";
   
}


