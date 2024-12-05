import instance from "axios"

export const URI = "http://localhost:4000/"
// export const URI = "http://192.168.1.64:4000/"

const myAxios = instance.create({
    baseURL: URI,
    withCredentials: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
})

export default myAxios