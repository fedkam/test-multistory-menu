import React from 'react';
import { createUseStyles } from 'react-jss';
import style from '../style';

const useStyles_ItemMenu = createUseStyles(style.itemMenu);


export const TitleItemMenu = ({ IconTitle, title}) => {
    const itemMenu = useStyles_ItemMenu();
    return (
        <>
            {IconTitle &&
                <div className={itemMenu.iconLogo} >
                    <IconTitle />
                </div>
            }
            <p className={itemMenu.title}>
                {title}
            </p>
        </>
    )
}