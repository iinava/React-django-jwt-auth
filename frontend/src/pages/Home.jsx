import React, { useEffect, useState } from 'react'
import api from '../api'


export default function Home() {
    const [user, setuser] = useState({})

    useEffect(()=>{
       const response = api.get('/api/user/info/').then((data)=>{
        setuser(data.data)
        // console.log(user);
       }).catch((err)=>{
        // console.log(err);
       })
    },[])
  return (
<>
<div>{user.username}</div>
<div>{user.email}</div>
<h1 className="text-3xl bg-red-500 font-bold underline">
      Hello world!
    </h1>
</>
  )
}
