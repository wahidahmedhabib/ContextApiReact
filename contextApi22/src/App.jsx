
import { useState ,useEffect } from "react"
import { Userprovider } from "./Context/Context"
import Card from "./COMPONENT/Card"
import ThemeBtn from "./COMPONENT/ThemeBtn"

function App() {
  // console.log(Userprovider)
  const [themeMode, setThemeMode] = useState('light')
  const darkMode = () => {
    setThemeMode("dark")

  }
  const lightMode = () => {
    setThemeMode("light")
  }

  useEffect(() => {

    
 const remm = document.querySelector("html").classList.remove('dark' , 'light')
//  console.log(remm)

// document.querySelector("html").classList.remove('dark' , 'light')

document.querySelector("html").classList.add(themeMode)
  }, [themeMode])


  // console.log(Userprovider)
  return (

    <Userprovider value={{ themeMode, darkMode, lightMode }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </Userprovider>
  )
}

export default App
