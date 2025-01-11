import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Greshanris")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-red-500 text-white p-4 text-3xl rounded-lg shadow-lg flex flex-wrap'>
        <img className="w-1/4 h-1/4 rounded-full shadow-lg" src={data.avatar_url} alt="Git picture" />
        <div className=' bg-red-400 rounded-lg m-4 p-4 text-center border-none shadow-lg h-20'>Github Followers: {data.followers}</div>
      
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Greshanris")
  return response.json()
} 
