import React, { useState, createContext } from 'react';

export const EditDevContext = createContext();

export const EditDevProvider = (props) => {
    const [editDev, setEditDev] = useState('');
    return (
        <EditDevContext.Provider value={[editDev, setEditDev]}>
            {props.children}
        </EditDevContext.Provider>
    );
}
