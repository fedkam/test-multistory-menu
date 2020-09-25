import React from 'react';
import { NavLink } from 'react-router-dom';



export const Link = ({ href = '#', title = '', IconTitle, css = {}, children, exact = false }) => {
    const link = css.link;
    const activeLink = css.activeLink;
    return (
        <NavLink
            to={href}
            className={link}
            activeClassName={activeLink}
            exact={exact}
        >
            {children}
        </NavLink>
    )
}