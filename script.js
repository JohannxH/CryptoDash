async function getExchangeRate() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    return data.rates.ZAR;
}

async function convertCurrency(inputId) {
    const exchangeRate = await getExchangeRate();
    const usdInput = document.getElementById('usd');
    const zarInput = document.getElementById('zar');
    if (inputId === 'usd') {
        const usd = parseFloat(usdInput.value);
        const zar = usd * exchangeRate;
        zarInput.value = zar.toFixed(2);
    } else if (inputId === 'zar') {
        const zar = parseFloat(zarInput.value);
        const usd = zar / exchangeRate;
        usdInput.value = usd.toFixed(2);
    }
}

function searchCoins() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const iframes = document.querySelectorAll('.iframe-container');
    iframes.forEach(iframe => {
        const coin = iframe.getAttribute('data-coin');
        const abbr = iframe.getAttribute('data-abbr');
        if (coin.includes(input) || abbr.includes(input)) {
            iframe.style.display = 'block';
        } else {
            iframe.style.display = 'none';
        }
    });
}
