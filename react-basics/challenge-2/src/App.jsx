import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import { useState, useEffect } from 'react';
import QuotesList from './components/QuotesList';
import Quote from './components/Quote';
import QuoteForm from './components/QuoteForm';

function App() {
  const [quote, setQuote] = useState({}); // Estado para la cita destacada
  const [quotesList, setQuotesList] = useState([]); // Estado para la lista de citas

  useEffect(() => {
    // Función que carga las quotes
    const loadQuotes = async () => {
      const storedQuotes = localStorage.getItem('quotes');

      if (storedQuotes && storedQuotes !== '[]') {
        // Si hay quotes en el localStorage, las cargamos
        setQuotesList(JSON.parse(storedQuotes));
      } else {
        // Si no hay quotes, hacemos la solicitud a la API
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

    loadQuotes();
  }, []);

  const addNewQuote = (newQuote) => {
    // Agrega una nueva quote al array y actualiza el localStorage
    const updatedQuotes = [newQuote, ...quotesList];
    setQuotesList(updatedQuotes);
    localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
  };

  const setSelectedQuote = (quote) => {
    // Actualiza el estado de quote con la cita seleccionada
    setQuote(quote);
  };

  const deleteQuote = (quote) => {
    // Elimina la cita del array y actualiza el localStorage
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
          {quote && quote.text && (
            <div className="quote-destacada">
              <h2>Quote Destacada</h2>
              <Quote quote={quote.text} author={quote.author} />
            </div>
          )}

          <QuotesList
            quotesList={quotesList}
            handleClick={setSelectedQuote} // Manejador de click para destacar la cita
            handleDelete={deleteQuote}    // Manejador de eliminación de cita
          />
        </div>
      </main>

      <Footer text="Mi App de quotes!" />
    </>
  );
}

export default App;
