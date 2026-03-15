document.addEventListener("DOMContentLoaded", async () => {
  const amountInput = document.querySelector(".amount-section input");
  const fromCurrency = document.querySelector(".from-section select");
  const toCurrency = document.querySelector(".to-section select");
  const searchBtn = document.querySelector("button");
  const selectFrom = document.querySelector(".currencySelect");
  const selectTo = document.querySelector(".currencySelectTo");
  const result= document.querySelector(".res");

  const key = "1c834d835bfb6cc9ee6db75b";
  let url = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`;

  let Data = await fetch(url);
  let res = await Data.json();

  const currencyCodes = Object.keys(res.conversion_rates);

  // Populate both dropdowns
  for (const code of currencyCodes) {
    let option1 = document.createElement("option");
    option1.value = code;
    option1.innerText = code;
    selectFrom.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = code;
    option2.innerText = code;
    selectTo.appendChild(option2);
  }

  // Add click event listener
  searchBtn.addEventListener("click",async () => {
    const amountValue = amountInput.value;
    const fromValue = fromCurrency.value;
    const toValue = toCurrency.value;
    url = `https://v6.exchangerate-api.com/v6/${key}/latest/${fromValue}`;
    let Data = await fetch(url);
    let res = await Data.json();
    
    

    result.innerText=`Exchange amount is ${res.conversion_rates[toValue]*amountValue}`

    console.log("Entered amount:", amountValue);
    console.log("From currency:", fromValue);
    console.log("To currency:", toValue);
  });
});