const button = document.getElementById("button");
button.addEventListener("click", SendGetRequest);

async function SendGetRequest()
{
//fetch data
let data = null;
try {
const response = await fetch("https://localhost:7251/api/HighScores", {
  method: "GET",
  headers : {
    'Access-Control-Allow-Origin' : '*'
  }
});
console.log(response);
data = await response.json();
console.log(data);
} catch(error){
console.log(error);
}

// check if call worked 

// console log data
// console log error



// const xhttpr = new XMLHttpRequest();
// //xhttpr.open('GET', "https://catfact.ninja/fact");
// xhttpr.open('GET', "https://localhost:7251/api/HighScores")
// xhttpr.send();
// xhttpr.onload = ()=> 
// {
//   console.log(xhttpr.status);
//   if (xhttpr.status === 200) 
//   {
//       const response = JSON.parse(xhttpr.response);
//       console.log(response);
//   } else 
//     {
//       console.log("Error");
//     }
//   };
}