function createText() {

}

function login() {
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;


    console.log(mail);
    console.log(password);
    console.log("Method Called");
    fetch("/api/priests/get")
        .then(r => r.json())
        .then(r => {
            const parseData = JSON.parse(r);

            for (var i = 0; i < parseData.length; i++) {
                var obj = parseData[i];
                console.log(obj);
            }
        });
    console.log("done");

}