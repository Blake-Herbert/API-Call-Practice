const button = document.getElementById("button");
button.addEventListener("click", SendGetRequest);

function SendGetRequest()
{
const xhttpr = new XMLHttpRequest();
//xhttpr.open('GET', "https://catfact.ninja/fact");
xhttpr.open('GET', "https://localhost:7251/api/HighScores")
xhttpr.send();
  
xhttpr.onload = ()=> 
{
  console.log(xhttpr.status);
  if (xhttpr.status === 200) 
  {
      const response = JSON.parse(xhttpr.response);
      console.log(response);
  } else 
    {
      console.log("Error");
    }
  };
}