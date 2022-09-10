import { baseUrl, apikey} from "./confirm.js";

export async function getCurrencies() {
    const myHeaders = new Headers();
    myHeaders.append("apikey", apikey);
  
    const requestOptions = {
    redirect: 'follow',
    headers: myHeaders
  };
  const respons = await fetch(`${baseUrl}/exchangerates_data/symbols`, requestOptions)
  
  const currencies = await respons.json()
  return currencies?.symbols
  }
  
  const rates = {}
  
export  async function getRate(base) {
  
    if(rates[base]) {
      return rates[base]
    }
    console.log('we don`t have raset for this base')
    const myHeaders = new Headers();
    myHeaders.append("apikey", apikey);
  
    const requestOptions = {
    redirect: 'follow',
    headers: myHeaders
  };
  
  const response = await fetch(`${baseUrl}/exchangerates_data/latest?base=${base}`, requestOptions)
  const date= await response.json('')
  rates[base] = date.rates
  return rates[base]
  }