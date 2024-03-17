"use strict";
const adviceNumber = document.querySelector(".advice-card__title span");
const adviceBlockquote = document.querySelector(".advice-card__blockquote");
const adviceQuote = document.querySelector(".advice-card__blockquote__quote");
const btnGenerate = document.querySelector(".btn--generate");
// const API_ENDPOINT = "https://api.adviceslip.com/advice";
const API_ENDPOINT = "https://stoic-quotes.com/api/quote";

console.log();

async function getQuote() {
  adviceNumber.textContent = "Some wise guy about to say some deep shit...";
  adviceBlockquote.innerHTML = "<p>Since you asked...<p/>";
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) return;
    const data = await response.json();
    console.log(data);

    //advice api
    // const quote = data.slip;
    // adviceNumber.textContent = `From #${quote.id}`;
    // adviceBlockquote.innerHTML = `<q class="advice-card__blockquote__quote">${quote.advice}</q>`;

    // stoic quotes api
    adviceNumber.textContent = `${data.author}`;
    adviceBlockquote.innerHTML = `<q class="advice-card__blockquote__quote">${data.text}</q>`;
  } catch (error) {
    console.error(error);
  }
}

btnGenerate.addEventListener("click", getQuote);
