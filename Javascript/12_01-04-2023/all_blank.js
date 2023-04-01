function form_blank_value(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let others = document.getElementById("other").checked;
    let dob = document.getElementById("dob").value;
    let addr = document.getElementById("addr").value;
    let city = document.getElementById("city").value;
    if(fname == "" &&  lname =="" && male == false && female == false && others == false && dob == "" && addr == "" && city == -1){
        document.getElementById("msg1").innerText = "Enter first name";
        document.getElementById("msg2").innerText = "Enter Last name";
        document.getElementById("msg3").innerHTML = "Select Gender";
        document.getElementById("msg4").innerHTML = "Select Date";
        document.getElementById("msg5").innerHTML = "Enter Address";
        document.getElementById("msg6").innerHTML = "Select city";
        return false
    }

}