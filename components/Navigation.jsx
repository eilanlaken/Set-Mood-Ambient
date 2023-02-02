import { View, StyleSheet, TouchableOpacity,Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

// TODO: change layout to a signle toggle button
const Navigation = ({setDisplay}) => {

    return (
        <View style={styles.navigation}>
            <TouchableOpacity
                style={styles.touchable}
                activeOpacity={0.9}
                onPress={() => setDisplay('create')}>
                <View style={styles.btn}>
                    <Text style={{color: '#eee'}}>Create</Text>
                    <Icon style={{paddingLeft: 8}} name='plus' size={20} color='#eee' />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchable}
                activeOpacity={0.9}
                onPress={() => setDisplay('play')}>
                <View style={styles.btn}>
                    <Text style={{color: '#eee'}}>Play</Text>
                    <Icon style={{paddingLeft: 8}} name='play' size={18} color='#eee' />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navigation: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'row',
        padding: 2,
        paddingRight: 10,
        margin: 10,
        zIndex: 100,
        //backgroundColor: 'black' // for debugging
    },
    touchable: {
        padding: 3
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: '#fff',
        backgroundColor: '#728bd4',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 4
    }
});

export default Navigation;