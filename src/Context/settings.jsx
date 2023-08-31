import React from "react";
export const SettingsContext = React.createContext();
export default function Settings(props) {
    const state = {
        numberOfItems: 3,
        hideCompleted: true,
        difficulty: 'difficulty',
    }
    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}