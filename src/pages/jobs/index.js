import { useState, useCallback, useMemo, useLayoutEffect } from 'react';
import { FormattedMessage as M } from 'react-intl'
import classnames from 'classnames';

import { useLanguage } from 'context/language-context';
import { useViewport } from 'context/viewport-context';

import Jd from './jd'

import styles from './index.module.css'

export default function Jobs() {
  const { language } = useLanguage();
  const [navFixed, setNavFixed] = useState(false);
  const [curNav, setCurNav] = useState('engineering');
  const { width } = useViewport();

  useLayoutEffect(() => {
    // let aside = document.querySelector('aside');
    let engineering = document.querySelector('#engineering');
    let qa = document.querySelector('#qa');
    let devops = document.querySelector('#devops');
    let media = document.querySelector('#media');
    const windowHalfHeight = window.innerHeight / 2
    // const defaultAsideTop = aside.offsetParent;
    // console.log('defaultAsideTop', defaultAsideTop);
    const handler = () => {
      const scrollY = window.scrollY;
      const navTop = 414;
      if (scrollY >= navTop) setNavFixed(true);
      else setNavFixed(false);
      const engineeringTop = engineering.getBoundingClientRect().top;
      const qaTop = qa.getBoundingClientRect().top;
      const devopsTop = devops.getBoundingClientRect().top;
      const mediaTop = media ? media.getBoundingClientRect().top : -1;
      if (engineeringTop < windowHalfHeight && engineeringTop >= 0) setCurNav('engineering');
      if (qaTop < windowHalfHeight && qaTop >= 0) setCurNav('qa');
      if (devopsTop < windowHalfHeight && devopsTop >= 0) setCurNav('devops');
      if (media && mediaTop < windowHalfHeight && mediaTop >= 0) setCurNav('media');
    }
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [])


  const mainStyle = navFixed && width > 1020 ? { paddingLeft: 150 } : null;
  const navLinkClassName = useCallback((cls) =>
    classnames(styles.nav, {
      [styles.active]: cls === curNav,
    })
    , [curNav])

  const banner = useMemo(() => (
    <img src={`/images/${language === 'ja-JP' ? 'ja-JP' : 'zh-CN'}_job_banner.png`} alt="banner" className={styles.img} />
  ), [language]);

  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        {banner}
      </section>
      <div className={styles.main}>
        <aside className={classnames(styles.aside, { [styles.navFixed]: navFixed })}>
          <a className={navLinkClassName('engineering')} href="#engineering"><M id="job.category.engineering" /></a>
          <a className={navLinkClassName('qa')} href="#qa"><M id="job.category.qa" /></a>
          <a className={navLinkClassName('devops')} href="#devops"><M id="job.category.devops" /></a>
          <a className={navLinkClassName('media')} href="#media"><M id="job.category.media" /></a>
        </aside>
        <div className={styles.jdContainer} style={mainStyle}>
          <Jd
            title={<M id="job.1.title" />}
            descriptions={[
              <M id="job.1.des.1" />,
              <M id="job.1.des.2" />,
              <M id="job.1.des.3" />,
              <M id="job.1.des.4" />,
            ]}
            demands={[
              <M id="job.1.dem.1" />,
              <M id="job.1.dem.2" />,
              <M id="job.1.dem.3" />,
              <M id="job.1.dem.4" />,
              <M id="job.1.dem.5" />,
            ]}
            id="engineering"
          />
          <Jd
            title={<M id="job.2.title" />}
            descriptions={[
              <M id="job.2.des.1" />,
              <M id="job.2.des.2" />,
              <M id="job.2.des.3" />,
            ]}
            demands={[
              <M id="job.2.dem.1" />,
              <M id="job.2.dem.2" />,
              <M id="job.2.dem.3" />,
              <M id="job.2.dem.4" />,
              <M id="job.2.dem.5" />,
            ]}
          />
          <Jd
            title={<M id="job.3.title" />}
            descriptions={[
              <M id="job.3.des.1" />,
              <M id="job.3.des.2" />,
              <M id="job.3.des.3" />,
            ]}
            demands={[
              <M id="job.3.dem.1" />,
              <M id="job.3.dem.2" />,
              <M id="job.3.dem.3" />,
              <M id="job.3.dem.4" />,
              <M id="job.3.dem.5" />,
              <M id="job.3.dem.6" />,
            ]}
          />
          <Jd
            title={<M id="job.4.title" />}
            descriptions={[
              <M id="job.4.des.1" />,
              <M id="job.4.des.2" />,
              <M id="job.4.des.3" />,
            ]}
            demands={[
              <M id="job.4.dem.1" />,
              <M id="job.4.dem.2" />,
              <M id="job.4.dem.3" />,
              <M id="job.4.dem.4" />,
              <M id="job.4.dem.5" />,
              <M id="job.4.dem.6" />,
            ]}
            pluses={[
              <M id="job.4.ext.1" />,
              <M id="job.4.ext.2" />,
              <M id="job.4.ext.3" />,
            ]}
          />
          <Jd
            title={<M id="job.5.title" />}
            descriptions={[
              <M id="job.5.des.1" />,
              <M id="job.5.des.2" />,
            ]}
            demands={[
              <M id="job.5.dem.1" />,
              <M id="job.5.dem.2" />,
              <M id="job.5.dem.3" />,
            ]}
          />
          <Jd
            title={<M id="job.6.title" />}
            descriptions={[
              <M id="job.6.des.1" />,
              <M id="job.6.des.2" />,
              <M id="job.6.des.3" />,
              <M id="job.6.des.4" />,
              <M id="job.6.des.5" />,
            ]}
            demands={[
              <M id="job.6.dem.1" />,
              <M id="job.6.dem.2" />,
              <M id="job.6.dem.3" />,
              <M id="job.6.dem.4" />,
              <M id="job.6.dem.5" />,
            ]}
          />
          <Jd
            title={<M id="job.7.title" />}
            descriptions={[
              <M id="job.7.des.1" />,
              <M id="job.7.des.2" />,
              <M id="job.7.des.3" />,
              <M id="job.7.des.4" />,
            ]}
            demands={[
              <M id="job.7.dem.1" />,
              <M id="job.7.dem.2" />,
              <M id="job.7.dem.3" />,
              <M id="job.7.dem.4" />,
              <M id="job.7.dem.5" />,
              <M id="job.7.dem.6" />,
            ]}
            pluses={[
              <M id="job.7.ext.1" />,
              <M id="job.7.ext.2" />,
            ]}
          />
          <Jd
            title={<M id="job.8.title" />}
            descriptions={[
              <M id="job.8.des.1" />,
              <M id="job.8.des.2" />,
            ]}
            demands={[
              <M id="job.8.dem.1" />,
              <M id="job.8.dem.2" />,
              <M id="job.8.dem.3" />,
              <M id="job.8.dem.4" />,
              <M id="job.8.dem.5" />,
              <M id="job.8.dem.6" />,
              <M id="job.8.dem.7" />,
            ]}
          />
          <Jd
            title={<M id="job.9.title" />}
            descriptions={[
              <M id="job.9.des.1" />,
              <M id="job.9.des.2" />,
              <M id="job.9.des.3" />,
              <M id="job.9.des.4" />,
            ]}
            demands={[
              <M id="job.9.dem.1" />,
              <M id="job.9.dem.2" />,
              <M id="job.9.dem.3" />,
              <M id="job.9.dem.4" />,
              <M id="job.9.dem.5" />,
              <M id="job.9.dem.6" />,
            ]}
            id="qa"
          />
          <Jd
            title={<M id="job.10.title" />}
            descriptions={[
              <M id="job.10.des.1" />,
            ]}
            demands={[
              <M id="job.10.dem.1" />,
              <M id="job.10.dem.2" />,
              <M id="job.10.dem.3" />,
              <M id="job.10.dem.4" />,
              <M id="job.10.dem.5" />,
              <M id="job.10.dem.6" />,
              <M id="job.10.dem.7" />,
            ]}
            id="devops"
          />
          <Jd
            title={<M id="job.11.title" />}
            descriptions={[
              <M id="job.11.des.1" />,
              <M id="job.11.des.2" />,
              <M id="job.11.des.3" />,
            ]}
            demands={[
              <M id="job.11.dem.1" />,
              <M id="job.11.dem.2" />,
              <M id="job.11.dem.3" />,
            ]}
            id="media"
          />
          <Jd
            title={<M id="job.12.title" />}
            descriptions={[
              <M id="job.12.des.1" />,
              <M id="job.12.des.2" />,
              <M id="job.12.des.3" />,
            ]}
            demands={[
              <M id="job.12.dem.1" />,
              <M id="job.12.dem.2" />,
              <M id="job.12.dem.3" />,
              <M id="job.12.dem.4" />,
            ]}
            isLast
          />
        </div>
      </div>
    </div>
  )
}