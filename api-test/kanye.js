const lodQuotes= () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuoto(data));
}
const displayQuoto =(quote) => {
    //console.log(quote)
    const quoteElement = document.getElementById('quote');
    //quote.classlist.add('kanyes')
    quoteElement.style.background='gray'
    quoteElement.style.borderRadius='10px'
    quoteElement.style.padding='10px'
    quoteElement.innerText = quote.quote;
}
//lodQuotes ();