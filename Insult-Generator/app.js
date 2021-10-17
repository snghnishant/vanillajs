//evilinsult.com/api/#generate-insult-get

let result = document.getElementById('result');
const proxyurl = "https://cors-anywhere.herokuapp.com/"
const url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

function display(res){
    if(!res){
        console.log(res.status);
    }
    result.innerHTML = "";
    result.innerHTML = `<p>${res.insult}<p>`;
}

async function insultResult(){
        let response = await fetch(url);
        if(response.ok){
            let json = await response.json();
            display(json);
        } else {
            alert("HTTP-Error: " + response.status);
        }  
}