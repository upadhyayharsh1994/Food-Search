import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultShowScreen= ({navigation}) =>{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(result);
    console.log(id);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return <View>
        <Text style = {styles.textStyle}>{result.name}</Text>
        <FlatList 
            data= {result.photos}
            keyExtractor={(photo) => photo}
            renderItem= {({item}) => {
                return<Image style={styles.image} source={{uri: item}}/>
            }}/>
    </View>
}

const styles = StyleSheet.create({
    image: {
        margin: 10,
        borderRadius: 4,
        alignSelf: 'center',
        height: 120,
        width: 250
    },
    textStyle: {
        fontWeight:'bold',
        fontSize: 16,
        alignSelf: 'center' 
    }
});

export default ResultShowScreen;