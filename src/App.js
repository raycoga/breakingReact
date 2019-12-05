import React, { useState, useEffect } from "react";
import axios from "axios";

function Frase({ frase }) {
  return (
    <div className="frase">
      <h1>
        {frase.quote}
      </h1>
      <p>
        - {frase.author}
      </p>
    </div>
  );
}

function App() {
  const [frase, setfrase] = useState({});
  const consultQuotes = async () => {
    const result = await axios(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    setfrase(result.data[0]);
  };
  /* Para consultar una API siempre se usara un metodo de useEffect */
  useEffect(() => {
    consultQuotes();
  }, []);

  return (
    <div className="contenedor">
      <Frase frase={frase} />
      <button onClick={consultQuotes}>Generate new </button>
    </div>
  );
}

export default App;
