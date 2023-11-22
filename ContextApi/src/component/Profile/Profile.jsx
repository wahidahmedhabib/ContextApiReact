import React, { useContext } from 'react'
import userContext from '../../context/usercontext'

const Profile = () => {
  const {data} = useContext(userContext)

  console.log(data)

  return (
    <div>
      NAME : {data.name}
      <br />
      EMAIL : {data.email}
    </div>
  )
}

export default Profile