import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import AmbientItem from "./AmbientItem";

const AmbientList = ({items}) => {
    const [playingIndex, setPlayingIndex] = useState(-1);

    const play = (index) => {
        
    }

    const stop = () => {

    }

    return (
        <View style={styles.list}>
            <Text style={{color: '#eee', paddingBottom: 5, marginBottom: 6, fontSize: 20, alignSelf: 'center'}}>Your Collection</Text>
            <FlatList
                data={items}
                renderItem={({item}) => <AmbientItem name={item.name} soundBundle={item.soundBundle} play={play} stop={stop} />}
                keyExtractor={(item, index) => `key_${index}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',     
        width: '90%',
        maxHeight: '80%',
        minHeight: '85%',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        alignSelf: 'center',
    }
});

export default AmbientList;