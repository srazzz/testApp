import { useState, useEffect } from 'react'
import { Text, StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import theme from '../theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import styles from '../styles/UserProfile';

const UserProfile = ({ navigation, route }) => {
    const [post, setPost] = useState(route.params.post)
    const [userDetails, setUserDetails] = useState(null)
    const [showLoader, setShowLoader] = useState(true)

    // get user details based on id
    const getUserDetails = async () => {
        try {
            const url = `https://jsonplaceholder.typicode.com/users/${post.userId}`
            const response = await fetch(url)
            const data = await response.json()
            if (data !== null || data != {}) {
                setUserDetails(data)
            } else {
                Alert.alert("something happened.Please ty again later!!")
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
        <View style={styles.container}>
            {
                showLoader &&
                <View style={styles.loader}>
                    <ActivityIndicator color={theme.colors.secondary} size="large" />
                </View>
            }
            <View style={styles.screenHeader}>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={24}
                    color={theme.colors.primaryText}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.screenName}>Profile</Text>
                <Text style={[styles.screenName, { color: theme.colors.card }]}>fk</Text>
            </View>

            {userDetails &&
                <ScrollView style={styles.contentContainer}>
                    <View>
                        <View style={[styles.profilePicture, { backgroundColor: post?.profileColor }]}>
                            <Text style={styles.userProfileChar}>{userDetails?.username[0]}
                            </Text>
                        </View>
                        <Text style={styles.BoldText}>{userDetails.username}</Text>
                        <Text style={styles.lightText}>{userDetails.email}</Text>
                    </View>
                    <View style={styles.userDetails}>
                        <View style={styles.userDetail}>
                            <MaterialIcons
                                name="person-outline"
                                color={theme.colors.primaryText}
                                size={24}
                                style={styles.icon}
                            />
                            <Text style={styles.value}>{userDetails.name} </Text>
                        </View>
                        <View style={styles.userDetail}>
                            <MaterialCommunityIcons
                                name="office-building-outline"
                                color={theme.colors.primaryText}
                                size={24}
                                style={styles.icon}
                            />
                            <Text style={styles.value}>{userDetails.company.name} </Text>
                        </View>
                        <View style={styles.userDetail}>
                            <MaterialCommunityIcons
                                name="web"
                                color={theme.colors.primaryText}
                                size={24}
                                style={styles.icon}
                            />
                            <Text style={styles.value}>{userDetails.website} </Text>
                        </View>

                        <View style={styles.userDetail}>
                            <EvilIcons
                                name="location"
                                color={theme.colors.primaryText}
                                size={24}
                                style={styles.icon}
                            />
                            <Text style={styles.value}>{userDetails.address.street || ""} ,{userDetails.address.suite || ""},{userDetails.address.city || ""} </Text>
                        </View>

                        <View style={styles.userDetail}>
                            <MaterialCommunityIcons
                                name="phone-outline"
                                color={theme.colors.primaryText}
                                size={24}
                                style={styles.icon}
                            />
                            <Text style={styles.value}>{userDetails.phone} </Text>
                        </View>
                    </View>
                </ScrollView>
            }
        </View>
    )
}

export default UserProfile
