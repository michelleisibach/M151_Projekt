function createUser() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var status = document.getElementById("status").value;
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;
    console.log(firstname, lastname, age, status, mail, password);


    var priests = '{"firstname" : "' + firstname + '", "lastname" : "' + lastname + '", "age" : "' + age + '", "status" : "' + status + '", "mail" : "' + mail + '", "password" : "' + password + '"}';

    console.log(priests);

    var priestJSON = JSON.parse(priests);
    console.log(priestJSON);

}

function createEvent() {

}