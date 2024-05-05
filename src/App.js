import './App.css';
import Header from './Components/Header.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#3b5998',
    }
  },
  breakpoints: {
    values: {
      xxs: 0,   // small phone
      xs: 300,  // phone
      sm: 600,  // tablets
      md: 900,  // small laptop
      lg: 1200, // desktop
      xl: 1536  // large screens
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <Navbar/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;