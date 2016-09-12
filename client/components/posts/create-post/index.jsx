import React, {Component} from 'react';

import PostTable from './PostTable';

const CreatePost = (props) => {
    return (
        <div className="mdl-grid mdl-grid--no-spacing	">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--hide-phone">{/*Spacer*/}</div>
            <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                <PostTable/>
            </div>
            <div className="mdl-cell mdl-cell--5-col mdl-cell--2-col-tablet mdl-cell--hide-phone">{/*Spacer*/}</div>
        </div>
    )
};

export default CreatePost;
