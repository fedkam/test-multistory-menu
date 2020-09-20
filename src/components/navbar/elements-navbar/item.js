import React from 'react';
import { createUseStyles } from 'react-jss';
import style from '../style';

const useStyles_ItemMenu = createUseStyles(style.link);


export const TitleItemMenu = ({ IconTitle, title}) => {
    const itemStyle = useStyles_ItemMenu();
    return (
        <>
            {IconTitle &&
                <div className={itemStyle.iconLogo} >
                    <IconTitle />
                </div>
            }
            <p className={itemStyle.title}>
                {title}
            </p>
        </>
    )
}