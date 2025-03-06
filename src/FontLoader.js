import { useEffect } from 'react';
import loadFont from './loadFont';

const FontLoader = ({ path, name }) => {
  useEffect(() => {
    const loadPromise = loadFont(path, name);
    return () => {
      loadPromise.then((uninstall) => {
        uninstall && uninstall();
      });
    };
  }, [path, name]);
  return null;
};

export default FontLoader;