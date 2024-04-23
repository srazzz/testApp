import { StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        marginHorizontal: 16
    },
    screenHeader: {
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        flexDirection: "row",
        backgroundColor: theme.colors.card,
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
        marginBottom: 8,
        borderRadius: 4,
        padding: 8,
        elevation: 2,
    },
    postHeader: {
        flex: 1,
        flexDirection: "row",
        width: '90%'
    },
    userProfile: {
        height: 30,
        width: 30,
        marginRight: 8,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
        marginBottom: 4,
    },
    postTitle: {
        color: theme.colors.secondaryText,
        fontWeight: '400',
        fontSize: theme.fontSizes.small,
    },
    userProfileChar: {
        color: theme.colors.primaryText,
        fontWeight: '500'
    },
    userName: {
        fontSize: theme.fontSizes.medium,
        fontWeight: "500",
        color: theme.colors.primaryText
    },
    searchBar: {
        height: 50,
        elevation: 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: theme.colors.card,
        marginVertical: 8,
        borderRadius: 4,
        paddingHorizontal: 16
    },
    input: {
        fontSize: theme.fontSizes.medium,
        width: '90%',
        color: theme.colors.primaryText
    },
    logo: {
        height: 35,
        width: 100,
        objectFit: 'fill'
    },
    loader: {
        position: 'absolute',
        zIndex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
})

export default styles