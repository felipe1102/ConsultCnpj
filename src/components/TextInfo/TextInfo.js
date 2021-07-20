import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default  props =>{
    return(
        <View style={styles.containerData}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <Text style={styles.data}>
                {props.info}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerData:{
        marginBottom: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    data: {
        marginBottom: 5,
        fontSize: 18,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
});
