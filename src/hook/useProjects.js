import { useState, useContext } from 'react';
import axios from 'axios';
import { StateContext } from '../store/index';

function useProjects() {
  const [isLoading, setIsLoading] = useState(false);
  const [, setState] = useContext(StateContext);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('/json/projects.json');
      setState((oldVal) => ({
        ...oldVal,
        projects: data,
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchProjects,
    isLoading,
  };
}

export default useProjects;
