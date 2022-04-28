// Imports
// __________________________________________________
import newElements from "./domBuiler.js";

// Elements
// __________________________________________________

// Date element
export const dateElement = newElements(`
  <time>${moment().locale('uk').format('L')}</time>
`)

export const searchCurrenciesItem = (item, arr) => {
  
  return newElements(`
  <li class="currencies__search__item d-flex">
    <h4 class="currencies__search__item__currensy-title d-flex">
      <span class="currencies__search__item__currensy-title__currensy">${item.currency}</span>

      <i class="currencies__search__item__currensy-title__arrows ri-arrow-left-right-line"></i>

      <span class="currencies__search__item__currensy-title__baseCurrency">${item.baseCurrency}</span>
    </h4>
      
    <span class="currencies__search__item__currensy-text__${arr[0]}">${item[arr[0]].toFixed(2)}</span>
    
    <span class="currencies__search__item__currensy-text__${arr[1]}">${item[arr[1]].toFixed(2)}</span>

  </li>
`)
};
