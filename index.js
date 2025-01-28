import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_0793qECugZpNUkCvejlxVQkwYQN8xkpADbNXb3tG');

export async function convertCurrency (fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = units*res.data[toCurrency];
    return multiplier;
}

convertCurrency("EUR", "USD", 3)