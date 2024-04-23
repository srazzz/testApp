import { StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    contentContainer: {
        backgroundColor: theme.colors.background,
        padding: 16
    },
    screenHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        flexDirection: "row",
        backgroundColor: theme.colors.card,
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
    },
    userProfile: {
        height: 30,
        width: 30,
        backgroundColor: theme.colors.border,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    userProfileChar: {
        color: theme.colors.primaryText,
        fontWeight: '500',
        fontSize: theme.fontSizes.small
    },
    userName: {
        fontSize: theme.fontSizes.medium,
        fontWeight: "700",
        color: theme.colors.primaryText
    },
    postTitle: {
        fontSize: theme.fontSizes.medium,
        fontWeight: "500",
        color: theme.colors.primaryText,
        marginVertical: 8
    },
    postDescription: {
        fontSize: theme.fontSizes.extraSmall,
        color: theme.colors.secondaryText,
    },
    comments: {
        marginVertical: 16
    },
    commentContainer: {
        marginBottom: 8,
        borderRadius: 8,
        borderBottomWidth: 0.5,
        borderColor: theme.colors.border,
        borderStyle: "dotted"
    },
    commentSubject: {
        fontSize: theme.fontSizes.small,
        fontWeight: "500",
        color: theme.colors.primaryText,
    },
    commentEmail: {
        fontSize: theme.fontSizes.extraSmall,
        fontWeight: "500",
        color: theme.colors.primaryText,
    },
    commentBody: {
        fontSize: theme.fontSizes.extraSmall,
        fontWeight: "400",
        color: theme.colors.secondaryText,
    },
    readMore: {
        textAlign: 'right',
        color: theme.colors.primaryText,
        marginBottom: 8,
        fontWeight: '500',
        fontSize: 12
    }

})

export default styles