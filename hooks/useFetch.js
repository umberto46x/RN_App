import {useState,useEffect} from "react"
import axios from "axios"
/* import {RAPID_API_KEY} from '@env' */

/* const rapidAPiKey =  RAPID_API_KEY */

const useFetch = (endpoint,query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
        'x-rapidapi-key': /* rapidAPiKey */ "ffe1cb66e0msh60d49081f41e696p1f3157jsn80872214f149",
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    }

    };


    const fetchJobs = async ()=> {
        setIsLoading(true);


        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false);
            } catch (error) {
                setError(error)
                alert(`There's an error: ${error}`)
                
                }finally{
                setIsLoading(false)
                }

    }

    useEffect(() => {
    fetchJobs()
    }, [])


    const refetch = () => {
        setIsLoading(true);
        fetchJobs();
    }

return {data,isLoading,error,refetch};

}

 
export default useFetch; 