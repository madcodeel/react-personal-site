import { useState, useContext } from 'react';
import axios from 'axios';
import { StateContext } from '../store/index';

function useAbout() {
  const [isLoading, setIsLoading] = useState(false);
  const [, setState] = useContext(StateContext);

  const fetchAbout = async () => {
    try {
      setIsLoading(true);

      const getExperience = axios.get('/json/experience.json');
      const getPageData = axios.get('/json/page-about.json');
      const res = await axios.all([getExperience, getPageData]);
      setState((oldVal) => ({
        ...oldVal,
        about: {
          experience: res[0].data,
          pageData: res[1].data,
        },
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchAbout,
    isLoading,
  };
}

export default useAbout;
