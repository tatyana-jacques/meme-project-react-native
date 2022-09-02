import { SafeAreaView, Text, Image, StatusBar, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react"

export const API = "https://f6f6-2804-d57-5529-9b00-11f1-ee80-4a3f-cce2.ngrok.io"

export default function List({navigation}) {
    const [memes, setMemes] = useState([])

    function getList() {

        fetch(API + "/memes")
            .then(async (response) => {
                const data = await response.json()
                setMemes(data)
            })
            .catch(() => alert("Não foi possível carregar os memes"))

    }

    function exportMeme (meme){
        navigation.navigate (
            "Details",
            {meme: meme}
        )

    }



    useEffect (() => {
        getList()
    }, [])


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ScrollView>
                <Text style = {styles.title}>Meus memes</Text>

                <View style = {styles.memesView}>

                {  
                    memes.map((meme) => (
                        <TouchableOpacity key = {meme.id} onPress = {()=> exportMeme(meme)}>
                            <Image style = {styles.image} source = {{uri: meme.url}}/>
                        </TouchableOpacity>
                    ))
                }

                </View>


            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fec89a",
    },
    title: {
        fontSize: 30,
        color: "#3d405b",
        fontWeight: "bold",
        alignSelf: "center",
        backgroundColor: "#81b29a",
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
    memesView:
    {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 10,

    }, 
    
    
    image: {
        width: 95,
        height: 95,
        margin: 5,
        borderRadius: 10,


    },
    
   


})