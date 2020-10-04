import React, { memo, useState, useCallback, useEffect } from 'react';
import { Switch, Route, NavLink, useParams, useLocation } from 'react-router-dom';
import DataServices from '../service';
import { createUseStyles } from 'react-jss';
import style from './style';
import globalStylesConstant from '../styles-constant';
import { DropDownMenu } from './elements-navbar/drop-down-menu';
import { TitleItemMenu } from './elements-navbar/item';
import { HamburherButton } from './elements-navbar/hamburher-button';



const useStyles_FirstLevelNavBar = createUseStyles(style.firstLevel);
const useStyles_SecondLevelNavBar = createUseStyles(style.seconsLevel);



const NavBar = () => {
    const dataMenu = new DataServices();
    const menuList = dataMenu.getMenuList();
    const memoGetSubmenu = useCallback(dataMenu.getSubmenu, []);
    return (
        <nav>
            <FirstLevelMenu listData={menuList} />
            <Switch>
                <Route path="/:aciveMenuName">
                    <SecondLevelMenu getSubmenu={memoGetSubmenu} />
                </Route>
            </Switch>
        </nav>
    )
}



const FirstLevelMenu = memo(({ listData }) => {
    const { wrapper, menu, itemMenu, active } = useStyles_FirstLevelNavBar();
    const [widthMenu, setWidthMenu] = useState(window.innerWidth);
    const location = useLocation();
    const [generatedMenuList, generatedHamburgerList] = generateMenuLists();

    function generateMenuLists() {
        const WIDTH_ITEM_F_M = globalStylesConstant.size.widthItemFirstLevelMenu || 213;
        const possibleAmountItemMenu = Math.floor((widthMenu - 80) / WIDTH_ITEM_F_M) || 1; // max количество вмещаемых на экран пунктов меню
        const urlFirstLevelMenu = location.pathname.split(`/`, 2)[1]; // нужно для поиска в listData индекса массива (активного пункта)
        const indexActiveItemMenu = listData.findIndex((e) => e.name === urlFirstLevelMenu);
        let generatedMenuList = [];
        let generatedHamburgerList = [];
        if (indexActiveItemMenu < possibleAmountItemMenu) {
            // если активный попадает в промежуток возможного количества элеменов(исходя из width)
            generatedMenuList = listData.slice(0, possibleAmountItemMenu);
            generatedHamburgerList = listData.slice(possibleAmountItemMenu);
        } else {
            // если активный не попадает в промежуток возможного количества элеменов(исходя из width) то ставить его последним
            let copyListData = listData.slice(0, listData.length + 1);
            generatedMenuList.push(...copyListData.splice(indexActiveItemMenu, 1));
            generatedMenuList.unshift(...copyListData.splice(0, possibleAmountItemMenu - 1));
            generatedHamburgerList = copyListData;
        }
        return [generatedMenuList, generatedHamburgerList];
    }

    useEffect(() => {
        function handleResize() {
            setWidthMenu(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    return (
        <div className={wrapper}>
            <div className={menu}>
                {!!generatedMenuList.length &&
                    generatedMenuList.map((item) => (
                        <NavLink
                            key={item._id}
                            to={`/${item.name}`}
                            className={itemMenu}
                            activeClassName={active}
                        >
                            <TitleItemMenu
                                IconTitle={item.icon}
                                title={item.label}
                            />
                        </NavLink>
                    ))
                }
                <HamburherButton
                    css={{ wrapper: wrapper }}
                />
            </div>
        </div>
    )
});



const SecondLevelMenu = memo(({ getSubmenu }) => {
    const { wrapper, menu } = useStyles_SecondLevelNavBar();
    const { aciveMenuName } = useParams();
    const listSubmenu = getSubmenu(aciveMenuName);
    const [isOpenItemDropDown, setIsOpenItemDropDown] = useState(generateIsOpenDropDownState());

    function generateIsOpenDropDownState() {
        let stateItemsDropDown = {};
        Array.isArray(listSubmenu) && listSubmenu.map((e) => {
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
                            <DropDownMenu
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
