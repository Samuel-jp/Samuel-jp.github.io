import {
  BrowserRouter as Router,
} from "react-router-dom"
import { useLanguage } from 'context/language-context'
import classnames from 'classnames'

import Header from '../header'
import Footer from '../footer'
import ScrollToTop from '../scroll-to-top'

import styles from './index.module.css'

function Layout({ children }) {
  const { language } = useLanguage()

  return (
    <div className={classnames(styles.container, { [styles.jpFontFamily]: language === 'ja-JP' })}>
      <Router>
        <ScrollToTop />
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default Layout
