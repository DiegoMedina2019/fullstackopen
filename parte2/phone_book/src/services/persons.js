import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

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