import { getCurrencies, getRate } from "./script_2.js"

import {fromSelect, toSelect, amountInput, form, resalt} from "./selector.js"

async function createOpshens() {
  const currencies = await getCurrencies()
  const options = Object.entries(currencies)
  .map(([key, value]) => `<option value=${key}>${value}</option>`).join('')
  fromSelect.innerHTML = options
  toSelect.innerHTML = options
}
createOpshens()
 
async function handleInput() {
  const amount = Number(amountInput.value)
  const rates = await getRate(fromSelect.value)
  const converterAmout = rates[toSelect.value]*amount
  resalt.textContent = converterAmout
}
form.addEventListener('input', handleInput)