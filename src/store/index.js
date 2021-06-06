import { useState, createContext } from 'react';

export const StateContext = createContext();

export const InitContextState = () => useState({
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
  projects: [],
  colors: {
    main: '#054e62',
    sub: '#197890',
    lightGreen: '#b4ff00',
    white: '#ffffff',
  },
  loading: false,
  name: 'leo',
});
