import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp'; 

export default () => {
    const[results, setResults] = useState([]);
    const[errorMessage, setError] = useState('');

    const searchApi = async searchTerm => {
        console.log('Hi there!')
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch(e){
            setError('Something went wrong')
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};