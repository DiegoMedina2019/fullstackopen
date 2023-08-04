import axios from "axios";
// url absoluta a un origen distinto
// const baseUrl = 'http://localhost:3001/api/persons'

// url relativa hace referencia al mismo origen, es decir si compilo este FRONT y lo llevo al BACKEND apuntara al mismo BACK
const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl).then(resp => resp.data )
}
const create = newPerson => {
    return axios.post(baseUrl,newPerson).then(resp => resp.data )
}
const update = ( id, changeObject ) => {
    return axios.put(`${baseUrl}/${id}`,changeObject).then(resp => resp.data )
}
const remove = id => {
    return axios.delete(`${baseUrl}/${id}`).then(resp => resp.data )
}
export default {getAll,create,update,remove}