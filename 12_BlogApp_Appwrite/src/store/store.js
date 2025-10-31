import { configureStore } from "@reduxjs/toolkit";
import {authSliceReducer } from '../features/loggedin'

const store = configureStore( {reducer: {authSliceReducer}});

export default store;