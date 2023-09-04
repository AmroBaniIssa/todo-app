import React, { useContext } from "react";
import { Navbar, Alignment, Button } from '@blueprintjs/core';
// import { SettingsContext } from '../Context/Site';
import { ThemeContext } from '../../Context/theme';
export default function Header(props) {
    const myContext = useContext(ThemeContext);

    return (

        <Navbar className={myContext.mode}>
            <Navbar.Group align={Alignment.LEFT}>
                {/* <Navbar.Heading>Title from Context {this.context.title}</Navbar.Heading> */}
                <Navbar.Divider />
                <Navbar.Heading>
                    change mode 
                    <Button icon="refresh" onClick={myContext.toggleMode} />
                </Navbar.Heading>
            </Navbar.Group>
        </Navbar>

    )
}
