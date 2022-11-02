import classnames from 'classnames';
import styles from './index.module.css';

function MobileMenu({visible, onClick}) {
  return (
    <div className={classnames(styles.container, { [styles.visible]: visible })} onClick={onClick}>
      <img width={24} height={24} src="icons/menu.svg" alt="menu" />
    </div>
  );
}

export default MobileMenu;
