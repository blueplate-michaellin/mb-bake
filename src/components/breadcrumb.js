import React, { useContext } from 'react'
import {navigate} from 'gatsby'
import { store } from '../utils/store.js';


const Breadcrumb = (props) => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const handleClick = (e) => {
        dispatch({type: props.category[0]})
        navigate('/')
    }
    return(
        <span>
            <a onClick={(e)=>handleClick()}>Main</a><span className="mx-4 opacity-50">></span><span className="font-bold">{props.name}</span>
        </span>
    )
}



export default Breadcrumb;