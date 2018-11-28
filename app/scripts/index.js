import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment-box';
import { Router, Route, browserHistory } from 'react-router';
import {API_URL, POLL_INTERVAL}  from './global';

import '../css/base.css';


ReactDOM.render(
    <CommentBox url={API_URL + "/"} pollInterval={POLL_INTERVAL} />,
    document.getElementById('content')
);