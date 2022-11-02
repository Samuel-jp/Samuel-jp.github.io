import styles from './index.module.css';

function IconTitle({ icon, title }) {
  return (
    <div className={styles.iconTitleContainer}>
      {/* <img src={icon} alt={title} /> */}
      <span className={styles.iconTitle}>{title}</span>
    </div>
  )
}

export default IconTitle;
