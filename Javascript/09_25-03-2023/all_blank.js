function form_blank_value(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    if(fname == "" &&  lname ==""){
        document.getElementById("msg1").innerText = "Enter first name";
        document.getElementById("msg2").innerText = "Enter Last name"
        return false
    }

}