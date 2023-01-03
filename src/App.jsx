import { ThemeProvider } from "next-themes"
import Form from "./Form"
import Header from "./Header"


function App() {

  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <div>
          <Header />
          <Form/>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
