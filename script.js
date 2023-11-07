let h2 = document.querySelector("#h2");
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
     let data = await getQuotes();
     h2.innerText = data[0].author;
     h3.innerText = data[0].quote;
     console.log(data);

});

let url = "https://strangerthings-quotes.vercel.app/api/quotes";

async function getQuotes(){
     let res = await axios.get(url);
     return res.data;
}