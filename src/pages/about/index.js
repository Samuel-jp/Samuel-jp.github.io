import { useMemo } from 'react';
import { useLanguage } from 'context/language-context'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'

import styles from './index.module.css'

export default function About() {
  const {language} = useLanguage()

  const banner = useMemo(() => (
    <img src={`/images/${language === 'ja-JP' ? 'ja-JP_about_banner.png' : 'zh-CN_about_banner.jpg'}`} alt="banner" className={styles.img} />
  ), [language])

  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        {banner}
      </section>
      <section className={styles.section}>
        <span className={styles.title}>
          <FormattedMessage id="about.profile" />
        </span>
        <p className={styles.article}>
          <FormattedMessage id="about.article.1" />
        </p>
        <div><img src="/images/about_1.jpg" className={classnames(styles.jpg1, styles.p)} alt="company" width="100%" height="260px" /></div>
        <div className={classnames(styles.halfContainer, styles.p)}>
          <div className={styles.vision}>
            <div className={styles.vTitle}><FormattedMessage id="about.sub.1" /></div>
            <div className={styles.vContent1}><FormattedMessage id="about.sub.2" /></div>
            <div className={classnames(styles.article, styles.vContent2)}><FormattedMessage id="about.sub.3" /></div>
          </div>
          <img src="/images/about_2.jpg" alt="about vision" className={styles.half} />
        </div>
        <p className={styles.article}>
          <FormattedMessage id="about.article.2" />
        </p>
        <div className={classnames(styles.halfContainer, styles.p)}>
          <img src="/images/about_3.jpg" alt="about business" className={styles.half} />
          <p className={classnames(styles.article, styles.halfArticle)}>
            <FormattedMessage id="about.article.3" />
          </p>
        </div>
      </section>
    </div>
  )
}
