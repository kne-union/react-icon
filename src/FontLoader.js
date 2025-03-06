import { useCallback } from 'react';
import loadFont from './loadFont';

const FontLoader = ({ path, name }) => {
  useCallback(() => {
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