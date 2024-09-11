const button = document.getElementById("button");
button.addEventListener("click", SendGetRequest);

async function SendGetRequest()
{
//fetch data
let data = null;
try {
const response = await fetch("https://catfact.ninja/fact", {
  method: "GET",
  headers : {
    'Access-Control-Allow-Origin' : '*'
  }
});
console.log(response);
data = await response.json();
console.log(data);
window.alert(data.fact);
} catch(error) {
console.log(error);
}

// check if call worked 

// console log data
// console log error

}