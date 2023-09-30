import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        fontFamily: 'Inter',
    },
    panel: {
        flexDirection: 'row',
        marginTop: 32,
        marginBottom: 20
    },
    panelItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        borderColor: 'blue'
    },
    panelText: {
        fontWeight: 'bold',
        fontSize: 14,
        paddingRight: 8
    },
    panelCounter: {
        backgroundColor: '#333333',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10
    },
    panelCounterText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#D9D9D9'

    }
})