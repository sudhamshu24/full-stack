function validate(){
    var result="";
    result +=validatename();
    result +=validatemail();
    result +=validatepassword();
    result +=validateterms();
    if(result=="") 
    return true;
    alert("validation result:\n\n"+ result);
    return false;
}

function validatename() {
    var name = document.getElementsByName("name")[0].Value;
    if(name.length<=3)
       return "name should be at least three characters.\n";
    return "";
}
function validatepassword() {
    var password = valueOf("password");
    var retype = valueOf("retype password");

    if (password.length<=6)
       return "password should be 6 char.\n";

    if (password!=retype)
        return "password do not match.\n";
    return "";
}
function validateemail(){
    var email = valueOf("email");
    var retype=valueOf("retype_email");

    if(email.indexOf('@') ==-1)
       return "email should be valid.\n";

    if(email !=retype)
       return "email don't match.\n ";
    return "";
}

function validateTerms() {
    var terms =document.getElementsByName("terms")[0];
    if(!terms.checked)
       return "please accept the terms of service and privacy.\n";
    return "";
}

function valueOf(name){
    return document.getElementsByName(name)[0].value;
}
