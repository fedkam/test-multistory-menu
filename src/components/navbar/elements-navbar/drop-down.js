import React, { useState, useCallback } from 'react';
import { TitleItemMenu } from './item';
import { ReactComponent as IconOpenDD } from '../../../access/icon/arrow-openDD.svg';
import { ReactComponent as IconCloseDD } from '../../../access/icon/arrow-closeDD.svg';


export const DropDownItemMenu = ({ title = '', IconTitle, css = {} }) => {
    const { itemMenu } = css;
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const memoSetIsOpenDropDown = useCallback(setIsOpenDropDown, []);
    return (
        <HeaderDD
            title={title}
            IconTitle={IconTitle}
            css={itemMenu}
            isOpenDropDown={isOpenDropDown}
            setIsOpenDropDown={memoSetIsOpenDropDown}
        />
    )
}

const HeaderDD = ({ title = '', IconTitle, css = {}, isOpenDropDown, setIsOpenDropDown }) => (
    <div
        className={css}
        onClick={() => setIsOpenDropDown(!isOpenDropDown)}
    >
        <TitleItemMenu
            IconTitle={IconTitle}
            title={title}
        />
        <div>
            {isOpenDropDown ? <IconCloseDD /> : <IconOpenDD />}
        </div>
    </div>
)