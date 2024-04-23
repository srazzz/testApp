import { useState, useEffect } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import theme from '../theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const UserProfile = ({ navigation, route }) => {
    // const { post } = route.params.post || null
    const [post, setPost] = useState(route.params.post)
    const [userDetails, setUserDetails] = useState(null)

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
        } catch (err) {
            Alert.alert(err)
        }
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.screenHeader}>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={24}
                    color={theme.colors.primaryText}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.screenName}>Profile</Text>
                <Text style={[styles.screenName, { color: theme.colors.background }]}>fk</Text>
            </View>

            {userDetails &&
                <ScrollView style={styles.contentContainer}>
                    <View>
                        <View style={[styles.profilePicture, { backgroundColor: post?.profileColor }]}>
                            <Text style={styles.userProfileChar}>{userDetails?.username[0]}
                            </Text>
                        </View>
                        <Text style={styles.BoldText}>{userDetails.name}</Text>
                        <Text style={styles.lightText}>{userDetails.email}</Text>
                    </View>
                    <View style={styles.userDetails}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
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
    contentContainer: {
        flex: 1,
        width: '100%',
        padding: 8,
        alignSelf: 'center'
    },
    profilePicture: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 8,
        paddingTop: 15
    },
    userProfileChar: {
        color: theme.colors.primaryText,
        fontWeight: '500',
        fontSize: theme.fontSizes.extraLarge,
        marginBottom: 16
    },
    BoldText: {
        fontSize: theme.fontSizes.medium,
        color: theme.colors.primaryText,
        fontWeight: '500',
        alignSelf: 'center',
    },
    lightText: {
        fontSize: theme.fontSizes.small,
        color: theme.colors.secondaryText,
        fontWeight: '500',
        alignSelf: 'center',
        marginBottom: 24
    },
    userDetails: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    userDetail: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 8
    },
    key: {
        color: theme.colors.primaryText,
        fontSize: theme.fontSizes.small,
        fontWeight: '500'
    },
    value: {
        color: theme.colors.secondaryText,
        fontSize: theme.fontSizes.small,
        fontWeight: '500'
    },
    icon: {
        marginRight: 16
    }

})