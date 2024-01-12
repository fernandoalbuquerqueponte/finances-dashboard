import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/routes"

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { AuthProvider } from "./contexts/auth"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer autoClose={3000} />
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
