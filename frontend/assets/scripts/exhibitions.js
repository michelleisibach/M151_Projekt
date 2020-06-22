/*Every exhibhitions is going to be called and listed in the area down below.*/

getEx();

function getEx() {
    fetch("api/exhibitions/get")
        .then(r => r.json())
        .then( /* display the content of the json file on the website */ )
}