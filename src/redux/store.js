import { legacy_createStore as createStore } from "redux";

import { bookreducer } from "./reducer";

let store = createStore(bookreducer);
export default store;
