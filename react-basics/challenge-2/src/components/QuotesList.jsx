import PropTypes from 'prop-types'; // importamos biblioteca prop-types para validación de props en componentes
import QuoteCard from './QuoteCard';

export default function QuotesList({ quotesList, handleClick, handleDelete }) { //definimos componente QuotesList con props quotesList, handleClick y handleDelete como argumentos

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quotesList.map((quote) => (
                <QuoteCard //retornamos componente QuoteCard
                    key={quote.id}
                    quote={quote}
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
}

QuotesList.propTypes = { // definimos las propiedades que recibe el componente QuotesList
    quotesList: PropTypes.array,
    handleClick: PropTypes.func,
    handleDelete: PropTypes.func,
};
