
function getLoginData() {

var em, pass, doc, loginForm;  
doc = document;
   
em = doc.getElementsByClassName('email')[0].value;  
pass = doc.getElementsByClassName('password')[0].value;

  
    loginForm = {
    email: em,
    password: pass
};

console.log(loginForm);    
var convertedLoginForm = JSON.stringify(loginForm);


var xhr = new XMLHttpRequest();
xhr.open("POST", "https://wristo-platform-backend-stg.herokuapp.com/api/v1/auth/sign_in", true);   xhr.setRequestHeader("Content-type", "application/json");

    
//    access-token: VakoDpGs2W4Ee6_is2Et6A
//    client: LZrjKpnFtQsEj6SlnN7mGg
//    uid: dmytro.pogoretsky@gmail.com

xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            //alert("welcome");
            window.location.href = "masterPage.html";
            
        }
    };



xhr.send(convertedLoginForm); 

console.log(xhr);

    
console.log(convertedLoginForm);
}