import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import usersSlice from "./Slice/usersSlice";
import paymentMethodsSlice from "./Slice/paymentMethodsSlice";
import classesSlice from "./Slice/classesSlice";
import trainingSlice from "./Slice/trainingSlice";
import recomendedSlice from "./Slice/recomendedSlice";
import tokenSlice from "./Slice/tokenSlice";
import OnlineClassSlice from "./Slice/OnlineClassSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: usersSlice,
  paymentMethod: paymentMethodsSlice,
  classes: classesSlice,
  training: trainingSlice,
  onlineClass: OnlineClassSlice,
  recomended: recomendedSlice,
  tokenAuth : tokenSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer };
