import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import style from '../style';
import { ReactComponent as IconHamburher } from '../../../access/icon/hamburher.svg';
import { NavLink } from 'react-router-dom';
import { TitleItemMenu } from './item';



const useStyles_HamburherButton = createUseStyles(style.hamburgerButton);



export const HamburherButton = ({ hamburgerList }) => {
    const { wrapper, button, menuWrapper, itemMenu, active } = useStyles_HamburherButton();
    const [isOpenHamburger, setIsOpenHamburger] = useState(false);
    return (
        <div className={wrapper}>
            <div
                className={button}
                onClick={() => setIsOpenHamburger(!isOpenHamburger)}
            >
                <IconHamburher />
            </div>

            {isOpenHamburger &&
                <div className={menuWrapper}>
                    {hamburgerList.map((item) => (
                        <NavLink
                            key={item._id}
                            to={`/${item.name}`}
                            className={itemMenu}
                            activeClassName={active}
                            onClick={() => setIsOpenHamburger(false)}
                        >
                            <TitleItemMenu
                                IconTitle={item.icon}
                                title={item.label}
                            />
                        </NavLink>
                    ))}
                </div>
            }
        </div>
    )
}
