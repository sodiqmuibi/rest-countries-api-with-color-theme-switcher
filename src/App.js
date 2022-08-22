import './App.css'
import useLocalStorage from 'use-local-storage';
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage';
import CountryDetailsPage from './components/CountryDetailsPage';
import { useState } from 'react';



function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')
  const [darkTheme, setDarkTheme] = useState(true)

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setDarkTheme(!darkTheme)
  }
  return (
    <div data-theme={theme}>
      <Routes>
        <Route exact path='/' element={<Homepage darkTheme={darkTheme} click={switchTheme} />}></Route>
        <Route exact path='/country/:name' element={<CountryDetailsPage darkTheme={darkTheme} click = {switchTheme}/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
