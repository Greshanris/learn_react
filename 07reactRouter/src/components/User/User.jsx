import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-red-500 m-4 text-white text-3xl p-4 rounded-lg shadow-lg'>
      <strong>User: </strong> {id}
    </div>
  )
}

export default User
