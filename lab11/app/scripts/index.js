import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment-box';

import '../css/base.css';


ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000} />,
    document.getElementById('content')
);