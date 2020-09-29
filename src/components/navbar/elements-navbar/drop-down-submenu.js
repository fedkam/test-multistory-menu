import React, { useCallback, useState } from 'react';
import { ReactComponent as IconHoverDD } from '../../../access/icon/arrow-hoverDD.svg';
import { createUseStyles } from 'react-jss';
import style from '../style';
import { array } from 'prop-types';
import { NavLink } from 'react-router-dom';


const useStyles_DropdownSubmenu = createUseStyles(style.dropdownSubmenu);



const DropDownSubmenu = ({ dropdownList, currentUrl }) => {
    const { menuItemWrapper, menuItem, hoverMenuItem, listLinks } = useStyles_DropdownSubmenu();
    const [isHover, setIsHover] = useState();
    const memoSetIsHover = useCallback(setIsHover, []);

    return (
        <div onMouseLeave={() => setIsHover()}>
            <div>
                {dropdownList.map((item, index) => (
                    <HeaderDD
                        key={index}
                        id={index}
                        label={item.label}
                        isHover={isHover}
                        setIsHover={memoSetIsHover}
                        css={{ menuItem: menuItem, hoverMenuItem: hoverMenuItem }}
                    />
                ))}
            </div>
            <div>

            </div>
        </div>
        // <>
        //     <div
        //         className={menuItemWrapper}
        //         onMouseEnter={() => setIsHover(true)}
        //         onMouseLeave={() => setIsHover(false)}
        //     >
        //         <HeaderDD
        //             label={item.label}
        //             css={{ headerStyle: headerStyle }}
        //         />
        //         {true &&
        //             <ListLinksDD
        //                 currentUrl={currentUrl}
        //                 links={item.subLink}
        //                 css={{ listLinks: listLinks }}
        //             />
        //         }
        //     </div>
        // </>
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



export default DropDownSubmenu;
