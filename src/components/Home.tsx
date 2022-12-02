import React from 'react';
import {useDispatch} from 'react-redux'
import { added } from '../reducer/addSlice';
import { useGetAllFashionsQuery } from '../reducer/apiSlice';
const Home = () => {

    // const {data}=useGetAllFashionsQuery({})
    // console.log(data)

const dispatch=useDispatch()
    return (
        <div>
    <button onClick={()=>dispatch(added('hi'))}>add</button>        
        </div>
    );
};

export default Home;