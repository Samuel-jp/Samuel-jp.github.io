import { useCallback, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';

import { useViewport } from 'context/viewport-context';
import { Modal } from 'components'

import MobileMenu from '../mobile-menu';
import SelectLanguage from '../select-language';

import styles from './index.module.css';

const breakpoint = 900;

function Header() {
  const { width } = useViewport();
  const { pathname } = useLocation();
  const [menuVisible, setMenuVisible] = useState(false);

  const linkClassName = useCallback(
    (path) =>
      classnames(styles.nav, {
        [styles.active]: pathname.toLocaleLowerCase() === path,
      }),
    [pathname]
  );

  const onMenuClick = useCallback(() => {
    setMenuVisible(value => !value);
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    document.body.style.overflowY = menuVisible ? 'hidden' : 'auto';
    return () => document.body.style.overflowY = 'scroll';
  }, [menuVisible])

  return (
    <header className={styles.container}>
      <Link to='/home'>
        <img
          src='/images/logo.png'
          alt='Luminesence Logo'
          className={styles.logo}
        />
      </Link>
      <div 
        className={classnames(styles.navContainer, {
          [styles.webNavVisible]: width >= breakpoint,
        })}
      >
        <Link to={`/home`} className={linkClassName('/home')}>
          <FormattedMessage id='nav.home' />
        </Link>
        <Link to={`/cooperation`} className={linkClassName('/cooperation')}>
          <FormattedMessage id='nav.cooperation' />
        </Link>
        <Link to={`/jobs`} className={linkClassName('/jobs')}>
          <FormattedMessage id='nav.jobs' />
        </Link>
        <Link to={`/about`} className={linkClassName('/about')}>
          <FormattedMessage id='nav.about' />
        </Link>
      </div>
      <SelectLanguage setMenuVisible={setMenuVisible} menuVisible={menuVisible} />
      <Modal><MobileMenu visible={width < breakpoint} onClick={onMenuClick} /></Modal>
      <div 
        className={classnames(styles.navContainer, {
          [styles.mobileNavVisible]: menuVisible && width < breakpoint,
          [styles.mobileNav]: width < breakpoint,
        })}
      >
        <Link to={`/home`} className={linkClassName('/home')} onClick={onMenuClick}>
          <FormattedMessage id='nav.home' />
        </Link>
        <Link to={`/cooperation`} className={linkClassName('/cooperation')} onClick={onMenuClick}>
          <FormattedMessage id='nav.cooperation' />
        </Link>
        <Link to={`/jobs`} className={linkClassName('/jobs')} onClick={onMenuClick}>
          <FormattedMessage id='nav.jobs' />
        </Link>
        <Link to={`/about`} className={linkClassName('/about')} onClick={onMenuClick}>
          <FormattedMessage id='nav.about' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
