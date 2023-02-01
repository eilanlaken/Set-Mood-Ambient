import { View, StyleSheet, Text } from "react-native";

const AmbientList = () => {

    return (
        <View style={styles.list}>
            <Text>Ambient List Component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 20,
        margin: 20,
        backgroundColor: 'purple', // debugging
    }
});

export default AmbientList;