import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";

const Detail = () => {
    const {params: {title, url, explanation, date}} = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();
    return (
        <View style = {styles.container}>
            <Header />
            <View style = {styles.content}>
                <Image source={{uri: url}} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal:16, 
        backgroundColor: 'rgba(7, 26, 93, 255)',
    },
    content: {
        flex: 1, 
        backgroundColor: '#2c449d', 
        borderRadius: 32, 
        marginVertical: 24, 
        padding: 16,
    },
    image: {
        width: '100%', 
        height: '50%',
        borderColor: '#FFF', 
        borderRadius: 32, 
        borderWidth: 2, 
        marginBottom: 16, 
    },
    title: {
        color: '#FFF', 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginBottom: 16, 
    },
    date: {
        color: '#FFF', 
        fontSize: 16, 
    },
    explanation: {
        color: '#FFF',
    },
});

export default Detail;