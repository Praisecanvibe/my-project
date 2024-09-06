// "uvk37ASN6mExSWdpJhauA7wDNPQL9LLhtGD58SlYUbU";
// "https://api.unsplash.com/search/photos?page=1&query=office^client_id=";

const apikey = "uvk37ASN6mExSWdpJhauA7wDNPQL9LLhtGD58SlYUbU";
let form = document.querySelector(".form");
let inputs = document.querySelector(".inputs");
let rresult = document.querySelector(".rresult");

let page = 1;
async function getImage(typeValue) {
  const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${typeValue}&client_id=${apikey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  let result = data.results;
  console.log(result);
  if (page === 1) {
    rresult.innerHTML = "";
  }
  result.forEach((item) => {
    console.log(item.urls.regular);

    const Images = document.createElement("img");
    const imageLink = document.createElement("a");
    imageLink.href = item.links.html;
    Images.src = item.urls.small;
    imageLink.appendChild(Images);

    rresult.appendChild(imageLink);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let typeValue = inputs.value;
  getImage(typeValue);
});
