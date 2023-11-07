let h2 = document.querySelector("#h2");
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
     let data = await getQuotes();
     h2.innerText = data.author;
     h3.innerText = data.quote;
})

let url = "https://lucifer-quotes.vercel.app/api/quotes";

async function getQuotes() {
     let res = await axios.get(url);
     return res.data[0];
}