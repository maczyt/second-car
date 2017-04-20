/**
 * 存储localStorage
 * @param name
 * @param content
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 * @param name
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 * @param name
 */
export const removeStore = name => {
  if (!name) return;
  return window.localStorage.removeItem(name);
}

export const server = 'http://cnnba.win:8090'
