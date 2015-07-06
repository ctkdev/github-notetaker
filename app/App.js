import React  from 'react';
import Router from 'react-router';
import routes from './config/routes';


// Basically whenever a route changes, react-router is going to be able to detect that,
// and it's going to be able to pass this the component that we want to render.
Router.run(routes, (Root, state) => {
    // ... is the spread attributes feature - look this up!
    React.render(<Root {...state}/>, document.getElementById('app'));
});