const exchangeRate = 18.5; // Example exchange rate, you can fetch real-time rates from an API

function convertCurrency(inputId) {
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