import classnames from 'classnames';
import { useLanguage } from 'context/language-context';

import styles from './index.module.css';

export default function Card({ src, extraClassName }) {
  const { language } = useLanguage()
  return (
    <div className={classnames(styles.card, extraClassName)}>
      <img src={src} alt="card" className={classnames({ [styles.imgContain]: language === 'ja-JP' })} />
    </div>
  )
} 