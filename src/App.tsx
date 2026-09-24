import { useState } from "react"
import toast, {Toaster} from "react-hot-toast"



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
    </div>
  )
}

export default App
