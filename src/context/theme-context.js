import React, { useCallback } from 'react';
import { IntlProvider } from 'react-intl'

import { getDefaultTheme } from 'utils';

import { zh_CN } from '../i18n/zh_CN'
import { en_US } from '../i18n/en_US'
import { ja_JP } from '../i18n/ja_JP'

const messages = { 'zh-CN': zh_CN, 'en-US': en_US, 'ja-JP': ja_JP };

// 创建一个LangContext并且导出
export const themeContext = React.createContext({
  changeTheme: () => {
  }
});

export const ThemeProvider = ({ children, ...props }) => {
 
  const [theme, setTheme] = React.useState(getDefaultTheme());

  const changeTheme = useCallback((lang) => {
    setTheme(lang)
    localStorage.setItem('theme', lang)
  }, [])

  return (
    <themeContext.Provider value={{ changeTheme, theme: theme }}>
      <IntlProvider locale={theme} messages={messages[theme]}>
        {children}
      </IntlProvider>
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  const { changeTheme, theme } = React.useContext(themeContext);
  return { changeTheme, theme };
}