function formValide() {
    var usernamee = document.getElementById("username").value;
    var mail =  document.getElementById("email").value;
    var phonee =  document.getElementById("phone").value;
    var error = document.getElementById("error");
    text = " ";

    if (usernamee.length < 5) {
        
        text = "Please Enter a Valid Username";
        error.innerHTML = text;
        return false;

    } else if (mail.indexOf("@") == -1 || mail.length < 7) {

        text = "Please Enter a Valid E-mail";
        error.innerHTML = text;
        return false;

    } else if (isNaN(phonee) || phonee.length != 11) {
        
        text = "Please Enter a Valid Phone";
        error.innerHTML = text;
        return false;

    } else {
        alert("Done");
        return true;
    }

}
