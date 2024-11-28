import PropTypes from 'prop-types'; // importamos prop-types es una libreria para validar los props(propiedades) de un componente

export default function Footer({text}) { //componente funcional Footer con prop text como argumento
  return ( //me devuelve codigo jsx como debe renderizarse el footer
    <footer>
        <p>Footer!</p>
        <p>{text}</p>
    </footer>
  )
}

Footer.propTypes = { // nos aseguramos de que el componente Footer tiene una propiedad text, y que es de tipo string
    text: PropTypes.string
};
