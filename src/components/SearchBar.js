import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={style.backgroundStyle}>
        <Feather name="search" style={style.iconStyle}/>
        <TextInput 
            style={style.inputStyle}
            placeholder="Search"
            value= {term}
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}

        />
        </View>
};

const style = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FFFFFF',
        height: 50,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row'
    },
    inputStyle:{
        flex: 1,
        fontSize: 14        
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;