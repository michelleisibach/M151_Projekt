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
                           <p> Name: ${obj.firstname} <br>
                            Code: ${obj.lastname} <br>
                           Time: ${obj.status} <br>
                          Date: ${obj.age}  </p>
                       </div>`;

            }
        });
}