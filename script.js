
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
    cel4.innerHTML = '<a onClick="editRow('+emails+')">Edit</a> <a onClick="deleteRow('+emails+')">Delete</a>';
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
    
}

function bg(x){
    x.style.background = "yellow";
   
}
function deleteRow(){
    for(var i = 0; i < table.length; i++) {
        if(data[i].emails == emails) {
            data.splice(i, 1);
            break;
        }
    }
}


function editRow(){
    // alert("edit code to update")
    
}