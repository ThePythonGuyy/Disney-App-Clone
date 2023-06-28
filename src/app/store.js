import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import userSlice from "./features/user/userSlice";
import movieSlice from "./features/movie/movieSlice";

const logger = createLogger();



const store = configureStore({

    reducer: {
        user: userSlice,
        movie: movieSlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(logger)
});



export default store;