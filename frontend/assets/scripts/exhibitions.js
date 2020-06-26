/*Every exhibhitions is going to be called and listed in the area down below.*/
const tbody = document.getElementById("exhibitions");

getEx();

function getEx() {
    fetch("/api/exhibitions/get")
        .then(r => r.json())
        .then(r => {
            const parseData = JSON.parse(r);

            for (var i = 0; i < parseData.length; i++) {
                var obj = parseData[i];

                if (obj.name != "" && obj.code != "" && obj.time != "" && obj.date != "") {


                    tbody.innerHTML +=
                        `
                <div height: 200px;>  
                    <p> Name: ${obj.name} <br>
                     Code: ${obj.code} <br>
                    Time: ${obj.time} <br>
                   Date: ${obj.date}  </p>
                </div>`;
                }
            }
        });
}

function joinMeeting() {
    var code = document.getElementById("meetingcode").value;

    //check if the meeting code is valid
    fetch("/api/exhibitions/get")
        .then(r => r.json())
        .then(r => {
            const parseData = JSON.parse(r);

            for (var i = 0; i < parseData.length; i++) {
                var obj = parseData[i];

                if (obj.code == code) {
                    window.open('https://www.youtube.com/watch?v=V5ycXf0x7Rs', '_blank');
                    document.getElementById("meetingcode").value = "";

                } else {
                    document.getElementById("meetingcode").value = "";
                }
            }
        });
}