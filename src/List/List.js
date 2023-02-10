import { SafeAreaView, Text, Image, StatusBar, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react"

export const API = "https://3fd1-2804-d57-554d-0-35a0-ea75-e056-a6a2.ngrok.io"

export default function List({ navigation }) {
    const [memes, setMemes] = useState([])

    useEffect(() => {
        fetch(API + "/memes")
            .then(async (response) => {
                const data = await response.json()
                setMemes(data)
            })
            .catch(() => alert("Não foi possível carregar os memes"))

    }, [])

    function exportMeme(memeId) {
        navigation.navigate(
            "Details",
            { memeId }
        )
    }


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ScrollView>
                <Text style={styles.title}>Meus memes</Text>

                <View style={styles.memesView}>

                    {
                        memes.map((meme) => (
                            <TouchableOpacity key={meme.id} onPress={() => exportMeme(meme.id)} style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: meme.url }} resizeMode="contain" />
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
        padding: 5,
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

    imageContainer: {
        width: "28%",
        marginHorizontal: "2%"
    },


    image: {
        width: "100%",
        height: 88,
        margin: 5,
        borderRadius: 10,


    },




})