import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        fontFamily: 'Inter'
    },
    container: {
        width: '100%',
        height: 64,
        marginBottom: 8,
        backgroundColor: '#262626',
        padding: 12,
        border: 1,
        borderColor: '#808080',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    checkerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 14,
        color: '#F2F2F2'
    },
    trashContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    trash: {
        height: 36,
        width: 36
    }
})