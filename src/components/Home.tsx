import React from 'react';
import {useDispatch} from 'react-redux'
import { added } from '../reducer/addSlice';
const Home = () => {

const dispatch=useDispatch()
    return (
        <div>
    <button onClick={()=>dispatch(added('hi'))}>add</button>        
        </div>
    );
};

export default Home;