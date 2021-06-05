import React from 'react';

const Context = React.createContext({
  routes: {
    Home: {
      url: '/home',
    },
    About: {
      url: '/about',
    },
    Projects: {
      url: '/projects',
    },
  },
  colors: {
    main: '#054e62',
    sub: '#197890',
    lightGreen: '#b4ff00',
    white: '#ffffff',
  },
  loading: false,
  name: 'leo',
});

export default Context;
