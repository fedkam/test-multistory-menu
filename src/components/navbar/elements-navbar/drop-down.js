import React from 'react';
import { TitleItemMenu } from './item';
import { ReactComponent as IconOpenDD } from '../../../access/icon/arrow-openDD.svg';
import { ReactComponent as IconCloseDD } from '../../../access/icon/arrow-closeDD.svg';


export const DropDownItemMenu = ({ title = '', IconTitle, css, isOpenDropDown = false, }) => {
    return (
        <div>
            <TitleItemMenu
                IconTitle={IconTitle}
                title={title}
            />
            <div>
                {isOpenDropDown ? <IconCloseDD /> : <IconOpenDD />}
            </div>
        </div>
    )
}