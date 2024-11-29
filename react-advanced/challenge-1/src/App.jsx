import AnimatedComponent from './components/AnimatedComponent';
import Calculator from './components/Calculator';
import ExpensiveCalculationComponent from './components/ExpensiveCalculationComponent';
import Navbar from './components/Navbar';
import { ThemeProvider} from './context/ThemeContext';

// import { useTheme, ThemeContext } from './context/ThemeContext';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        {/* <MainContent /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
