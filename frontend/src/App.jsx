import Typography from '@mui/material/Typography'
import { ThemeContext } from './contexts/ThemeContext'
import { useContext } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import ThemeToggle from './components/navbar-components/ThemeToggle'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import {Routes, Route} from 'react-router-dom'
import DatabasePage from './pages/DatabasePage'


function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  const appTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='database' element={<DatabasePage />}>

        </Route>
      </Routes>
      {/* <DatabasePage /> */}
      {/* <LoginPage />
      <HomePage /> */}

      <ThemeToggle />
      
    </ThemeProvider>
      
    </>
  )
}

export default App
