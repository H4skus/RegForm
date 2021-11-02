function namecountupdate(str) {
	var lng = str.length;
    var namecount = document.getElementById("namecount");

	namecount.innerHTML = lng + '/20';

    if(lng > 20){
        namecount.classList.add("error");
    }
    else{
        namecount.classList.remove("error");
    }
}

function passcountupdate(str) {
	var lng = str.length;
    var passcount = document.getElementById("passcount");
	
    passcount.innerHTML = lng + '/8';

    if(lng > 8 || lng < 6){
        passcount.classList.add("error");
    }
    else{
        passcount.classList.remove("error");
    }
}


function passwordMatch(){
    var password1 = document.getElementById("pass").value;
    var password2 = document.getElementById("pass2").value;

    if(password1 !== password2){
        alert("password doesn't match");
    }
}

function validateForm(e){
    var name = document.forms["singUp"]["name"].value;
    var password = document.forms["singUp"]["pass"].value;

    
    if (name == "" || password == "")e.preventDefault();
    else if(name> 20) e.preventDefault();
    else if (password>8 && password<5)e.preventDefault();

    alert("SingUp Succesful")

}



function init() {
    document.getElementById('mainform').addEventListener('submit', validateForm);
}

document.addEventListener('DOMContentLoaded', init);
