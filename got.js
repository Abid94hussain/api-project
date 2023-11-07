let h2 = document.querySelector("#h2");
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
     let data = await getQuotes();
     console.log(data)
     h2.innerText = data.character.name;
     h3.innerText = data.sentence;
})

let url = "https://api.gameofthronesquotes.xyz/v1/random";

async function getQuotes() {
     let res = await axios.get(url);
     return res.data;
}