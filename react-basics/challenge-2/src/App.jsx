import Footer from './components/Footer'; // Importa el componente Footer desde la ruta especificada
import Header from './components/Header';

import './App.css';

import { useState, useEffect } from 'react'; // Importa useState y useEffect desde la librería react
import QuotesList from './components/QuotesList';
import Quote from './components/Quote';
import QuoteForm from './components/QuoteForm';

function App() {
    const [quote, setQuote] = useState({}); // Declara el estado quote con su función setQuote inicializado en un objeto vacío {}
    const [quotesList, setQuotesList] = useState([]); // Declara el estado quotesList con su función setQuotesList inicializado en un array vacío []

    useEffect(() => {
      // Función que carga las quotes
      const loadQuotes = async () => { // Función asíncrona que significa que no bloquea la ejecución del código
        const storedQuotes = localStorage.getItem('quotes'); // Obtiene las quotes del localStorage

        if (storedQuotes && storedQuotes !== '[]') {
          // Si hay quotes y no es un array vacío se setean en el estado
          setQuotesList(JSON.parse(storedQuotes)); // actualiza el estado quotesList con las quotes almacenadas en localStorage
        } else {
          // Si no hay quotes se hace una petición a
          // al local  y se almacenan en localStorage
          try {
            const res = await fetch('http://localhost:3000/quotes');
            const data = await res.json();
            setQuotesList(data);
            localStorage.setItem('quotes', JSON.stringify(data));
          } catch (error) {
            console.log('Error fetching quotes!', error);
          }
        }
      };

      // Ejecuta la función
      loadQuotes();
    }, []);

    const addNewQuote = (newQuote) => {
        // Agrega una nueva quote al array y actualiza el localStorage
        const updatedQuotes = [newQuote, ...quotesList];
        setQuotesList(updatedQuotes);
        localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
    };

    const setSelectedQuote = (quote) => {
        // Setea la quote clickeada
        setQuote(quote);
    };

    const deleteQuote = (quote) => {
        // Elimina la quote del array y actualiza el localStorage
        const updatedQuotes = quotesList.filter((q) => q.text !== quote.text);
        setQuotesList(updatedQuotes);
        localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
    };

    return (
        <>

            <Header />

                <QuoteForm addNewQuote={addNewQuote} />

            <main>
              <div className="quotes">
                  {quote && <Quote quote={quote.text} author={quote.author} />}

                  <QuotesList // componente QuotesList con propiedades quotesList, handleClick y handleDelete
                      quotesList={quotesList}
                      handleClick={setSelectedQuote}
                      handleDelete={deleteQuote}
                  />
              </div>
            </main>

            <Footer text="Mi App de quotes!" />


        </>);
}

export default App; // Exporta el componente App por defecto
