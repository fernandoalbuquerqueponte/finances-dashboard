import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/routes"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
