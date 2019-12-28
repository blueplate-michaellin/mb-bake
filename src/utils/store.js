import React, {createContext, useReducer} from 'react';
import { useCategory } from "./category";

const initialState = 'Cake';
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
    const category = useCategory()
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        case category[0]:
            return category[0];
        case category[1]:
            return category[1];
        case category[2]:
            return category[2];
        default:
            throw new Error()
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }