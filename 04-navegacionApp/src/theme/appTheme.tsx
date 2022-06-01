import { StyleSheet } from "react-native";

export const Colores = {
    primary: 'green'
}


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        marginTop:10
    },
    botonGrandeTexto: {
       color: 'white',
       fontSize: 18,
       fontWeight: 'bold'
    },
    avatarContainer:{
        alignItems: "center"
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer : {
        marginVertical: 30,
        marginHorizontal: 50,
        alignItems: "center"
    },
    menuText: {
        fontSize: 20
    },
    menu: {
        marginVertical: 10,
        flexDirection: "row"
    }
});