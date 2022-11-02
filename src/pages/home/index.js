import { useMemo } from 'react';
import classnames from 'classnames'
import { useIntl } from 'react-intl'

import { useLanguage } from 'context/language-context'

import Card from './card'
import Article from './article'
import IconTitle from './icon-title'
// import Vips from './vips'

import styles from './index.module.css'

export default function Home() {
  const intl = useIntl();
  const { language } = useLanguage()

  const banner = useMemo(() => (
    <img
      src={`/images/${language === 'ja-JP' ? 'ja-JP_home_banner.png' : 'zh-CN_home_banner.jpg'}`}
      alt="banner"
      className={styles.img} />
  ), [language])
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        {banner}
        <div className={styles.slogen}>
          <div className={styles.slogenText} dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'slogen' }) }}></div>
        </div>
      </section>
      <section className={styles.section}>
        <Card src={`/images/${language === 'ja-JP' ? 'ja-JP_111.png' : 'zh-CN_1.jpg'}`} />
        <Article
          title={intl.formatMessage({ id: 'title.1' })}
          description={intl.formatMessage({ id: 'des.1' })}
        />
      </section>
      <section className={classnames(styles.section, styles.reverse)}>
        <Card src={`/images/${language === 'ja-JP' ? 'ja-JP_222.png' : 'zh-CN_2.jpg'}`} />
        <Article
          title={intl.formatMessage({ id: 'title.2' })}
          description={intl.formatMessage({ id: 'des.2' })}
        />
      </section>
      <section className={styles.section}>
        <Card src={`/images/${language === 'ja-JP' ? 'ja-JP_333.png' : 'zh-CN_3.jpg'}`} />
        <Article
          title={intl.formatMessage({ id: 'title.3' })}
          description={intl.formatMessage({ id: 'des.3' })}
        />
      </section>
      <section className={classnames(styles.section, styles.reverse)}>
        <Card src={`/images/${language === 'ja-JP' ? 'ja-JP_444.png' : 'zh-CN_4.jpg'}`} />
        <Article
          title={intl.formatMessage({ id: 'title.4' })}
          description={intl.formatMessage({ id: 'des.4' })}
        />
      </section>
      <section className={styles.sectionTitle}>
        <IconTitle icon="icons/shape1.png" title={intl.formatMessage({ id: 'title.product' })} />
      </section>
      <section className={classnames(styles.section, styles.product)}>
        <Card src="/images/555.png" extraClassName={styles.productCard} />
        <Article
          title={intl.formatMessage({ id: 'title.5' })}
          description={intl.formatMessage({ id: 'des.5' })}
        />
      </section>
      <section className={classnames(styles.section, styles.product, styles.reverse)}>
        <Card src="/images/666.png" extraClassName={styles.productCard} />
        <Article
          title={intl.formatMessage({ id: 'title.6' })}
          description={intl.formatMessage({ id: 'des.6' })}
        />
      </section>
      {/* <section className={styles.sectionTitle}>
        <IconTitle icon="icons/shape2.png" title={<FormattedMessage id="title.who" />} />
      </section>
      <section className={classnames(styles.section, styles.vipsContainer)}>
        <Vips />
      </section> */}
    </div>
  )
}
