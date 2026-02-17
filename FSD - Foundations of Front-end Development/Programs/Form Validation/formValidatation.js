function validation() {
    //alert("event fired")
    //return false;           // it return true then it perform action operation else it doesn't perform 

    let emailId = document.getElementById("emailId1").value;
    let password = document.getElementById("pass1").value;
    let emailPattern = /[a-z]+@[a-z]+[.]com/i
    if(emailId.length==0){
        alert("EmailId required")
        return false
    }else if(!emailPattern.test(emailId)){
        alert("emailId pattern must be match")
        return false
    }else if(password.length==0){
        alert("Password required")
        return false;
    }else if(password.length<4){
        alert("Min password required 4 character")
        return false;
    }else if(emailId=="admin@gmail.com" && password=="admin@123"){  // it must be present in server side tchnology
        alert("successfully login")
        return true;
    }else {
        alert("failure try once again")
        return false;
    }

}