function valid(){
    var val = document.getElementById("txtname").value;
    var val2 = document.getElementById("txtmobile").value;
    var val3 = document.getElementById("txtemail").value;
    var val4 = document.getElementById("txtroll").value;
    var n=/^[a-zA-Z]{6,15}$/;
    var p=/^[6-9][0-9]{9}$/;
    var e=/^[a-zA-Z0-9._-]{6,19}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var r=/^[2][2][1][7][1][0][3][0][0-9]{4}$/;
    if(val =='' || val2 =='' || val3 =='' || val4 ==''){
        window.alert('enter all fields');
        return false;
    }
    else{
        if(n.test(val)&&p.test(val2)&&e.test(val3)&&r.test(val4)){
            window.alert('valid');
            return true;
        }
        else{
            window.alert('invalid');
        return false;
        }        
    }
}