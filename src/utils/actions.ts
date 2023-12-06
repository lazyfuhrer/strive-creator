import axios, { AxiosResponse } from 'axios';

interface ExchangeRatesData {
  data: {
    rates: {
      USD: number;
      // Add other currencies if needed
    };
  };
}

export const getMaticExchangeRates = async (usdValue: number): Promise<number | null> => {
  const apiUrl = 'https://api.coinbase.com/v2/exchange-rates';
  const currency = 'MATIC';

  try {
    const response: AxiosResponse<ExchangeRatesData> = await axios.get(apiUrl, {
      params: { currency },
    });

    if (response.status === 200) {
      const usdToMaticRate = response.data.data.rates.USD;
      console.log(`USD to MATIC Exchange Rate: ${usdToMaticRate}`);

      // Convert the provided USD value to MATIC
      const maticValue = convertUsdToMatic(usdValue, usdToMaticRate);
      console.log(`${usdValue} USD is approximately ${maticValue} MATIC`);

      return maticValue;
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return null;
    }
  } catch (error) {
    //@ts-ignore
    console.error('An error occurred while making the request:', error.message);
    return null;
  }
};

const convertUsdToMatic = (usdValue: number, exchangeRate: number): number => {
  return usdValue * exchangeRate;
};