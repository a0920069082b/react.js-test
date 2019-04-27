class useLocalstorage {

  // 這個檔案的方法命名我喜歡，不錯！
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
    // JSON.parse 有極高機率因為解析失敗，導致網站掛掉。
    // 建議寫 try catch
    // return JSON.parse(window.localStorage.getItem(key));
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (e) {
      console.error(e);
      return [];
    }
  }
}

export default useLocalstorage;
