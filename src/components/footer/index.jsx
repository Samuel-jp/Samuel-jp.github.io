import SelectLanguage from '../select-language'

import styles from './index.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* <div className={styles.follow}>
          <span className={styles.title}><FormattedMessage id="subscribe" /></span>
          <div className={styles.icons}>
            <img className={styles.image} src='/icons/facebook.png' alt="facebook icon" width={42} height={42} />
            <img className={styles.image} src='/icons/youtube.png' alt="youtube icon" width={42} height={42} />
            <img className={styles.image} src='/icons/twitter.png' alt="twitter icon" width={42} height={42} />
          </div>
        </div> */}
        <div className={styles.copyright}>© 2021 Luminesence</div>
        <SelectLanguage style={{ background: '#fff'}} />
      </div>
    </footer>
  )
}

export default Footer
