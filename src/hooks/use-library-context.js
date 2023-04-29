import {useContext} from 'react';
import LibraryContext from '../context/library';

const useLibraryContext = () => {
  return useContext(LibraryContext);
}


export default useLibraryContext;