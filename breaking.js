let h2 = document.querySelector("#h2");
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
     let data = await getQuotes();
     h2.innerText = data[0].author;
     h3.innerText = data[0].quote;
})

let url = "https://api.breakingbadquotes.xyz/v1/quotes";

async function getQuotes() {
     let res = await axios.get(url);
     return res.data;
}