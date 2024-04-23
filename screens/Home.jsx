import { useState, useEffect } from 'react'
import { Text, TouchableOpacity, Alert, View, ScrollView, TextInput, TouchableWithoutFeedback, Image, ActivityIndicator } from 'react-native'
import theme from "../theme"
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../styles/Home'

const Home = ({ navigation }) => {
    const [posts, setPosts] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [filteredPosts, setFilteredPosts] = useState(null)
    const [users, setUsers] = useState(null)
    const [showLoader, setShowLoader] = useState(true)

    const getRandomProfileColor = () => {
        const colors = ["#4cc5e1", "#b5d45b", "#eee30b"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    // // apply filter by using username and post title
    // const applySearchFilter = () => {
    //     const updatedFilteredPost = posts?.filter((post) =>
    //         post.title?.toLowerCase().includes(searchText.toLowerCase()) ||
    //         post.userName?.toLowerCase().toString().includes(searchText.toLowerCase())
    //     );
    //     setFilteredPosts(updatedFilteredPost)
    // };

    // Debounced version of applySearchFilter for search optimization
    const debouncedApplySearchFilter = () => {
        console.log(searchText)
        const updatedFilteredPost = posts?.filter((post) =>
            post.title?.toLowerCase().includes(searchText.toLowerCase()) ||
            post.userName?.toLowerCase().toString().includes(searchText.toLowerCase())
        );
        setFilteredPosts(updatedFilteredPost);
    };

    const handleSearchTextChange = (value) => {
        setSearchText(value.toString());
        // instead of searching on searchText change we are calling the applySearch with a delay
        const timeoutId = setTimeout(debouncedApplySearchFilter, 500);
        return () => clearTimeout(timeoutId);
    };

    // modify the data by adding random color for profile background and username
    const modifyData = (posts, users) => {
        const modifiedData = posts?.map(post => {
            const user = users?.find(user => user.id === post.userId);
            return {
                ...post,
                profileColor: getRandomProfileColor(),
                userName: user ? user.username : 'undefined'
            };
        });
        return modifiedData;
    };

    //get user details and posts
    const getUserDetails = async () => {
        try {
            const url = `https://jsonplaceholder.typicode.com/users`
            const response = await fetch(url)
            const users = await response.json()
            if (users.length) {
                setUsers(users)
                try {
                    const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
                    const posts = await responsePosts.json()

                    if (posts.length) {
                        const modifiedJsonData = modifyData(posts, users)
                        setPosts(modifiedJsonData)
                        setFilteredPosts(modifiedJsonData)
                    }
                } catch (err) {
                    Alert.alert(err)
                }
            }
            setShowLoader(false)
        } catch (err) {
            Alert.alert(err)
            setShowLoader(false)
        }
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    return (
        <>

            <View style={styles.screenHeader}>
                <Image src='https://www.vaave.com/media/logo-black.png' style={styles.logo} />
            </View>
            {
                showLoader &&
                <View style={styles.loader}>
                    <ActivityIndicator color={theme.colors.secondary} size="large" />
                </View>
            }
            <ScrollView style={styles.container}>

                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => handleSearchTextChange(value.toString())}
                        value={searchText}
                        placeholder='Search Post'
                        placeholderTextColor={theme.colors.border}
                    />
                    <Ionicons name="search-outline" size={24} color={theme.colors.primaryText} />
                </View>
                {filteredPosts?.length ? filteredPosts.map((post) => {
                    return (
                        <TouchableWithoutFeedback key={post.id} onPress={() => navigation.navigate('Post', { post: post })}>
                            <View style={styles.postContainer}>
                                <TouchableOpacity style={styles.postHeader} onPress={() => navigation.navigate('UserProfile', { post: post })} >
                                    <View style={[styles.userProfile, { backgroundColor: post.profileColor }]}>
                                        <Text style={styles.userProfileChar}>{post.userName[0]}</Text>
                                    </View>
                                    <Text style={styles.userName} ellipsizeMode='tail' numberOfLines={1}>{post.userName}</Text>
                                </TouchableOpacity>
                                <Text style={styles.postTitle}>{post.title}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
                    : null}
            </ScrollView>
        </>
    )
}

export default Home

