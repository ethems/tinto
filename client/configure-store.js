import {createStore , applyMiddleware} from 'redux';
import throttle from 'lodash/throttle';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import appReducers from './reducers';
import {loadState, saveState} from './local-storage';

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(appReducers,applyMiddleware(ReduxThunk,ReduxPromise));
    store.subscribe(throttle(() => {
        saveState({
          products: store.getState().products
        });
    },1000));
    return store;
}

export default configureStore;
