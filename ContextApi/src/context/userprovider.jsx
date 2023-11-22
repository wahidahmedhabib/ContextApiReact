import React, { useState } from "react";
import userContext from "./usercontext";
import LogIn from "../component/login/LogIn";
import Profile from "../component/Profile/Profile";

function Userprovider  ({ childern }) {
    // console.log("okkkk------>>" , childern)
    const [data , setData] = useState('not')

    // console.log(data , LogIn)

    return (
        <userContext.Provider value={ {data , setData} }>
            {childern}
            {/* <LogIn /> */}
            {/* <Profile /> */}
        </userContext.Provider>
    )
}
// console.log(Userprovider)
export default Userprovider