import { legacy_createStore } from "redux";
import { LivreReducer } from "./Reducers";

const store = legacy_createStore(LivreReducer);

export default store;
