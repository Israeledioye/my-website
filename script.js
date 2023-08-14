let buttton = document.getElementById("btn")
 let namepattern = /[a-z]{3,}/i
 let emailpattern = /.{3,}\@[a-z]{4,}\.[a-z]{2,}/i
 let phonepattern = /\+?[0-9]?[\d]{7,}]/i
let passwordpattern = /(?=.*[A-Z])(?=.*[\d])(?=.*[\W])(a-zA-Z\d\W\s)[5,1/g]
function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    if (name == "" || email == "" || phone == "" || password == ""){
        alert ("Please enter missing field");
    }else if (!namepattern.test(name)){
        alert ("enter valid name ");
    }else if (!emailpattern.test(email)){
        alert ("please enter valid email");
    }else if (!phonepattern.test(phone)){
        alert ("please enter valid phone number");
    }
}
buttton.onclick = validate