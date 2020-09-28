import React, { useState } from 'react';
import { ReactComponent as IconHoverDD } from '../../../access/icon/arrow-hoverDD.svg';
import { createUseStyles } from 'react-jss';
import style from '../style';
import { array } from 'prop-types';
import { NavLink } from 'react-router-dom';


const useStyles_DropdownSubmenu = createUseStyles(style.dropdownSubmenu);



const DropDownItemSubmenu = ({ item, currentUrl }) => {
    const { menuItemWrapper, menuItem, hoverMenuItem, listLinks } = useStyles_DropdownSubmenu();
    const [isHover, setIsHover] = useState(false);
    const headerStyle = `${menuItem} ${isHover ? hoverMenuItem : ''}`;
    return (
        <>
            <div
                className={menuItemWrapper}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <HeaderDD
                    label={item.label}
                    css={{ headerStyle: headerStyle }}
                />
                {true &&
                    <ListLinksDD
                        currentUrl={currentUrl}
                        links={item.subLink}
                        css={{ listLinks: listLinks }}
                    />
                }
            </div>
        </>
    )
}



const HeaderDD = ({ label = '', css = {} }) => (
    <div className={css.headerStyle}>
        <p>{label}</p>
        <div>
            <IconHoverDD />
        </div>
    </div>
);



const ListLinksDD = ({ links, currentUrl, css = {} }) => (
    Array.isArray(links) &&
    <div className={css.listLinks}>
        {links.map((item, index) => (
            <NavLink
                key={index}
                to={`${currentUrl}/${item.url}`}
                className={css.menuItem}
                activeClassName={css.activeMenuItem}
                exact
            >
                <p>{item.label}</p>
            </NavLink>
        ))}
    </div>
)



export default DropDownItemSubmenu;
