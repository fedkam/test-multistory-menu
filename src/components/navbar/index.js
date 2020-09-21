import React, { memo, useCallback } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import DataServices from '../service';
import { createUseStyles } from 'react-jss';
import style from './style';
import { LinkItemMenu } from './elements-navbar/link';
import { DropDownItemMenu } from './elements-navbar/drop-down';



const useStyles_FirstLevelNavBar = createUseStyles(style.firstLevel);
const useStyles_SecondLevelNavBar = createUseStyles(style.seconsLevel);




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
    let { wrapper, menu, itemMenu, active } = useStyles_FirstLevelNavBar();
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
                            css={{ itemMenu: itemMenu, active: active }}
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
    let { wrapper, menu, itemMenu } = useStyles_SecondLevelNavBar();
    return (
        <>
            {!!listSubmenu.length &&
                <div className={wrapper}>
                    <div className={menu}>
                        {listSubmenu.map((item) => (
                            <DropDownItemMenu
                                key={item._id}
                                title={item.label}
                                IconTitle={item.icon}
                                css={{ itemMenu: itemMenu }}
                            />
                        ))}
                    </div>
                </div>
            }
        </>
    )
});



NavBar.propTypes = {};



export default NavBar
