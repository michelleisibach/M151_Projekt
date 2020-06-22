/* every priest is going to be listed here */

getPriests();

function getPriests() {
    fetch("api/priests/get")
        .then(r => r.json)
        .then( /* list priests on page */ )
}