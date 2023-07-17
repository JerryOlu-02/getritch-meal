import { useContext } from 'react';
import AppContext from '../context/appContext';

const useAppContext = function () {
  return useContext(AppContext);
};

export default useAppContext;
