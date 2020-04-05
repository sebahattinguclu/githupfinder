import React, {useReducer} from "react";
import AlertContext from './AlertContext';
import AlertRecuder from './AlertRecuder';
import {
    SET_ALERT, REMOVE_ALERT
} from '../Types';


const AlertState = props => {
    const initialState = null;
    const [state, dispatch] = useReducer(AlertRecuder, initialState);


    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        })

        setTimeout(() =>
            dispatch({type: REMOVE_ALERT}), 5000)
    };


    return (<AlertContext.Provider
        value={{
            alert: state,
            setAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>)
};

export default AlertState;