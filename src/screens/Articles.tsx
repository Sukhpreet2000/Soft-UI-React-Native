import {Text, View, StyleSheet} from "react-native";

export default function Article () {
    return (
        <View style= {styles.container}>
            <Text>All atricles will appear here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});