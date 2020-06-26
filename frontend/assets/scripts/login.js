function login() {
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;

    fetch("/api/priests/get")
        .then(r => r.json())
        .then(r => {
            const parseData = JSON.parse(r);

            for (var i = 0; i < parseData.length; i++) {
                var obj = parseData[i];
                if (obj.mail == mail) {
                    if (obj.pw == password) {
                        window.open("/admin", "_blank");
                    }
                }
            }
        });

}