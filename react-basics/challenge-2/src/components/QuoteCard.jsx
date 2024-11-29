import PropTypes from 'prop-types'; // importamos biblioteca prop-types para validación de props en componentes

import Cardstyle from './card.module.css'; // importamos archivo de estilos QuoteCard.module.css
export default function QuoteCard({ quote, handleClick, handleDelete }) { //definimos componente QuoteCard con props quote, handleClick y handleDelete como argumentos
    return ( //retornamos JSX
        <article className={Cardstyle.border}>

            <div
                onClick={() => handleClick(quote)} //al hacer click en el div se ejecuta la función handleClick con la quote como argumento
                className="max-w-sm rounded-xl cursor-pointer overflow-hidden border border-gray-200 px-6 pt-8 pb-4 flex gap-4 flex-col justify-between hover:shadow-md"
            >
                <h3 className="font-bold">{`"${quote.text}"`}</h3>
                <p>{quote.author.replace(', type.fit', '')}</p>
            </div>

            <button
                className=" items-center justify-center" //estilos del botón
                onClick={() => handleDelete(quote)} //al hacer click en el botón se ejecuta la función handleDelete que borra la quote
            >
                Eliminar
            </button>

        </article>
    );
}

QuoteCard.propTypes = { //definimos las propiedades que recibe el componente QuoteCard
    quote: PropTypes.object,
    handleClick: PropTypes.func,
    handleDelete: PropTypes.func,
};
