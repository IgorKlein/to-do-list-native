import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        height: 173,
        alignItems: "center",
        backgroundColor: '#0D0D0D',
        padding: 24
    },
    logo: {
        marginTop: 56,
        height: 32,
        width: 110,
    },
    form: {
        marginTop: -50,
        width: '100%',
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        height: 52,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderRadius: 6,
        marginRight: 4,
        padding: 16,
        color: '#F2F2F2',
        fontSize: 16
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        borderColor: 'black',
        color: 'FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: "center",
        padding: 24
    }
})