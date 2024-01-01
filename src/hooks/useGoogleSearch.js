import { useState, useEffect } from 'react';
import API_KEY from '../keys';

const CONTEXT_KEY = "f5d68cae4e8b74579";
const UseGoogleSearch = (term) => {
    const [data, setData] = useState(null);
   
    useEffect(() => {
        console.log('Inside hooks useeffect')
        const fetchData = () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(res => res.json())
            .then(result => {
                setData(result);
            })
        }   
        fetchData();
    }, [term])

    return {data}

}

export default UseGoogleSearch;
