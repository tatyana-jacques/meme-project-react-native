import {SafeAreaView, Text, Image, StatusBar, StyleSheet, View} from "react-native"
import {format, parseISO} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"


export default function Details ({route}){
    const {meme} = route.params

   
        const date = format (new Date(meme.date * 1000), "dd 'de' MMMM  'de' yyyy", {locale: ptBR})


    return (
    
    <SafeAreaView style = {styles.container}>
        <StatusBar/>
        <Text style = {styles.likes}>
            {meme.likes} curtidas
        </Text>
        <Image style = {styles.image} source = {{uri: meme.url}}/>
        <View style = {styles.text}>
        <Text style = {styles.ltText}>
            Autor: {meme.author} 
        </Text>
        <Text style = {styles.ltText}>
            Data de publicação: {date}
        </Text>
        <Text style = {styles.ltText}>
            {meme.sharing} compartilhamentos
        </Text>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical:20,
        backgroundColor: "#fec89a",
    },

    likes: {
        fontSize: 24,
        margin: 10,
        color: "#3d405b",


    },
    image: {
        width: "85%",
        height: "65%",
        borderRadius: 15,
    },

    ltText: {
        fontSize: 16,
        margin: 5,
        alignSelf: "center",
        color: "#3d405b",

    },
    text: {
        width: "100%",
        height: "20%",
        justifyContent: "center",
        

    }

})