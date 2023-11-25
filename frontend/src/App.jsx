import Typography from '@mui/material/Typography'
import { ThemeContext } from './contexts/ThemeContext'
import { useContext } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import ThemeToggle from './components/navbar-components/ThemeToggle'
// import Login from './pages/Login'
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


      <ThemeToggle />
      {/* <Login /> */}
      <LoginPage />
    </ThemeProvider>
      
    </>
  )
}

export default App
