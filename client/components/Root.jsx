import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import CreatePost from './posts/create-post';

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={CreatePost}/>
            </Route>
        </Router>
    </Provider>
);

export default Root;
