import {createStore} from 'redux';
import throttle from 'lodash/throttle';

import appReducers from './reducers';
import {loadState, saveState} from './local-storage';

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(appReducers, persistedState);
    store.subscribe(throttle(() => {
        saveState({
          products: store.getState().products
        });
    },1000));
    return store;
}

export default configureStore;
