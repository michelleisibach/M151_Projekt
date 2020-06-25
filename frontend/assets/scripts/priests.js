/*Every priest is going to be called and listed in the area down below.*/
const tbody = document.getElementById("priests");

getEx();

function getEx() {
    fetch("/api/priests/get")
        .then(r => r.json())
        .then(r => {
            const parseData = JSON.parse(r);

            for (var i = 0; i < parseData.length; i++) {
                var obj = parseData[i];
                tbody.innerHTML +=
                    `
                       <div height: 200px;>  
                           <p> Firstname: ${obj.firstname} <br>
                            Lastname: ${obj.lastname} <br>
                           Status: ${obj.status} <br>
                          Age: ${obj.age}  </p>
                       </div>`;

            }
        });
}