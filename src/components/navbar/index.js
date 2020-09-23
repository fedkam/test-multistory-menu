import React, { memo, useState, useCallback } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import DataServices from '../service';
import { createUseStyles } from 'react-jss';
import style from './style';
import { Link } from './elements-navbar/link';
import { DropDown } from './elements-navbar/drop-down';



const useStyles_FirstLevelNavBar = createUseStyles(style.firstLevel);
const useStyles_SecondLevelNavBar = createUseStyles(style.seconsLevel);




const NavBar = () => {
    const dataMenu = new DataServices();
    const menuList = dataMenu.getMenuList();
    const memoGetSubmenu = useCallback(dataMenu.getSubmenu, []);

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
                        <Link
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
    let { wrapper, menu } = useStyles_SecondLevelNavBar();
    const [isOpenItemDropDown, setIsOpenItemDropDown] = useState(generateIsOpenDropDownState());

    function generateIsOpenDropDownState() {
        let stateItemsDropDown = {};
        Array.isArray(listSubmenu) && listSubmenu.map((e, i) => {
            stateItemsDropDown[e._id] = false;
        });
        return stateItemsDropDown;
    };

    function handleClickDropDown(itemId) {
        setIsOpenItemDropDown((prevState) => {
            const activeCurrent = prevState[itemId];   // запоминаем состояние
            let newState = generateIsOpenDropDownState(); //сброс всех dropDown
            newState[itemId] = !activeCurrent;
            return newState;
        })
    };

    return (
        <>
            {!!listSubmenu.length &&
                <div className={wrapper}>
                    <div className={menu}>
                        {listSubmenu.map((item) => (
                            <DropDown
                                key={item._id}
                                id={item._id}
                                title={item.label}
                                IconTitle={item.icon}
                                isOpenItemDropDown={isOpenItemDropDown[item._id]}
                                setIsOpenItemDropDown={handleClickDropDown}
                            />
                        ))}
                    </div>
                </div>
            }
        </>
    )
});



export default NavBar
