import React from 'react'

import './Course.css'
import infos from './infos'
import { useParams } from 'react-router-dom'
export default function Course() {
    const param=+(useParams().id)
    let result=infos.find(info=>{return info.id===param})
  return (
    <div>
       <div className='course-page'>
      <div className="">
        <img src={result.cover} alt="" />
        <h3>{result.name}</h3>
        <p>{result.price}</p>

      </div>
    </div>
    </div>
  )
}



