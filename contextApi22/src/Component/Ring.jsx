import React from 'react'

const Ring = ({ bg }) => {
    console.log(bg)

    return (
        <div className={`h-14 w-14 rounded-full
          bg-${bg}-700
           border-4 border-yellow-500` }>

        </div>
    )
}

export default Ring