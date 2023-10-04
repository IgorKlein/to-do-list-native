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
        justifyContent: "space-evenly"
    },
    checkerContainer: {
        flex: 0.12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 0.76,
        justifyContent: 'center',
        alignContent: 'flex-start'
    },
    text: {
        fontSize: 14,
        color: '#F2F2F2'
    },
    trashContainer: {
        flex: 0.12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteButton: {
        width: '100%',
        alignItems: 'center'
    },
    trash: {
        height: 36,
        width: 36,
        borderWidth: 3
    }
})