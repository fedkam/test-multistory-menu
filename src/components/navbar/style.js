import globalStyle from '../styles-constant'



const getMenuSetings = () => (
    {
        width: `100%`,
        display: `flex`,
        justifyContent: `left`, //избыточно
        alignItems: `center`, //избыточно
        minWidth: `320px`,
        maxWidth: `1080px`,
        height: `69px`,
        margin: `0 auto`
    }
)



const firstLevel = {
    wrapper: { backgroundColor: globalStyle.colors.backgroundColorWhite },
    menu: getMenuSetings(),
}



const seconsLevel = {
    wrapper: { backgroundColor: globalStyle.colors.backgroundColorBlue },
    menu: getMenuSetings(),
}




export default {
    firstLevel,
    seconsLevel
}