import { createContext, useContext } from "react";

export const userContext = createContext({
    themeMode : "light",
    darkMode : ()=>{},
    lightMode : ()=>{},
});


export const Userprovider = userContext.Provider

// console.log(userContext , Userprovider)

// console.log(userProvider)
export default function useTheme() {
    return useContext(userContext)
    // console.log(context)
}
// useTheme()
