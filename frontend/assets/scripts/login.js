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
                if (obj.mail == mail) {
                    console.log("mail correct");
                    if (obj.pw == password) {
                        console.log("password correct");
                        window.open("/admin", "_blank");
                    }
                }
            }
        });
    console.log("done");

}