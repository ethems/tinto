import React, {Component} from 'react';

import PostTable from './PostTable';

const CreatePost = (props) => {
    return (
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--hide-phone">{/*Spacer*/}</div>
            <div className="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                <PostTable/>
            </div>
            <div className="mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--hide-phone">{/*Spacer*/}</div>
        </div>
    )
};

export default CreatePost;
