import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment-box';
import CommentEdit from './comment-edit';
import { Router, Route, browserHistory } from 'react-router';
import {API_URL, POLL_INTERVAL}  from './global';

import '../css/base.css';


ReactDOM.render(
    <Router history={browserHistory}>
            <Route path="/" component={CommentBox}/>
            <Route path="/:id" component={CommentEdit}/>
    </Router>,
    document.getElementById('content')
);