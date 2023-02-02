import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const getRandomGreenShade = () => {
    const red = Math.floor(Math.random() * 180);
    const blue = Math.floor(Math.random() * 180);
    return "rgb(" + red + ", 255, " + blue + ")";
}

const AmbientItem = ({name, soundBundle, play, stop}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <View style={{...styles.item, backgroundColor: getRandomGreenShade()}}>
            <Text numberOfLines={1} style={{color: '#222', width: '80%'}}>{name}</Text>
            {!isPlaying && <Icon style={{paddingLeft: 8}} name='play' size={18} color='#222' />}
            {isPlaying && <Icon style={{paddingLeft: 8}} name='pause' size={18} color='#222' />}
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