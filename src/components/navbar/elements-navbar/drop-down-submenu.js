import React, { useCallback, useState } from 'react';
import { ReactComponent as IconHoverDD } from '../../../access/icon/arrow-hoverDD.svg';
import { createUseStyles } from 'react-jss';
import style from '../style';
import { NavLink } from 'react-router-dom';


const useStyles_DropdownSubmenu = createUseStyles(style.dropdownSubmenu);



const DropDownSubmenu = ({ dropdownList, currentUrl }) => {
    const { menuWrapper, menuItem, hoverMenuItem, listLinks, itemListLink } = useStyles_DropdownSubmenu();
    const [isHover, setIsHover] = useState();
    const memoSetIsHover = useCallback(setIsHover, []);
    const getListLinks = isHover && dropdownList.find((e) => {
        return e._id == isHover;
    })

    return (
        <div
            onMouseLeave={() => setIsHover()}
            className={menuWrapper}
        >
            <div>
                {dropdownList.map((item) => (
                    <HeaderDD
                        key={item._id}
                        id={item._id}
                        label={item.label}
                        isHover={isHover}
                        setIsHover={memoSetIsHover}
                        css={{ menuItem: menuItem, hoverMenuItem: hoverMenuItem }}
                    />
                ))}
            </div>
            <div className={listLinks}>
                {
                    isHover &&
                    <ListLinksDD
                        currentUrl={currentUrl}
                        links={getListLinks.subLink}
                        css={{ itemListLink: itemListLink }}
                    />
                }
            </div>
        </div >
    )
}



const HeaderDD = ({ id, label = '', setIsHover, isHover, css = {} }) => {
    const headerStyle = `${css.menuItem} ${(isHover == id) ? css.hoverMenuItem : ''}`;
    return (
        <div
            className={headerStyle}
            onMouseEnter={() => setIsHover(id + '')}
        >
            <p>{label}</p>
            <div>
                <IconHoverDD />
            </div>
        </div>
    )
};



const ListLinksDD = ({ links, currentUrl, css = {} }) => (
    Array.isArray(links) &&
    links.map((item, index) => (
        <NavLink
            key={index}
            to={`${currentUrl}/${item.url}`}
            className={css.itemListLink}
            //activeClassName={css.activeMenuItem}
            exact
        >
            <p>{item.label}</p>
        </NavLink>
    ))
)



export default DropDownSubmenu;
