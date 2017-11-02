//ф-ція getData реагує на клік кнопки submit
function getData() {
//оголошення змінних 
var fName, lName, em, pass, doc, dataform;  
doc = document; // присвоїли щоб не перегружало сторінку
        
// присвоєння значення полів змінним
fName = doc.getElementsByClassName('firstName')[0].value;   
lName = doc.getElementsByClassName('lastName')[0].value;   
em = doc.getElementsByClassName('email')[0].value;  
pass = doc.getElementsByClassName('password')[0].value;

//створення обєкта форми, який містить обєкти юзерів з їх даними   
    dataForm = {
    user : {
    first_name: fName,
    last_name: lName,
    email: em,
    password: pass,
    password_confirmation: pass
  }
};

console.log(dataForm);    
var convertedDataForm = JSON.stringify(dataForm);
// створення і відправлення даних на сервер

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://wristo-platform-backend-stg.herokuapp.com/api/v1/auth/sign_up", true);   xhr.setRequestHeader("Content-type", "application/json");


xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            alert("welcome");
            
            
        }
    };



xhr.send(convertedDataForm); 

console.log(xhr);

    
console.log(convertedDataForm);
}