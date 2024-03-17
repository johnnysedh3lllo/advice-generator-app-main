"use strict";
const adviceNumber = document.querySelector(".advice-card__title span");
const adviceBlockquote = document.querySelector(".advice-card__blockquote");
const adviceQuote = document.querySelector(".advice-card__blockquote__quote");
const btnGenerate = document.querySelector(".btn--generate");
const API_ENDPOINT = "https://api.adviceslip.com/advice";

console.log();

async function getQuote() {
  adviceBlockquote.innerHTML = "<p>Loading....<p/>";
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) return;
    const data = await response.json();
    const quote = data.slip;
    adviceNumber.textContent = quote.id;
    adviceBlockquote.innerHTML = `<q class="advice-card__blockquote__quote">${quote.advice}</q>`;
  } catch (error) {
    console.error(error);
  }
}

btnGenerate.addEventListener("click", getQuote);
