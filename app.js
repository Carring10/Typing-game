const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            console.log(data)
            data.content
        });
}

async function getNextQuote() {
    const quote = await getRandomQuote()
    console.log(quote)
}

getNextQuote()