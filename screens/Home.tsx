import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
            <Text >Home</Text>
        </TouchableOpacity>
    )
}

export default Home