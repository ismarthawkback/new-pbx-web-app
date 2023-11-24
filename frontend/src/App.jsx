import Typography from '@mui/material/Typography'
import { ThemeContext } from './contexts/ThemeContext'
import { useContext } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'


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
      <Typography variant="h1">Hi, {theme}</Typography>
    </ThemeProvider>
      
    </>
  )
}

export default App
