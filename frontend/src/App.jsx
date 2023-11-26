import Typography from '@mui/material/Typography'
import { ThemeContext } from './contexts/ThemeContext'
import { useContext } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import ThemeToggle from './components/navbar-components/ThemeToggle'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'


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
      <LoginPage />
      <ThemeToggle />
      
    </ThemeProvider>
      
    </>
  )
}

export default App
