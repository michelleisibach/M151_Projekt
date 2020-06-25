/*Every exhibhitions is going to be called and listed in the area down below.*/
const tbody = document.getElementById("exhibitions");

getEx();

function getEx() {
    fetch("/api/exhibitions/get")
        .then(r => r.json())
        .then(r => {
            console.log(r);
            const parseData = JSON.parse(r);
            console.log(parseData);

            for (var i = 0; i < parseData.length; i++) {
                var obj = parseData[i];

                tbody.innerHTML +=
                    `
                <div height: 200px;>  
                    <p> Name: ${obj.name} <br>
                     Code: ${obj.code} <br>
                    Time: ${obj.time} <br>
                   Date: ${obj.date}  </p>
                </div>`;

            }
        });
}