import {Toaster} from "react-hot-toast"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"



function App() {
  return (
    <div className="min-h-screen">
      <Toaster
        position="top-center"
        toastOptions={{
          style: { fontFamily: "inherit", fontSize: "14px", borderRadius: "10px" },
          success: { iconTheme: { primary: "#c026d3", secondary: "#fff" } },
        }}
      />

      <Navbar />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  )
}

export default App
