const button = document.getElementById("callButton");
button.addEventListener("click", SendGetRequest);

async function SendGetRequest()
{
  let data = null;
  try {
  const response = await fetch("https://catfact.ninja/fact", {
    method: "GET",
    headers : {
      'Access-Control-Allow-Origin' : '*'
    }
  });
  data = await response.json();
  console.log(data);
  window.alert(data.fact);
  } catch(error) {
  console.log(error);
  }
}