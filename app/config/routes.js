import React from  'react';
import Main from  '../components/Main';
import Home from  '../components/Home';
import Profile from  '../components/Profile';
import Master from  '../components/Master';
import {Router, Route, DefaultRoute} from 'react-router';

export default (
    <Route name="root" path="/" handler={Master}>
        <Route name="profileSearch" path="profileSearch" handler={Main}/>
        <Route name="profile" path="profile/:username" handler={Profile}/>
        <DefaultRoute handler={Home}></DefaultRoute>
    </Route> // when we hit the root of our app at "/"
);