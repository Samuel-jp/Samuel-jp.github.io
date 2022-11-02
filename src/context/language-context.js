import React, { useCallback } from 'react';
import { IntlProvider } from 'react-intl'

import { getDefaultLanguage } from 'utils';

import { zh_CN } from '../i18n/zh_CN'
import { en_US } from '../i18n/en_US'
import { ja_JP } from '../i18n/ja_JP'

const messages = { 'zh-CN': zh_CN, 'en-US': en_US, 'ja-JP': ja_JP };

// 创建一个LangContext并且导出
export const languageContext = React.createContext({
  changeLanguage: () => {
  }
});

export const LanguageProvider = ({ children, ...props }) => {
 
  const [language, setLanguage] = React.useState(getDefaultLanguage());

  const changeLanguage = useCallback((lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }, [])

  return (
    <languageContext.Provider value={{ changeLanguage, language: language }}>
      <IntlProvider locale={language} messages={messages[language]}>
        {children}
      </IntlProvider>
    </languageContext.Provider>
  );
};

export const useLanguage = () => {
  const { changeLanguage, language } = React.useContext(languageContext);
  return { changeLanguage, language };
}