import axios from 'axios'

let instanAxios = axios.create({
    timeout:20000,
    baseURL:'http://localhost:9898'
})

export const getStudent = () =>{
    return instanAxios.get(`/`)
}

export const updateStudent = (body)=>{
    return instanAxios.put('/updateStudent',body)
}

export const addStudent = (body)=>{
    return instanAxios.post('/addStudent',body)
}

export const deleteStudent = (id)=>{
    return instanAxios.delete('/deleteUser'+id)
}

