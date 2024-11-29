import { createContext, useState, useContext} from 'react';

export const ThemeContext = createContext(null); // Creamos el contexto


// Crear un custom hook para acceder al contexto
export const useTheme = () => { // Crear un custom hook para acceder al contexto
  return useContext(ThemeContext); // Usar el hook useContext para acceder al contexto
};


// crear el proveedor del contexto y envolver la aplicacion
export const ThemeProvider = ({ children }) => { // crear el proveedor del contexto y envolver la aplicacion
  const [theme, setTheme] = useState(false); // false = light, true = dark

    const toggleTheme = () => { // funcion para alternar el tema
        setTheme((prev) => !prev); // Alternar entre true (dark) y false (light)
        document.body.classList.toggle('dark'); // Añadir o quitar la clase 'dark' al body
    };


    return ( // Devolver el proveedor del contexto  y envolver la aplicacion
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
