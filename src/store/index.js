import React from 'react';

const Context = React.createContext({
  routes: {
    Home: {
      url: '/home',
    },
    About: {
      url: '/about',
    },
    Products: {
      url: '/products',
    },
  },
  loading: false,
  name: 'leo',
});

export default Context;
