const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")
    const realToday = 1.2
    const dolarToday = 5.2
    const euroToday = 7.2
    const libraToday = 8.2
    const bitcoinToday = 1000.2



if (currencySelect.value == "dolar") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}
if (currencySelect.value == "euro") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
}
if (currencySelect.value == "libra") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("gb-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
}
if (currencySelect.value == "bitcoin") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
}

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue / realToday)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const flagValue = document.querySelector(".flag-value")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real brasileiro"
        flagValue.src = "./assets/real.png"
    }
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        flagValue.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        flagValue.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        flagValue.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        flagValue.src = "./assets/bitcoin.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

