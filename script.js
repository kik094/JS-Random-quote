let quoteBtn = document.querySelector("#quote-btn");
let quote = document.querySelector("#quote");
let quoteAuthor = document.querySelector("#quote-author");


let fetchData = () => {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        }).then(function (data) {
              

            quoteBtn.addEventListener("click", genrateQuote);
            function genrateQuote() {

                const quotes = data.map(item => item)
             

                let count = Math.floor(Math.random() * quotes.length);
                quoteAuthor.innerHTML = quotes[count].author
                quote.innerHTML = quotes[count].text

            }
           
        });
      
}
fetchData()


