import React from 'react';
import './Searchpage.css';
import { useStateValue } from '../StateProvider';
import UseGoogleSearch from '../hooks/useGoogleSearch';
import Response from '../constants/response';

const SearchPage = () => {
    const [{term}] = useStateValue();
    // Live API call
    // const {data} = UseGoogleSearch(term);
    
    const data = Response;
    console.log(data);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'> 
                <h1>{term}</h1>
            </div>

            <div className='searchPage__results'> 
                
            </div>
        </div>
    );
}

export default SearchPage;
