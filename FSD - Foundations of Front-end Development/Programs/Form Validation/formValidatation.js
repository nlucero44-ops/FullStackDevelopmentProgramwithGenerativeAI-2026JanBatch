function validation() {
    //alert("event fired")
    //return false;           // it return true then it perform action operation else it doesn't perform 

    let emailId = document.getElementById("emailId1").value;
    let password = document.getElementById("pass1").value;
    let emailPattern = /[a-z]+@[a-z]+[.]com/i

    //let pattern = "//"
    if(emailId.length==0){
        //alert("EmailId required")
        document.getElementById("emailIdError").innerHTML="EmailId is required"
        return false
    }else if(!emailPattern.test(emailId)){
        //alert("emailId pattern must be match")
        document.getElementById("emailIdError").innerHTML="EmailId pattern must be match"
        return false
    }else if(password.length==0){
        //alert("Password required")
        document.getElementById("emailIdError").innerHTML=""
        document.getElementById("passwordError").innerHTML="Password is required"
        return false;
    }else if(password.length<4){
        //alert("Min password required 4 character")
         document.getElementById("emailIdError").innerHTML=""
        document.getElementById("passwordError").innerHTML="Password must be min 4 character"
        return false;
    }else if(emailId=="admin@gmail.com" && password=="admin@123"){  // it must be present in server side tchnology
        document.getElementById("emailIdError").innerHTML=""
        document.getElementById("passwordError").innerHTML=""
        //alert("successfully login")
        document.getElementById("msg").innerHTML="Successfully login"
        return true;
    }else {
        document.getElementById("emailIdError").innerHTML=""
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("msg").innerHTML="Failure try once again"
        //alert("failure try once again")
        return false;
    }

}