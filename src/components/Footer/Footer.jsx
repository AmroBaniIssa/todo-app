import React from 'react';
import { Card, Elevation } from "@blueprintjs/core";
import { ThemeContext } from '../../Context/theme';
import { SettingsContext } from '../../Context/settings';
import { useContext } from 'react';

export default function Footer(props) {
    const site = useContext(SettingsContext);
    const theme = useContext(ThemeContext);

    return (
        <>
            <Card elevation={Elevation.TWO} className={theme.mode}>
                <h3>the mode is {theme.mode}</h3>
                <h5> {site.completed ? "completed items are shown" : "completed items are hidden"}</h5>
                <p>Card content</p>
                
            </Card>
        </>
    )
}