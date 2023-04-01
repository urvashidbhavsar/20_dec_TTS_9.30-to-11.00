function reg_ex_name(uname,spanid){
    let reg_ex = /^[a-zA-Z]*$/
    if(reg_ex.test(uname.value)){
        document.getElementById(spanid).innerText = "";
        return false
    }else{
        document.getElementById(spanid).innerText = "invalid name";
        return false
    }
}

function check_value(blnk,spanid){
    if(blnk.value == "" || blnk.value == null || blnk.value == -1){
        document.getElementById(spanid).innerHTML = "Please fill this"
        return false
    }else{
        document.getElementById(spanid).innerHTML = ""
        return false
    }
}

function check_address_length(){
    let addr = document.getElementById("addr").value;
    if(addr.length < 20){
        document.getElementById("msg5").innerHTML = "must have 20 letters";
        return false;
    }else{
        document.getElementById("msg5").innerHTML = "";
        return false;
    }
}