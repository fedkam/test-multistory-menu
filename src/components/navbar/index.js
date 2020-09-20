import React, { memo, useCallback } from 'react';
import { NavLink, Switch, Route, useParams } from 'react-router-dom';
import DataServices from '../service';
import { createUseStyles } from 'react-jss';
import style from './style';
import { ReactComponent as IconOpenDD } from '../../access/icon/arrow-openDD.svg';
import { ReactComponent as IconCloseDD } from '../../access/icon/arrow-closeDD.svg';


const useStyles_FirstLevelNavBar = createUseStyles(style.firstLevel);
const useStyles_SecondLevelNavBar = createUseStyles(style.seconsLevel);
const useStyles_Link = createUseStyles(style.link);


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
                        <LinkItemMenu
                            key={item._id}
                            href={item.name}
                            title={item.label}
                            IconTitle={item.icon}
                            firstLevel
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
                            <LinkItemMenu
                                key={item._id}
                                title={item.label}
                                IconTitle={item.icon}
                                secondLevel
                                isOpenDropDown={false}
                            />
                        ))}
                    </div>
                </div>
            }
        </>
    )
});



export const LinkNavBar = memo(({ href = '#', title = '', IconTitle, isOpenDropDown = false, firstLevel = false, secondLevel = false, styles = 'navbar__first-level-link' }) => {
    let styleLevelLink = {};
    const link = useStyles_Link();
    if (firstLevel) {
        styleLevelLink = useStyles_FirstLevelNavBar();
    } else if (secondLevel) {
        styleLevelLink = useStyles_SecondLevelNavBar();
    }

    return (
        <NavLink
            to={href}
            className={styleLevelLink.link}
            activeClassName={styleLevelLink.active}
            exact
        >
            {IconTitle &&
                <div className={link.iconLogo} >
                    <IconTitle />
                </div>
            }
            <p className={link.title}>
                {title}
            </p>
            {secondLevel &&
                <div className={link.iconOpenDropDown}>
                    {isOpenDropDown ? <IconOpenDD /> : <IconCloseDD />}
                </div>
            }
        </NavLink >
    )
});



const TitleItemMenu = ({ IconTitle, title, style }) => {
    return (
        <>
            {IconTitle &&
                <div className={style.iconLogo} >
                    <IconTitle />
                </div>
            }
            <p className={style.title}>
                {title}
            </p>
        </>
    )
}



const LinkItemMenu = ({ href = '#', title = '', IconTitle }) => {
    const { link, active } = useStyles_FirstLevelNavBar();
    const itemStyle = useStyles_Link();
    return (
        <NavLink
            to={href}
            className={link}
            activeClassName={active}
            exact
        >
            <TitleItemMenu
                IconTitle={IconTitle}
                title={title}
                style={itemStyle}
            />
        </NavLink>
    )
}


const DropDownItemMenu = ({ title = '', IconTitle }) => {
    return (
        <div>
            <TitleItemMenu
                IconTitle={IconTitle}
                title={title}
                style={itemStyle}
            />
        </div>
    )
}



NavBar.propTypes = {};



export default NavBar
