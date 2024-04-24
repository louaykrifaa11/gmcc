import {configureStore} from '@reduxjs/toolkit'
import userSlice from './redux/slices/userSlice'








export default configureStore({reducer:{user:userSlice}})