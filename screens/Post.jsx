import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import theme from "../theme";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../styles/Post";

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
                <Text style={[styles.screenName, { color: theme.colors.card }]}>fk</Text>
            </View>
            <ScrollView style={styles.contentContainer}>
                <TouchableOpacity style={styles.postHeader} onPress={() => navigation.navigate('UserProfile', { post: post })}>
                    <View style={[styles.userProfile, { backgroundColor: post.profileColor }]}>
                        <Text style={styles.userProfileChar}>{post.userName[0]}
                        </Text>
                    </View>
                    <Text style={styles.userName}>{post.userName}</Text>
                </TouchableOpacity>

                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postDescription}>{post.body}</Text>

                <View style={styles.comments}>
                    <Text style={styles.postTitle}>Comments </Text>
                    {
                        comments?.length ?
                            comments.map((comment) => {
                                return (
                                    <View style={styles.commentContainer} key={comment.id}>
                                        <Text style={styles.commentSubject}>{comment.name}</Text>
                                        <Text style={styles.commentBody} >
                                            <Text style={styles.commentEmail}>Contact email: </Text>
                                            {comment.email}
                                        </Text>
                                        <Text style={styles.commentBody} numberOfLines={expandedComment.includes(comment.id) ? 0 : 2} ellipsizeMode="tail">{comment.body}</Text>
                                        {expandedComment.includes(comment.id) ?
                                            <Text style={styles.readMore} onPress={() => setExpandedComment(expandedComment.filter(commentId => commentId !== comment.id))}>
                                                Read less
                                            </Text>
                                            :
                                            <Text style={styles.readMore} onPress={() => setExpandedComment([...expandedComment, comment.id])}>Read more</Text>
                                        }
                                    </View>
                                )
                            })
                            : <Text style={styles.noCommentsText}>No comments yet.Be the first to comment.</Text>
                    }
                </View>
                <View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Post

