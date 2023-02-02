import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const CreateAmbientItem = () => {
    const [name, setName] = useState('track_01');
    
    return (
        <View style={styles.create}>
            {/* Header: TextInput name, Button save() */}
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    onChangeText={() => {}}
                    value={0}
                    placeholder="name"
                />
                <TouchableHighlight
                    style={styles.touchable}
                    activeOpacity={0.9}
                        underlayColor="#ddd"
                    onPress={() => alert('Pressed!')}>
                    <View style={styles.btn}>
                        <Text style={{color: '#eee'}}>Save</Text>
                        <Icon style={{paddingLeft: 8}} name='save' size={18} color='#eee' />
                    </View>
                </TouchableHighlight>
            </View>

            {/* Location */}
            <View>
                
            </View>

            {/* Weather */}
            <View>

            </View>

            {/* environment */}
            <View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    create: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 20,
        borderRadius: 20,
    },
    header: {
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#519ac2',
        borderRadius: 5,
    },
    input: {
        height: 40,
        width: 180,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#fff'
    },
    touchable: {
        padding: 10
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
    },

});

export default CreateAmbientItem;