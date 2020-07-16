function check(){
    var val=document.getElementById("txtpass").value;
    var p=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{5,12}$/;
    var user="admin";
    var u=document.getElementById("txtuser").value;
    if(p.test(val)&&(user==u)){
    }
    else{
        window.alert("Invalid Username or Password");
    }
}