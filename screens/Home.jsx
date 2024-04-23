import { useState, useEffect } from 'react'
import { Text, TouchableOpacity, Alert, View, StyleSheet, ScrollView } from 'react-native'
import theme from "../theme"

const Home = ({ navigation }) => {
    const [posts, setPosts] = useState(null)

    const getRandomProfileColor = () => {
        const colors = ["#4cc5e1", "#b5d45b", "#eee30b"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const getPost = async () => {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => {
                    if (json.length) {
                        json.forEach(element => {
                            element.profileColor = getRandomProfileColor()
                        });
                        setPosts(json)
                    }
                });
        } catch (err) {
            Alert.alert(err)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <>
            <View style={styles.screenHeader}>
                <Text style={styles.screenName}>Home</Text>
            </View>
            <ScrollView style={styles.container}>

                {posts?.length ? posts.map((post) => {
                    return (
                        <TouchableOpacity key={post.id} onPress={() => navigation.navigate('Post', { post: post })}>
                            <View style={styles.postContainer}>
                                <View style={styles.postHeader}>
                                    <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={[styles.userProfile, { backgroundColor: post.profileColor }]}>
                                        <Text style={styles.userProfileChar}>{post.userId}</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.userName}>userId: {post.userId}</Text>
                                </View>
                                <Text style={styles.postTitle}>{post.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
                    : null}
            </ScrollView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        padding: 8
    },
    screenHeader: {
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        flexDirection: "row",
        backgroundColor: theme.colors.background,
        borderBottomWidth: 0.5,
        borderColor: theme.colors.border
    },
    screenName: {
        fontSize: theme.fontSizes.extraLarge,
        color: theme.colors.primaryText,
        fontWeight: '500'
    },
    postContainer: {
        backgroundColor: theme.colors.card,
        marginBottom: 16,
        borderRadius: 8,
        padding: 8,
        elevation: 4
    },
    postHeader: {
        flex: 1,
        flexDirection: "row",
    },
    userProfile: {
        height: 30,
        width: 30,
        marginRight: 8,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
        marginBottom: 4
    },
    postTitle: {
        color: theme.colors.secondaryText,
        fontWeight: '500',
        fontSize: theme.fontSizes.small
    },
    userProfileChar: {
        color: theme.colors.textPrimary,
        fontWeight: '500'
    },
    userName: {
        fontSize: theme.fontSizes.medium,
        fontWeight: "500",
        color: theme.colors.primaryText
    }
})