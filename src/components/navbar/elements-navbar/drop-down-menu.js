import React, { useMemo } from 'react';
import { TitleItemMenu } from './item';
import { ReactComponent as IconOpenDD } from '../../../access/icon/arrow-openDD.svg';
import { ReactComponent as IconCloseDD } from '../../../access/icon/arrow-closeDD.svg';
import { createUseStyles } from 'react-jss';
import style from '../style';
import DataServices from '../../service';
import { NavLink, useRouteMatch } from 'react-router-dom';
import DropDownSubmenu from './drop-down-submenu';

const useStyles_DropdownMenu = createUseStyles(style.dropdownMenu);



export const DropDownMenu = ({ id, title = '', IconTitle, isOpenItemDropDown, setIsOpenItemDropDown }) => {
    const { dropdownWrapper, header, activeHeader, menuWrapper, menu, menuItem, activeMenuItem, menuSubItem } = useStyles_DropdownMenu();
    const headerStyle = `${header} ${isOpenItemDropDown ? activeHeader : ''}`;
    const { url } = useRouteMatch();
    return (
        <div className={dropdownWrapper}>
            <HeaderDD
                id={id}
                title={title}
                IconTitle={IconTitle}
                css={headerStyle}
                isOpenItemDropDown={isOpenItemDropDown}
                setIsOpenItemDropDown={setIsOpenItemDropDown}
            />
            {isOpenItemDropDown &&
                <MenuDD
                    recId={id}
                    currentUrl={url}
                    setIsOpenItemDropDown={setIsOpenItemDropDown}
                    css={{
                        menuWrapper: menuWrapper,
                        menu: menu,
                        menuItem: menuItem,
                        activeMenuItem: activeMenuItem,
                        menuSubItem: menuSubItem
                    }}
                />
            }
        </div>
    )
}



const HeaderDD = ({ id, title = '', IconTitle, css = {}, isOpenItemDropDown = false, setIsOpenItemDropDown = (() => 0) }) => (
    <div
        className={css}
        onClick={() => setIsOpenItemDropDown(id)}
    >
        <TitleItemMenu
            IconTitle={IconTitle}
            title={title}
        />
        <div>
            {isOpenItemDropDown ? <IconCloseDD /> : <IconOpenDD />}
        </div>
    </div>
);



const MenuDD = ({ recId, currentUrl = '#', setIsOpenItemDropDown, css = {} }) => {
    const dataMenu = new DataServices();   // заменить на обращение json-server
    let dropdownList = dataMenu.getDropdownList(recId);
    dropdownList = dropdownList && dropdownList.listLink;
    const isMultilevelMenuList = useMemo(() => (
        dropdownList &&
        dropdownList.find((item) => item.subLink)
    ), [dropdownList]);

    return (
        <div className={css.menuWrapper}>
            <div
                className={css.menu}
                onClick={() => setIsOpenItemDropDown(recId)}
            >
                {
                    isMultilevelMenuList &&
                    <DropDownSubmenu
                        currentUrl={currentUrl}
                        dropdownList={dropdownList}
                    />
                }
                {
                    //без многоуровневого меню
                    !isMultilevelMenuList &&
                    dropdownList && dropdownList.map((item, index) => (
                        <NavLink
                            key={index}
                            to={`${currentUrl}/${item.url}`}
                            className={css.menuItem}
                            activeClassName={css.activeMenuItem}
                            exact
                        >
                            <p>{item.label}</p>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

