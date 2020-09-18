import React, { memo, useCallback } from 'react';
import './navbar.scss';
import { NavLink, Switch, Route, useParams } from 'react-router-dom';
import DataServices from '../service'



const NavBar = () => {
    let dataMenu = new DataServices();
    let menuList = dataMenu.getMenuList();
    let memoGetSubmenu = useCallback(dataMenu.getSubmenu, []);

    return (
        <nav>
            <FirstLevelNavBar listData={menuList} />
            <Switch>
                <Route path="/:aciveMenuName">
                    <SecondLevelNavBar getSubmenu={memoGetSubmenu} />
                </Route>
            </Switch>
        </nav>
    )
}



const FirstLevelNavBar = memo(({ listData }) => {
    return (
        <div className='navbar__first-level'>
            <div className='navbar__first-level-menu'>
                {!!listData.length &&
                    listData.map((item) => (
                        <LinkNavBar
                            key={item._id}
                            href={item.name}
                            title={item.label}
                            Icon={item.icon}
                        />
                    ))
                }
            </div>
        </div>
    )
});



const SecondLevelNavBar = memo(({ getSubmenu }) => {
    let { aciveMenuName } = useParams();
    let listSubmenu = getSubmenu(aciveMenuName);
    return (
        <>
            {!!listSubmenu.length &&
                <div className='navbar__second-level'>
                    <div className='navbar__second-level-menu'>
                        {listSubmenu.map((item) => (
                            <LinkNavBar
                                key={item._id}
                                title={item.label}
                                Icon={item.icon}
                            />
                        ))}
                    </div>
                </div>
            }
        </>
    )
});



export const LinkNavBar = memo(({ href = '/', title = '', Icon, styles = 'navbar__first-level-link' }) => {
    return (
        <NavLink to={href} className={styles}>
            {Icon &&
                <Icon className='link__icon' />
            }
            <p className='link__title'>
                {title}
            </p>
        </NavLink >
    )
});



NavBar.propTypes = {};



export default NavBar
