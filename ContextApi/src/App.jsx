import React, { useState } from 'react'
import Userprovider from './context/userprovider'
import LogIn from './component/login/LogIn'
import Profile from './component/Profile/Profile'
import userContext from './context/usercontext'
const App = () => {
console.log(Userprovider )
console.log(userContext)

  const [data, setData] = useState('kk')

  return (
    <userContext.Provider value={{ data, setData }} >
      <LogIn />
      <Profile />
    </userContext.Provider>
  )
}

export default App