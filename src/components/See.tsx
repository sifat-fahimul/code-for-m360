import React from 'react';
import {useDispatch} from 'react-redux'
import { added } from '../reducer/addSlice';
const See = () => {
    const dispatch=useDispatch()
    return (
        <div>
            <h2>SEE</h2>
            <button onClick={()=>dispatch(added('see'))}>see</button>
        </div>
    );
};

export default See;