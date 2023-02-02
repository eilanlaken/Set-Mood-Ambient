import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const AmbientItem = ({name, soundBundle}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleStart = () => {

    }

    const handleStop = () => {

    }

    return (
        <View style={styles.item}>
            <Text numberOfLines={1} style={{color: '#fff', width: '80%'}}>{name}</Text>
            {!isPlaying && <Icon style={{paddingLeft: 8}} name='play' size={18} color='#eee' />}
            {isPlaying && <Icon style={{paddingLeft: 8}} name='pause' size={18} color='#eee' />}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderRadius: 25,
        margin: 3,
        backgroundColor: '#728bd4',
    }
});

export default AmbientItem;