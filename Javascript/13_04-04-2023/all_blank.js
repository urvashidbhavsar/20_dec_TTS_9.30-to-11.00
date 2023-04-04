function form_blank_value(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let others = document.getElementById("other").checked;
    let dob = document.getElementById("dob").value;
    let addr = document.getElementById("addr").value;
    let city = document.getElementById("city").value;
    let mno = document.getElementById("mno").value;
    let mail = document.getElementById("mail").value;
    // if(fname == "" &&  lname =="" && male == false && female == false && others == false && dob == "" && addr == "" && city == -1 && mno == "" && mail == ""){
    //     document.getElementById("msg1").innerText = "Enter first name";
    //     document.getElementById("msg2").innerText = "Enter Last name";
    //     document.getElementById("msg3").innerHTML = "Select Gender";
    //     document.getElementById("msg4").innerHTML = "Select Date";
    //     document.getElementById("msg5").innerHTML = "Enter Address";
    //     document.getElementById("msg6").innerHTML = "Select city";
    //     document.getElementById("msg7").innerHTML = "Enter Mobile No"
    //     document.getElementById("msg8").innerHTML = "Enter Email"
    //     return false}

    if(fname == ""){
        document.getElementById("msg1").innerText = "Enter first name";
        return false;
    }
    if(lname == ""){
       document.getElementById("msg2").innerText = "Enter Last name";
       return false
    }
    if(male == false && female == false && others == false){
        document.getElementById("msg3").innerHTML = "Select Gender"
        return false
    }
    if(dob == ""){
        document.getElementById("msg4").innerHTML = "Select Date";
        return false
    }
    if(addr == ""){
        document.getElementById("msg5").innerHTML = "Enter Address";
        return false
    }
    if(city == -1){
        document.getElementById("msg6").innerHTML = "Select city";
        return false;
    }
    if(mno == ""){
        document.getElementById("msg7").innerHTML = "Enter Mobile No"
        return false;
    }
    if(mail == ""){
        document.getElementById("msg8").innerHTML = "Enter Email Id"
    }

}

// password show
function show_password(){
    let pass = document.getElementById("pass")
    if(pass.type == "password"){
        pass.type = "text"
    }else{
        pass.type = "password"
    }
}
function show_password1(){
    let cpass = document.getElementById("cpass")
    if(cpass.type == "password"){
        cpass.type = "text";
    }else{
        cpass.type= "password";
    }
}