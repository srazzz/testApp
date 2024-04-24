import { StyleSheet } from 'react-native'
import theme from '../theme'

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
        backgroundColor: theme.colors.card,
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
        padding: 16,
        alignSelf: 'center',
    },
    profilePicture: {
        height: 70,
        width: 70,
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
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: theme.colors.border,
        width: '100%'
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
        marginRight: 8
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