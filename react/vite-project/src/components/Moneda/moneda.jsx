import { useEffect, useState } from "react";

export default function Convertir() {
  const [conversionRates, setConversionRates] = useState(null);
  const [amount, setAmount] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("EUR");

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/4fb18e480b652b456d1f18f4/latest/USD"
    )
      .then((respuesta) => respuesta.json())
      .then((respuestaData) => {
        setConversionRates(respuestaData.conversion_rates);
      });
  }, []);

  const handleAmountChange = (event) => {
    const value = parseFloat(event.target.value);
    setAmount(value);
  };

  const convertAmount = () => {
    if (
      conversionRates &&
      conversionRates[currencyFrom] &&
      conversionRates[currencyTo]
    ) {
      const rateFrom = conversionRates[currencyFrom];
      const rateTo = conversionRates[currencyTo];
      const convertedAmount = (amount / rateFrom) * rateTo;
      return convertedAmount.toFixed(2);
    }
    return "Calculando...";
  };

  const handleCurrencyFromChange = (event) => {
    setCurrencyFrom(event.target.value);
  };

  const handleCurrencyToChange = (event) => {
    setCurrencyTo(event.target.value);
  };

  return (
    <div className="fondo contenedor-flex">
      <div className="caja card contenedor">
        <h2 className="contenedor">Convertidor de moneda</h2>
        <div className="grilla2">
          <label>Moneda de Origen:</label>
          <select value={currencyFrom} onChange={handleCurrencyFromChange}>
            {conversionRates &&
              Object.keys(conversionRates).map((currencyCode) => (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode}
                </option>
              ))}
          </select>
        </div>
        <div className="grilla2">
          <label>Moneda de Destino:</label>
          <select value={currencyTo} onChange={handleCurrencyToChange}>
            {conversionRates &&
              Object.keys(conversionRates).map((currencyCode) => (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode}
                </option>
              ))}
          </select>
        </div>
        <div>
          <div>
            <label>Cantidad a Convertir:</label>
            <input type="number" value={amount} onChange={handleAmountChange} />
          </div>
          <p>
            Convertido: {convertAmount()} {currencyTo}
          </p>
        </div>
      </div>
    </div>
  );
}
