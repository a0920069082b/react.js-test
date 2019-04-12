class useLocalstorage {

  setItem(key, param) {
    window.localStorage.setItem(key, param);
  }

  getItem(key) {
    return window.localStorage.getItem(key);
  }

  setJSONItem(key, param) {
    window.localStorage.setItem(key, JSON.stringify(param));
  }

  getJSONItem(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }
}

export default useLocalstorage;
