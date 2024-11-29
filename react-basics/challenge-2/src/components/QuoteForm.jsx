import PropTypes from 'prop-types'; // importamos biblioteca prop-types para validación de props en componentes
import { useState } from 'react'; // importamos useState desde la librería react 

export default function QuoteForm({addNewQuote}) { // definimos componente QuoteForm con prop addNewQuote como argumento
    const [newQuote, setNewQuote] = useState({ // definimos estado newQuote con valor inicial de un objeto con propiedades text y author
        text: '',
        author: '',
    })

    const handleInputChange = (e) => { // definimos función handleInputChange con argumento e
        // Almacena el valor de los inputs en el estado de la quote
        setNewQuote({ ...newQuote, [e.target.id]: e.target.value }) // actualiza el estado newQuote con el valor de los inputs
    }

    const handleSubmit = (e) => { // definimos función handleSubmit con argumento e
        e.preventDefault() // previene el comportamiento por defecto del formulario

        // Valida que los inputs no estén vacíos
        if (newQuote.text === '' || newQuote.author === '') { // si el valor de text o author es vacíos muestra un alert con el mensaje 'Todos los campos son obligatorios' y retorna la función handleSubmit sin hacer nada más
            alert('Todos los campos son obligatorios')
            return
        }
        addNewQuote(newQuote) // ejecuta la función addNewQuote con el estado newQuote como argumento
        setNewQuote({ text: '', author: '' }) //  limpia el estado newQuote
    }

    return ( //retornamos JSX - Formulario
        <>
            <h2 className="text-left text-xl font-bold mb-4">Crear nueva quote</h2>
            <form className="flex gap-2 mb-8" onSubmit={handleSubmit}>
                <InputGroup // componente InputGroup con propiedades id, placeholder, value y onChange
                    id="text"
                    placeholder="Escribe tu Quote"
                    value={newQuote.text} // valor del input text
                    onChange={handleInputChange} // función handleInputChange como callback onChange del input text
                />
                <InputGroup
                    id="author"
                    placeholder="Autor"
                    value={newQuote.author}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="py-3 px-4 block border border-gray-200 bg-orange-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none hover:bg-orange-400 transition"
                >
                    Crear Quote
                </button>
            </form>
        </>
    );
}

QuoteForm.propTypes = { // definimos las propiedades que recibe el componente QuoteForm
    addNewQuote: PropTypes.func
};

function InputGroup({ id, placeholder, value, onChange }) { // definimos componente InputGroup con propiedades id, placeholder, value y onChange como argumentos
    return ( //retornamos JSX
        <div className="max-w-sm space-y-3">
            <input
                type="text"
                placeholder={placeholder}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
        </div>
    );
}

InputGroup.propTypes = { // definimos las propiedades que recibe el componente InputGroup
    label: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};
