const getLastFolderName = (path) => {
  // 标准化路径，去除末尾的斜杠
  path = path.replace(/\/+$/, '');

  // 按斜杠分割路径
  const parts = path.split('/');

  // 过滤掉空字符串
  const filteredParts = parts.filter(part => part !== '');

  // 获取最后一个部分
  return filteredParts[filteredParts.length - 1];
};

const loadFont = async (path, name) => {
  if (document.head.querySelector(`script[href*="${name || getLastFolderName(path)}"]`)) {
    return;
  }
  if (/.js$/.test(path)) {
    const dom = document.createElement('script');
    dom.src = path;
    await new Promise((resolve, reject) => {
      dom.addEventListener('load', () => {
        resolve();
      });
      dom.addEventListener('error', e => {
        reject(e);
      });
      document.head.append(dom);
    });
    return () => {
      document.head.removeChild(dom);
    };
  }
  if (/.css$/.test(path)) {
    const dom = document.createElement('link');
    dom.setAttribute('href', path);
    dom.setAttribute('rel', 'stylesheet');
    await new Promise((resolve, reject) => {
      dom.addEventListener('load', () => {
        resolve();
      });
      dom.addEventListener('error', e => {
        reject(e);
      });
      document.head.append(dom);
    });
    return () => {
      document.head.removeChild(dom);
    };
  }
  throw new Error('Unable to load font type');
};

export default loadFont;