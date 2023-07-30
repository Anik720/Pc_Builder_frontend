import { configureStore } from "@reduxjs/toolkit";
import builderSlice from "./features/builder/builderSlice";

export default configureStore({
  reducer: {
    builder: builderSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
