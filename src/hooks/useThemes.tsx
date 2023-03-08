import { useContext } from 'react';
import ThemesContext from '../context/ThemesProvider';

const useThemes = () => useContext(ThemesContext);

export default useThemes;
