import './App.css'
import useLocalStorage from 'use-local-storage';
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage';
import CountryDetailsPage from './components/CountryDetailsPage';



function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  return (
    <div data-theme={theme}>
      <Routes>
        <Route exact path='/' element={<Homepage click={switchTheme} />}></Route>
        <Route exact path='/country/:name' element={<CountryDetailsPage click = {switchTheme}/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
