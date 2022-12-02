import {configureStore} from '@reduxjs/toolkit';

import addReducer from '../reducer/addSlice';
import { getApiData } from '../reducer/apiSlice';
// import  getApiData from '../reducer/apiSlice';

const store=configureStore({
    reducer:{
        added:addReducer,
        data:getApiData,
    
    }
})


export default store;