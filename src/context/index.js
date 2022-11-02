import { ViewportProvider } from './viewport-context';
import { LanguageProvider } from './language-context';

export const AppProviders = ({ children }) => {
  return <ViewportProvider>
    <LanguageProvider>
      {children}
    </LanguageProvider>
  </ViewportProvider>
};