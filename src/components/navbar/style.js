import globalStyle from '../styles-constant'



const getMenuStyle = () => (
    {
        width: `100%`,
        display: `flex`,
        justifyContent: `left`, //избыточно
        alignItems: `center`, //избыточно
        minWidth: 320,
        maxWidth: 1080,
        height: 69,
        margin: `0 auto`,
        userSelect: `none`
    }
)

const getItemMenuStyle = ({ width, colorVerticalDevider, color }) => ({
    display: `flex`,
    alignItems: `center`,
    borderLeft: `1px solid ${colorVerticalDevider || 'grey'}`,
    width: width || 197,
    height: `100%`,
    padding: `0 13px`,
    color: color || globalStyle.colors.baseColorText,
})

const getSvgStyle = ({ color }) => (
    {
        '& svg': {
            '& .stroke path': { stroke: color },
            '& .fill path': { fill: color }
        }
    }
)



const firstLevel = {
    wrapper: { backgroundColor: globalStyle.colors.colorWhite },
    menu: getMenuStyle(),
    itemMenu: {
        ...getItemMenuStyle({
            colorVerticalDevider: globalStyle.colors.menuFirstVerticalDivider
        }),
        lineHeight: `16px`,
    },
    active: {
        color: globalStyle.colors.colorWhite,
        backgroundColor: globalStyle.colors.colorBlue,
        ...getSvgStyle({ color: globalStyle.colors.colorWhite })
    }
}



const seconsLevel = {
    wrapper: { backgroundColor: globalStyle.colors.colorBlue },
    menu: getMenuStyle(),
    itemMenu: {
        ...getItemMenuStyle({
            width: 176,
            colorVerticalDevider: globalStyle.colors.menuSecondVerticalDivider,
            color: globalStyle.colors.colorWhite
        }),
        textTransform: `uppercase`,
        fontSize: 12,
        lineHeight: `15px`,
        cursor: `pointer`
    },
    active: {
        color: globalStyle.colors.colorBlue,
        backgroundColor: globalStyle.colors.colorWhite,
        ...getSvgStyle({ color: globalStyle.colors.colorBlue })
    }
}



const itemMenu = {
    iconLogo: {
        marginRight: 12
    },
    title: {},
    iconOpenDropDown: {}
}



export default {
    firstLevel,
    seconsLevel,
    itemMenu
}