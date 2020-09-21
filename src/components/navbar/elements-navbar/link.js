import React from 'react';
import { NavLink } from 'react-router-dom';
import { TitleItemMenu } from './item';



export const LinkItemMenu = ({ href = '#', title = '', IconTitle, css = {} }) => {
    const { itemMenu, active } = css;
    return (
        <NavLink
            to={href}
            className={itemMenu}
            activeClassName={active}
            exact
        >
            <TitleItemMenu
                IconTitle={IconTitle}
                title={title}
            />
        </NavLink>
    )
}