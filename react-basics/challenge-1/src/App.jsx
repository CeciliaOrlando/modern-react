import Footer from './components/Footer'; //importamos el componente Footer
import Header from './components/Header'; // importamos el componente Header

import './App.css'; //importamos el archivo App.css

import data from './data.json'; //importamos el archivo data.json
import Quote from './components/Quote';  //importamos el componente <Quote></Quote>
import { useState } from 'react';  //importamos useState de react

function App() { // definimos el componente funcional App
    const [quote, setQuote] = useState(data[0]); //useState es un hook que nos permite tener estado en un componente funcional, en este caso seteamos el estado inicial con la primera quote del array data

    const setRandomQuote = () => { //definimos la funcion setRandomQuote
        const randomNumber = Math.floor(Math.random() * data.length); //generamos un numero aleatorio entre 0 y la longitud del array data
        setQuote(data[randomNumber]); //seteamos el estado quote con la quote que se encuentra en la posicion randomNumber del array data
    };

    return ( //me devuelve codigo jsx como debe renderizarse la app
      <>
          <Header />

          <main>
              <Quote quote={quote.quote} author={quote.author} /> 

              <button onClick={setRandomQuote}>Cambiar quote</button>
          </main>

          <Footer text="Mi App de quotes!" />
      </>
  );
}

export default App; // exportamos el componente App
