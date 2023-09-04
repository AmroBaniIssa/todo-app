import React from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import { ThemeContext } from '../../Context/theme';
import { SettingsContext } from '../../Context/settings';
import { useContext } from 'react';

export default function Footer(props) {
    const setting = useContext(SettingsContext);
    const theme = useContext(ThemeContext);

    return (
        <>
            <Card elevation={Elevation.TWO} className={theme.mode}>
                <h3>the mode is {theme.mode}</h3>
                <h5> {setting.completed ?  "completed items are hidden" :  "completed items are shown"}</h5>
                
            </Card>
        </>
    )
}