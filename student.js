import React, { useEffect, useState } from 'react'
import { getStudent } from './axios'

export default function Student() {
    const [data, setData] = useState(null)
    const[loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        getStudent().then(res =>{
            setData(res.data)
            setLoading(false)
            console.log(res.data);
        }).catch(err=>{
            setLoading(false)
            setData(null)
        })
    })

    const renderStudent = (item, index)=>{
        return <li key={index}>
            <p>Tên : {item.name}</p>
            <p>Tuổi: {item.age}</p>
            <p>Địa chỉ: {item.address}</p>
        </li>
    }
    return (
        <div>
            {data && data.length === 0 ? 
            (<div>(╯°□°）╯︵ ┻━┻</div>) :
            (data && data.map(renderStudent))}
            
        </div>
    )
}

