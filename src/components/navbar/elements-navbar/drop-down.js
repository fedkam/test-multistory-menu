import React from 'react';
import { TitleItemMenu } from './item';
import { ReactComponent as IconOpenDD } from '../../../access/icon/arrow-openDD.svg';
import { ReactComponent as IconCloseDD } from '../../../access/icon/arrow-closeDD.svg';
import { createUseStyles } from 'react-jss';
import style from '../style';
import DataServices from '../../service';


const useStyles_Dropdown = createUseStyles(style.dropdown);



export const DropDown = ({ id, title = '', IconTitle, isOpenItemDropDown, setIsOpenItemDropDown }) => {
    const { dropdownWrapper, header, activeHeader, menuWrapper, menu, menuItem, menuSubItem } = useStyles_Dropdown();
    const headerStyle = `${header} ${isOpenItemDropDown ? activeHeader : ''}`;
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
                    css={{
                        menuWrapper: menuWrapper,
                        menu: menu,
                        menuItem: menuItem,
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



const MenuDD = ({ recId, css = {} }) => {
    const dataMenu = new DataServices();   // заменить на обращение json-server
    const dropdownList = dataMenu.getDropdownList(recId);
    return (
        <div className={css.menuWrapper}>
            <div className={css.menu}>
                <LinkDD
                    css={{ menuItem: css.menuItem, menuSubItem: css.menuSubItem}}
                />
            </div>
        </div>
    )
}



const LinkDD = ({ css = {} }) => {
    return (
        <div className={css.menuItem}>
            <p>sdasdasdasdasdорпаорпаоопаsd</p>
        </div>
    )
}