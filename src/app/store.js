import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import userSlice from "./features/userSlice";

const logger = createLogger();



const store = configureStore({

    reducer: {
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(logger)
});



export default store;