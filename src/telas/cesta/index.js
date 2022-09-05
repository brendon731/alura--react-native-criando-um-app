import react from "react"
import {ScrollView, Text, Image, StyleSheet, Dimensions, View, TouchableOpacity, FlatList} from "react-native"
import mock from "../mocks/cesta"

import topo from "../../../assets/topo.png"
import Batata from "../../../assets/frutas/Batata.png"
import Abobora from "../../../assets/frutas/Abóbora.png"
import Pepino from "../../../assets/frutas/Pepino.png"
import Tomate from "../../../assets/frutas/Tomate.png"
import Item from "../componentes/item"

const width = Dimensions.get("screen").width
const item = {
    frutas:[
    {
        id:0,
        nome:"Tomate",
        foto:Tomate
    },
    {
        id:1,
        nome:"Batata",
        foto:Batata
    },
    {
        id:2,
        nome:"Pepino",
        foto:Pepino
    },
    {
        id:3,
        nome:"Abóbora",
        foto:Abobora
    }

]
}

export default function Cesta(){
   
    return (
    <>
        
            <FlatList
                data={item.frutas}
                renderItem={Item}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={()=>(
                    <>
                        <Image source={topo} style={styles.image}/>
                        <Text style={styles.titulo}>{mock.topo.titulo}</Text>

                        <View style={styles.cesta}>
                            <Text style={styles.nome}>{ mock.detalhes.nome }</Text>

                            <View style={ styles.fazendaContainer}>
                                <Image source={ mock.detalhes.logo } style={styles.logoFazenda}/>
                                <Text style={styles.nomeFazenda}>{mock.detalhes.nomeFazenda}</Text>
                            </View>

                            <Text style={styles.descricao}>{mock.detalhes.descricao}</Text>
                            <Text style={styles.preco}>{mock.detalhes.preco}</Text>
                            <TouchableOpacity style={styles.botao}>
                                <Text style={styles.textoBotao}>{ mock.detalhes.botao}</Text>
                            </TouchableOpacity>

                            <Text style={styles.tituloListaDeProdutos}>Itens da cesta</Text>
                        </View>
                    </>
                )}
            />


    </>
    )
}

const styles = StyleSheet.create({
    titulo:{
        color:"white",
        position:"absolute",
        width:"100%",
        textAlign:"center",
        fontSize:16,
        lineHeight:26,
        padding:16,
        fontWeight:"bold"
    },
    image:{
        width:"100%",
        height:578/768 * width
    },
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16
    },
    nome:{
        fontSize:24,
        lineHeight:42,
        color:"#464646",
        fontFamily:"MontserratBold"
    },
    fazendaContainer:{
        flexDirection:"row",
        paddingVertical:12
    },
    logoFazenda:{
        height:32,
        width:32
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
        fontFamily:"MontserratRegular"

    },
    descricao:{
        color:"#a3a3a3",
        fontSize:16,
        lineHeight:26,
    },
    preco:{
        color:"#2a9f85",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8,
    },
    botao:{
        backgroundColor:"#2a9f85",
        paddingVertical:16,
        marginTop:16,
        borderRadius:6
    },
    textoBotao:{
        color:"white",
        textAlign:"center",
        fontSize:16,
        fontFamily:"MontserratBold"
    },
    tituloListaDeProdutos:{
        fontSize:24,
        fontFamily:"MontserratBold",
        marginVertical:16,
        marginTop:36,
        lineHeight:24

    }
})
