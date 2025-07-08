import {useState,useEffect} from "react"
import axios from "axios"

const useFetch = (endpoint) => {
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)


const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {
    query: 'developer jobs in chicago',
    page: '1',
    num_pages: '1',
    country: 'us',
    date_posted: 'all'
  },
  headers: {
    'x-rapidapi-key': '',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }

};

try {


    
} catch (error) {
    
}


    
}

 