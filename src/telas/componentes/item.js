import react from "react"
import { StyleSheet, Text, View, Image } from "react-native"

export default function Item({ item:{nome, foto}}){
    return(
        <View style={styles.itemLista}>
            <Image source={ foto } style={styles.itemListaImage}/>
            <Text style={styles.itemListaNome}>{ nome}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    
    itemLista:{
        flexDirection:"row",
        paddingVertical:16,
        borderBottomWidth:1,
        marginLeft:16,
        borderColor:"#ececec"
    },
    itemListaImage:{
        height:46,
        width:46,
        borderRadius:5
    },
    itemListaNome:{
        textAlignVertical:"center",
        marginHorizontal:8,
    }
})