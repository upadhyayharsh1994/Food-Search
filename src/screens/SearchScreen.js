import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult'
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
    const[term, setTerm] = useState('');
    const[searchApi, results, errorMessage] = useResult();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    };

    return (
        <View style = {{flex: 1}}>
            <SearchBar 
                term = {term} 
                onTermChange={setTerm} 
                onTermSubmit= {() => searchApi(term)}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null}  
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title = "Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title = "Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title = "Big Spender" />
            </ScrollView>
        </View>

    );
};

export default SearchScreen;