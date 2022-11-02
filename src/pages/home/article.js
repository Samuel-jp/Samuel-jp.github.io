import styles from './index.module.css';

export default function Article({ title, description }) {
  return (
    <div className={styles.article}>
      <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></div>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  )
}