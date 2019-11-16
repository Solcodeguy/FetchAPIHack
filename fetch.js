// function to render some HTML which needs information from both 
// APIs to work correctly
function renderHTML(APIResponse, AnotherAPIResponse) {
    document.querySelector("body").innerHTML = `<h1>${APIResponse.info}: ${AnotherAPIResponse.info}</h1>`
}
// Created function to hit both endpoint 
function getData() {
    let firstAPICall = fetch("https://api.endpoint.com/first");
    let secondAPICall = fetch("https://api.endpoint.com/second");

    // Created a function that returns a Promise
    // which would call function fetching from both endpoints 
    // and call the other function render the HTML to the page.
    Promise.all([firstAPICall, secondAPICall])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(finalVals => {
            let firstAPIResp = finalVals[0];
            let secondAPIResp = finalVals[1];
            renderHTML(firstAPIResp, secondAPIResp);
        });
}