import {configureStore} from '@reduxjs/toolkit'

import addReducer from '../reducer/addSlice'

const store=configureStore({
    reducer:{
        added:addReducer
    }
})


export default store;