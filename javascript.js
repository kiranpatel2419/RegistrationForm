var a=Math.floor((Math.random() * 10) + 1);
var b=Math.floor((Math.random() * 10) + 1);

window.onload = function() {
document.getElementById("myLink").innerHTML=a+ "+" + b+ "=";
} 
function result(number){
    if(number!=(a+b)){
        alert("Please Try again.");
        a=Math.floor((Math.random() * 10) + 1);
        b= Math.floor((Math.random() * 10) + 1)
        document.getElementById("myLink").innerHTML=a+ "+" + b+ "=";
    }
}
// function validateexp(){
//     var checkbox=document.getElementById('checkbox1');
//     if(checkbox.checked){
//     var a=Math.floor((Math.random() * 10) + 1);
//     var b=Math.floor((Math.random() * 10) + 1);
//     var result=prompt(a+ "+" + b,"Please Enter Your Answer");
//     if(!validiteresult(a,b,result))
//     {
//         validateexp();
//     }
//     else{
//         confirm("You are master of math");
//     }
// }
// }
// function validiteresult(a,b,result){
//     if(a+b==result){
//         return true;
//     }
//     return false;
// }
function validate() {
    var firstname = document.myForm.firstname;
    var lastname = document.myForm.lastname;
    var email = document.myForm.email;
    var password = document.myForm.password;
    var cpassword = document.myForm.cpassword;
    if (!allcharacter(firstname)) {
        alert("FistName: " + firstname.value + " should contain only chracter");
        firstname.focus();
        return false;
    }
    if (!allcharacter(lastname)) {
        alert("LastName: " + lastname.value + " should contain only chracter");
        lastname.focus();
        return false;
    }
    if (!lencheck(firstname,3,30)) {
        alert("FistName: " + firstname.value + "  length between 3 and 30");
        firstname.focus();
        return false;
    }
    if (!lencheck(lastname,3,30)) {
        alert("LastName: " + lastname.value + "  length between 3 and 30");
        lastname.focus();
        return false;
    }
    if(!passwordCheck(password)){
        alert("Password: " + password.value + "   Password should be more than 8 characters.It consist or combination of one special character,1 capital letter,1 number");
        password.focus();
        return false;
    }
    if(!emailcheck(email)){
        alert("Email: " + email.value + " Please enter valid email");
        email.focus();
        return false;
    }
    if(password.value != cpassword.value){
        alert("Password and Cofirm password should be same");
        cpassword.focus();
        return false;
    }
    confirm("Registretion Is complete");
}

function allcharacter(name) {
    var letter = /^[A-Za-z]+$/;
    if (name.value.match(letter)) {
        return true;
    }
    return false;
}
function lencheck(name, min, max) {
    var len = name.value.length;
    if (len > min && len < max) {
        return true;
    }
    return false;
}
function passwordCheck(password) {
    var passvalid = /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.value.match(passvalid)) {
        return true;
    }
    return false;
}
function emailcheck(email) {
    var emailvalid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.value.match(emailvalid)) {
        return true;
    }
    return false;
}