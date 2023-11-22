import React, { useContext, useState } from 'react'
import userContext from '../../context/usercontext'

const LogIn = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const { setData } = useContext(userContext)
    const btnSubmit = (e) => {
       e.preventDefault()
        setData({name, email})
    }

    return (
        <>
            <div>LogIn</div>
            <div>
                <input
                    onChange={e => setName(e.target.value)}
                    type="text" />
            </div>
            <div>
                <input
                    onChange={e => setEmail(e.target.value)}
                    type="text" />
            </div>
            <button onClick={btnSubmit}>Submit</button>


        </>
    )
}

export default LogIn




// import React, { useContext, useState } from 'react'
// import userContext from '../../context/usercontext'
// const LogIn = () => {
//     const [name, setName] = useState()
//     const [email, setEmail] = useState()

//     const{setData} = useContext(userContext)
// console.log(setData)
//     console.log('btnnnn--->>>')
//     const btnSubmit = () => {
//         console.log(name, email)
//     }
//     return (
//         <div>
//             <h1> LogIn </h1>
//             <div>
//                 <input
//                     onChange={e => setName(e.target.value)}
//                     type="text" />
//             </div>
//             <div>
//                 <input
//                     onChange={e => setEmail(e.target.value)}
//                     type="text" />
//             </div>
//             <button onClick={btnSubmit}>Submit</button>
//         </div>
//     )
// }

// export default LogIn