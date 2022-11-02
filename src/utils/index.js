const enableLanguages = [ 'zh-CN', 'en-US', 'ja-JP' ];

export const getDefaultLanguage = () => {
  const localStorageLanguage = typeof localStorage !== undefined ? localStorage.getItem('language') : 'en-US';
  const navigatorLanguage = typeof navigator !== undefined ? navigator.language : 'en-US';
  const lang = localStorageLanguage || navigatorLanguage;
  return enableLanguages.indexOf(lang) > -1 ? lang : 'en-US';
}

export const getScrollbarWidth = () => {
  var scrollDiv = document.createElement("div");
  scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}