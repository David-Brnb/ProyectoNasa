import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { format, sub } from 'date-fns';

import Header from '../../components/Header';
import TodaysImage from '../../components/TodaysImage';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';
import fetchApi from '../../utils/fetch';
import { PostImage } from '../../types';

const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [lastFiveDaysImages, setlastFiveDaysImages] = useState<PostImage[]>([]);
    useEffect(()=>{
        const loadTodaysImage = async () => {
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            } catch (error){
                console.error(error);
                setTodaysImage({});
            }
        }

        const loadLast5DaysImages = async () => {
            try {
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');

                const last5DaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`);
                setlastFiveDaysImages(last5DaysImagesResponse);

            } catch (error) {
                console.error(error);
                setlastFiveDaysImages([]);
            }
        }

        loadTodaysImage().catch(null);
        loadLast5DaysImages().catch(null);
    }, []);
    
    return(
        <View style = {styles.container}>
            <Header />
            <TodaysImage {...todaysImage}/>
            <LastFiveDaysImages postImages={lastFiveDaysImages}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 16, 
        backgroundColor: 'rgba(7, 26, 93, 255)',
    }
});
export default Home;