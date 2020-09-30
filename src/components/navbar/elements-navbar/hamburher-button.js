import React from 'react'
import { createUseStyles } from 'react-jss';
import style from '../style';
import { ReactComponent as IconHamburher } from '../../../access/icon/hamburher.svg';

const useStyles_HamburherButton = createUseStyles(style.hamburgerButton);



export const HamburherButton = () => {
    const { wrapper } = useStyles_HamburherButton();
    return (
        <div className={wrapper}>
            <IconHamburher/>
        </div>
    )
}
