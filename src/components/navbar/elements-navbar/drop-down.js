import React from 'react';
import { TitleItemMenu } from './item';
import { ReactComponent as IconOpenDD } from '../../../access/icon/arrow-openDD.svg';
import { ReactComponent as IconCloseDD } from '../../../access/icon/arrow-closeDD.svg';


export const DropDownItemMenu = ({ id, title = '', IconTitle, css = {}, isOpenItemDropDown, setIsOpenItemDropDown }) => {
    const headerStyle = `${css.itemMenu} ${isOpenItemDropDown ? css.active : ''}`;
    return (
        <>
        <HeaderDD
            id={id}
            title={title}
            IconTitle={IconTitle}
            css={headerStyle}
            isOpenItemDropDown={isOpenItemDropDown}
            setIsOpenItemDropDown={setIsOpenItemDropDown}
        />
        
        </>
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
)