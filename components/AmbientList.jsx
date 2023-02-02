import { View, StyleSheet, Text, FlatList } from "react-native";
import AmbientItem from "./AmbientItem";

const AmbientList = ({items}) => {

    return (
        <View style={styles.list}>
            <Text style={{color: '#eee', paddingBottom: 5, marginBottom: 6, fontSize: 20, alignSelf: 'center'}}>Your Collection</Text>
            <FlatList
                data={items}
                renderItem={({item}) => <AmbientItem name={item.name} soundBundle={item.soundBundle} />}
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
        justifyContent: 'space-around',     
        width: '90%',
        maxHeight: '80%',
        minHeight: '85%',
        padding: 10,
        marginTop: 10,
        marginBottom: 50,
        marginHorizontal: 20,
    }
});

export default AmbientList;