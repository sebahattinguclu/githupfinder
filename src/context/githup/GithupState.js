import React, {useReducer,useEffect} from "react";
import axios from 'axios';
import GithupContext from './GithupContext';
import GithupRecuder from './GithupReducer'
import {
    SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS,FETCH_USERS
} from '../Types';


const GithupState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(GithupRecuder, initialState);

    //Data Fetch
    useEffect(async () => {
        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUP_CLIENT_SECRET}`);
        dispatch({
            type: FETCH_USERS,
            payload: res.data
        });
    },[]);


    //Search Users

    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUP_CLIENT_SECRET}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });

    };


    //Get User

    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUP_CLIENT_SECRET}`);
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    };

    //Get Repos

    const getUserRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUP_CLIENT_SECRET}`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    };


    //Clear Users
    const clearUsers = () => {
        dispatch({type: CLEAR_USERS})
    };

    //Set Loading
    const setLoading = () => dispatch({type: SET_LOADING});

    return (<GithupContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {props.children}
    </GithupContext.Provider>)
};

export default GithupState;