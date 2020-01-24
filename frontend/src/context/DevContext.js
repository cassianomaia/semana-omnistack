import React, { useState, createContext } from 'react';

export const DevContext = createContext();

export const DevProvider = (props) => {
    const [devs, setDevs] = useState([]);
    return (
        <DevContext.Provider value={[devs,setDevs]}>
            {props.children}
        </DevContext.Provider>
    );
}
