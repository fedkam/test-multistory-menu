import globalStyle from '../styles-constant'



const getMenuStyle = () => (
    {
        width: `100%`,
        display: `flex`,
        justifyContent: `left`, //избыточно
        alignItems: `center`, //избыточно
        minWidth: 320,
        maxWidth: 1080,
        height: globalStyle.size.heightMenuLine,
        margin: `0 auto`,
        userSelect: `none`
    }
)

const getItemMenuStyle = ({ width, colorVerticalDevider, color }) => ({
    display: `flex`,
    alignItems: `center`,
    borderLeft: `1px solid ${colorVerticalDevider || 'grey'}`,
    width: width || 213, //не по макету размер (тк радномный размер полей)
    height: `100%`,
    padding: `0 13px`,
    color: color || globalStyle.colors.baseColorText,
    transition: `color .2s, backgroundColor .2s`
})





const firstLevel = {
    wrapper: {
        position: 'relative',
        backgroundColor: globalStyle.colors.colorWhite,
        boxShadow: `0px 1px 8px rgba(0, 0, 0, 0.12)`,
        zIndex: 10
    },
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
        ...globalStyle.functions.getSvgStyle({ color: globalStyle.colors.colorWhite })
    }
}



const seconsLevel = {
    wrapper: {
        position: 'relative',
        backgroundColor: globalStyle.colors.colorBlue,
        zIndex: 5
    },
    menu: getMenuStyle()
}



const itemMenu = {
    iconLogo: {
        marginRight: 12
    },
    title: {},
    iconOpenDropDown: {}
}



const dropdown = {
    dropdownWrapper: {
        position: 'relative',
        height: `100%`
    },
    header: {
        ...getItemMenuStyle({
            width: globalStyle.size.widthItemFirstLevelMenu,
            colorVerticalDevider: globalStyle.colors.menuSecondVerticalDivider,
            color: globalStyle.colors.colorWhite
        }),
        textTransform: `uppercase`,
        fontSize: 12,
        lineHeight: `15px`,
        cursor: `pointer`,
    },
    activeHeader: {
        color: globalStyle.colors.colorBlue,
        backgroundColor: globalStyle.colors.lightGray,
        ...globalStyle.functions.getSvgStyle({ color: globalStyle.colors.colorBlue })
    },
    menuWrapper: {
        position: `absolute`,
        top: globalStyle.size.heightMenuLine + 3
    },
    menu: {
        position: 'relative',
        background: globalStyle.colors.colorWhite,
        borderRadius: 4,
        padding: 16,
        minWidth: globalStyle.size.widthItemFirstLevelMenu,
        '&:before': {
            content: `''`,
            position: `absolute`,
            top: `-7px`,
            left: globalStyle.size.widthItemFirstLevelMenu / 2 - 3,
            borderLeft: `7px solid transparent`,
            borderRight: `7px solid transparent`,
            borderBottom: `7px solid ${globalStyle.colors.colorWhite}`
        }
    },
    menuItem: {
        fontStyle: 400,
        fontSize: 13,
        color: `black`
    },
    menuSubItem: {

    }
};



export default {
    firstLevel,
    seconsLevel,
    itemMenu,
    dropdown
}