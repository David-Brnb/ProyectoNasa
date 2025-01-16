import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';

const Home = () => {
    const [todaysImage, setTodaysImage] = useState();
    useEffect(()=>{
        const loadTodaysImage = async () => {
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            } catch (error){
                console.error(error);
                setTodaysImage(undefined);
            }
        }

        loadTodaysImage().catch(null);
    }, []);

    console.log(todaysImage);
    return(
        <View style = {styles.container}>
            <Header />
            <View>
                <Text style={{color: '#fff'}}>
                    {todaysImage? todaysImage['date']: "no data aviable"}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 16, 
    }
});
export default Home;