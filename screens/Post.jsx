import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from "../theme";
import { ScrollView } from "react-native-gesture-handler";

const Post = ({ navigation, route }) => {
    const [post, setPost] = useState(route.params.post)
    const [comments, setComments] = useState(null)
    const [expandedComment, setExpandedComment] = useState([]);
    const getComments = async () => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
            const response = await fetch(url)
            const data = await response.json()
            if (data.length) {
                setComments(data)
            }
        } catch (err) {
            Alert.alert(err)
        }
    }
    useEffect(() => {
        setPost(post)
        getComments()
    }, [post])



    return (
        <View style={styles.container}>
            <View style={styles.screenHeader}>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={24}
                    color={theme.colors.primaryText}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.screenName}>Post</Text>
                <Text style={[styles.screenName, { color: theme.colors.background }]}>fk</Text>
            </View>
            <ScrollView style={styles.contentContainer}>
                <Text style={styles.postTitle}>Author </Text>

                <TouchableOpacity style={styles.postHeader} onPress={() => navigation.navigate('UserProfile', { post: post })}>
                    <View style={[styles.userProfile, { backgroundColor: post.profileColor }]}>
                        <Text style={styles.userProfileChar}>{post.userName[0]}
                        </Text>
                    </View>
                    <Text style={styles.userName}>{post.userName}</Text>
                </TouchableOpacity>

                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postDescription}>{post.body}</Text>

                <Text style={styles.postTitle}>Comments </Text>
                {
                    comments?.length ?
                        comments.map((comment) => {
                            return (
                                <View style={styles.commentContainer} key={comment.id}>
                                    <Text style={styles.commentSubject}>{comment.name}</Text>
                                    <Text style={styles.commentBody} >
                                        <Text style={styles.commentSubject}>Contact email: </Text>
                                        {comment.email}
                                    </Text>
                                    <Text style={styles.commentBody} numberOfLines={expandedComment.includes(comment.id) ? 0 : 2} ellipsizeMode="tail">{comment.body}</Text>
                                    {expandedComment.includes(comment.id) ?
                                        <Text style={styles.readMore} onPress={() => setExpandedComment(expandedComment.filter(commentId => commentId !== comment.id))}>
                                            Read less
                                        </Text>
                                        :
                                        <Text style={styles.readMore} onPress={() => setExpandedComment([...expandedComment, comment.id])}>Read more...</Text>
                                    }
                                </View>
                            )
                        })
                        : <Text style={styles.noCommentsText}>No comments yet.Be the first to comment.</Text>
                }
                <View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    contentContainer: {
        backgroundColor: theme.colors.background,
        paddingHorizontal: 16,
    },
    screenHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        flexDirection: "row",
        backgroundColor: theme.colors.background,
        marginBottom: 16,
        borderBottomWidth: 0.5,
        borderColor: theme.colors.border,
        paddingHorizontal: 16
    },
    screenName: {
        fontSize: theme.fontSizes.extraLarge,
        color: theme.colors.primaryText,
        fontWeight: '500'
    },
    postHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    userProfile: {
        height: 30,
        width: 30,
        backgroundColor: theme.colors.border,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    },
    userProfileChar: {
        color: theme.colors.textPrimary,
        fontWeight: '500',
        fontSize: theme.fontSizes.large
    },
    userName: {
        fontSize: theme.fontSizes.medium,
        fontWeight: "400",
        color: theme.colors.primaryText
    },
    postTitle: {
        fontSize: theme.fontSizes.medium,
        fontWeight: "500",
        color: theme.colors.primaryText,
        marginVertical: 8
    },
    postDescription: {
        fontSize: theme.fontSizes.small,
        color: theme.colors.secondaryText,
        borderBottomWidth: 0.5,
        borderColor: theme.colors.border,
        paddingBottom: 8
    },
    commentContainer: {
        backgroundColor: 'white',
        marginBottom: 8,
        borderRadius: 8,
        padding: 8,
        elevation: 4,

    },
    commentSubject: {
        fontSize: theme.fontSizes.small,
        fontWeight: "400",
        color: theme.colors.primaryText,
    },
    commentBody: {
        fontSize: theme.fontSizes.small,
        fontWeight: "400",
        color: theme.colors.secondaryText,
        marginBottom: 8
    },
    readMore: {
        textAlign: 'right',
        color: '#005cbf'
    }

})