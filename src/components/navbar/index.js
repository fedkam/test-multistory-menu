import React, { memo, useCallback } from 'react';
import './navbar.scss';
import { NavLink, Switch, Route, useParams } from 'react-router-dom';
import DataServices from '../service';
import { createUseStyles } from 'react-jss';
import style from './style'



const useStyles_FirstLevelNavBar = createUseStyles(style.firstLevel);
const useStyles_SecondLevelNavBar = createUseStyles(style.seconsLevel);
//const useStyles_FirstLevelNavBar = createUseStyles(style.firstLevel);


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
    let { wrapper, menu } = useStyles_FirstLevelNavBar();
    return (
        <div className={wrapper}>
            <div className={menu}>
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
    let { wrapper, menu } = useStyles_SecondLevelNavBar();
    return (
        <>
            {!!listSubmenu.length &&
                <div className={wrapper}>
                    <div className={menu}>
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
