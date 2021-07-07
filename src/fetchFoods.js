import  { useState, useEffect } from 'react'
import axios from 'axios'

export default function useRemoteData() {
    const [datas, setDatas] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

function remote() {
    setLoading(true)
    axios.get(`https://asm-dev-api.herokuapp.com/api/v1/food`)
    .then((response) => {
       setDatas(response.data.data.meals)
       setLoading(false)
    })
    .catch((e) => {
        setError(e)
        setLoading(false)
    })
}

useEffect(() => {
    remote()
}, [])

return [datas, error, loading]

}