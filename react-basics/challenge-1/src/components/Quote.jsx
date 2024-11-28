import PropTypes from 'prop-types'; //prop-types es una libreria para validar los props(propiedades) de un componente

export default function Quote({quote, author}) { //Componente funcional Quote con props quote y author como argumentos
  return ( //me devuelve codigo jsx como debe renderizarse la imagen
    <div>
        <h3>{quote}</h3>
        <p>{author}</p>
    </div>
  )
}

Quote.propTypes = { // nos aseguramos de que el componente Quote tiene dos propiedades, quote y author, y que ambas son de tipo string
    quote: PropTypes.string,
    author: PropTypes.string
};

