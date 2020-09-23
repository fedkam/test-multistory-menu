import React from 'react';
import { TitleItemMenu } from './item';
import { ReactComponent as IconOpenDD } from '../../../access/icon/arrow-openDD.svg';
import { ReactComponent as IconCloseDD } from '../../../access/icon/arrow-closeDD.svg';
import { createUseStyles } from 'react-jss';
import style from '../style';



const useStyles_Dropdown = createUseStyles(style.dropdown);



export const DropDownItemMenu = ({ id, title = '', IconTitle, isOpenItemDropDown, setIsOpenItemDropDown }) => {
    const { wrapper, header, activeHeader, menuWrapper, menu } = useStyles_Dropdown();
    const headerStyle = `${header} ${isOpenItemDropDown ? activeHeader : ''}`;
    return (
        <div className={wrapper}>
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
                    css={{ menuWrapper: menuWrapper, menu: menu }}
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



const MenuDD = ({ css = {} }) => (
    <div className={css.menuWrapper}>
        <div className={css.menu}>
            <p>sdasdasdasdasdорпаорпаоопаsd</p>
        </div>
    </div>
)